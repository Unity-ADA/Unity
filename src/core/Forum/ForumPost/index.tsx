"use client";

import { FC, useEffect, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';

import Breadcrumb from "@/components/Breadcrumb";
import { forum_sections_details } from '../const';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { supabase } from '@/utils/api/supabase';
import { ForumPost as FPI, ForumComment } from '@/utils/Interfaces';
import ToolTip from '@/components/Tooltip';
import Markdown from 'react-markdown';
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';
import CreateCommentPopup from './CreateCommentPopup';

import { format_unix_time, copy_to_clipboard } from '@/utils/StringUtils';
import { FORUM_GENERAL } from '@/consts/global';


const ForumPost: FC = () => {
  const [post, set_post] = useState<FPI>({ id: 0, title: "", post: "", created_at: 0, author: "", likers: [""], signature: "" });
  const [comments, set_comments] = useState<ForumComment[]>();

  const slug = usePathname();
  const slug_parts = slug.split('/');
  const slug_ref = slug.split('/').pop() as string;
  const slug_before_ref = slug_parts[slug_parts.length - 2];

  const fetch_post = async (id: number) => {
    const { data: postData, error: postError } = await supabase
      .from<"General Forum", FPI>('General Forum')
      .select('*')
      .eq('id', id)
      .single();

    const { data: commentData, error: commentError } = await supabase
      .from<"General Forum Comments", ForumComment>('General Forum Comments')
      .select('*')
      .eq('post_id', id);

    if (postError || commentError) {
      console.error(postError || commentError);
      /** @NOTE scruffy but it'll do */
      window.location.href = '/';
    } else {
      set_post(postData as FPI);
      set_comments(commentData as ForumComment[]);
    }
  };

  const { isConnected, stakeAddress, signMessage } = useCardano();

  const [is_popup_open, set_is_popup_open] = useState(false);
  const [comment_text, set_comment_text] = useState('');
  const [signing_dat, set_signing_dat] = useState<any>('');

  const toggle_popup = () => {
    set_comment_text('');
    set_signing_dat('');
    set_is_popup_open(!is_popup_open);
  }

  const handle_post_like = async () => {
    if (!isConnected) {
      return null;
    }

    if (stakeAddress && !post_has_liker(stakeAddress)) {
      const s_data = "Post ID:" + Number(slug_ref) + " " + stakeAddress + " liked post";
      await signMessage(s_data, on_sign_post_liked);
    }
  };

  const post_has_liker = (addr: string): boolean => {
    return post.likers && post.likers.includes(addr);
  }

  const on_sign_post_liked = async () => {
    const updatedLikers = post.likers ? [...post.likers, stakeAddress] : [stakeAddress];

    const { data: updatedPost, error: updateError } = await supabase
      .from<"General Forum", FPI>('General Forum')
      /** @TODO breaking the law */
      // @ts-ignore
      .update({ likers: updatedLikers }) 
      .eq('id', Number(slug_ref))
      .single();

    if (updateError) {
      console.error(updateError);
    } else {
      console.log('Liker added to post');
      fetch_post(Number(slug_ref));
    }
  };

  const handle_create_comment = async () => {
    if (!isConnected) {
      return null;
    }
    set_signing_dat([comment_text].toString());
    await signMessage(signing_dat, on_sign_create_comment);
  }

  const on_sign_create_comment = async (signature: string) => {
    const data_to_push = {
      post: comment_text,
      author: stakeAddress,
      created_at: Math.floor(Date.now() / 1000),
      post_id: Number(slug_ref),
      signature: signature,
    };

    const { error } = await supabase
      .from('General Forum Comments')
      .insert([data_to_push])
      .single();

    if (error) {
      console.error(error);
    } else {
      console.log('Post Made!');
      fetch_post(Number(slug_ref));
      toggle_popup();
    }
  };

  useEffect(() => {
    fetch_post(Number(slug_ref));
  }, []);

  const author_sliced = post.author.slice(0, 30) + "...";
  const sig_sliced = post.signature.slice(0, 30) + "...";

  /**
   * @NOTE Mod tools
   */
  const handle_delete_post = async () => {
    if (!isConnected) {
      return null;
    }
    if (!FORUM_GENERAL.mods.includes(stakeAddress as string)) {
      return null;
    }
    await delete_entire_post();
  };

  const delete_entire_post = async () => {
    const { error: postError } = await supabase
      .from('General Forum')
      .delete()
      .eq('id', Number(slug_ref));

    const { error: commentError } = await supabase
      .from('General Forum Comments')
      .delete()
      .eq('post_id', Number(slug_ref));
  
    if (postError || commentError) {
      console.error(postError || commentError);
      //window.location.href = '/forums';
    }
    window.location.href = '/forum';
  }

  return (
    <div>
      <Breadcrumb sub_page_1='Forum' sub_page_2={slug_before_ref.toLocaleUpperCase()} active_page={slug_ref}/>

      { isConnected && FORUM_GENERAL.mods.includes(stakeAddress as string) && (
        <div>
          <h3 className='dark:text-violet-400 font-bold tracking-widest'>MOD TOOLS</h3>
          <div className='flex flex-row my-2'>
            <div onClick={handle_delete_post}>
              <Button text='Delete Post' size='xs' class_extra='cursor-pointer'/>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-row justify-center'>
        <div className='py-6 w-80 mx-auto md:w-2/3'>
          <Card>
            <div className='flex flex-row flex-wrap justify-center gap-2 pb-2 -mt-5'>
              <Button icon='like_solid' text={post.likers && post.likers.length.toString() || "0"} size='xs' class_extra='cursor-default dark:fill-neutral-300'/>
              <Button icon='chat_bubble_solid' text={comments && comments.length.toString() || "0"} size='xs' class_extra='cursor-default dark:fill-neutral-300'/>
            </div>

            <div className='px-2 md:px-4 text-center'>
              <div className='flex flex-row justify-center gap-4'>
                <p className='border-2 dark:border-neutral-700 rounded-lg px-4 mt-1 text-sm'>
                  <ToolTip text={"Unix: " + post.created_at}>
                    <code>{format_unix_time(post.created_at)}</code>
                  </ToolTip>
                </p>
              </div>

              <div className='flex flex-row justify-center items-center gap-2 mt-2'>
                { FORUM_GENERAL.admin.includes(post.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-violet-400'>
                    <p className='text-xs px-2'><code>ADMIN</code></p>
                  </div>
                )}
                { FORUM_GENERAL.mods.includes(post.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-yellow-400'>
                    <p className='text-xs px-2'><code>MOD</code></p>
                  </div>
                )}
              </div>

              <div className='py-4'>
                <div className='text-center'>
                  <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider mt-2 py-2">
                    {post.title}
                  </h3>
                  <p className='px-2 text-sm mt-4'>
                    <Markdown
                      components={{
                        img: ({ node, ...props }) => <img className='mx-auto max-w-30 py-2 my-2 max-h-full' {...props} />,
                        hr: ({ node, ...props }) => <hr className='my-2' {...props} />,
                        p: ({ node, ...props }) => <p className='py-0.5' {...props} />,
                        a: ({ node, ...props }) => <a className='py-0.5 dark:text-violet-400 font-medium tracking-wider' {...props} />,
                      }}
                    >
                      {post.post}
                    </Markdown>
                  </p>
                </div>
              </div>

              <div className='flex flex-row flex-wrap justify-center gap-2 -mb-5 pt-6'>
                <div onClick={() => copy_to_clipboard(post.author)}>
                  <ToolTip text='Stake Address'>
                    <Button text={author_sliced} size='xs' class_extra='fill-neutral-300 cursor-copy'/>
                  </ToolTip>
                </div>
                <div onClick={() => copy_to_clipboard(post.signature)}>
                  <ToolTip text='Signature'>
                    <Button text={sig_sliced} size='xs' class_extra='fill-neutral-300 cursor-copy'/>
                  </ToolTip>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      { isConnected && (
        <div className='flex flex-wrap flex-row justify-center gap-2 py-2'>
          <div className='flex flex-wrap flex-row gap-4' onClick={toggle_popup}>
            <Button text='Make Comment' size='xs' class_extra='cursor-pointer'/>
          </div>

          <div
            className='flex flex-wrap flex-row gap-4'
            onClick={handle_post_like}
          >
            <Button text='Like Post' size='xs' class_extra={`${post_has_liker(stakeAddress as string) ? 'cursor-not-allowed' : 'cursor-pointer'}`}/>
          </div>
        </div>
      )}

      <div className="flex flex-row gap-2 py-6">
        <h3 className="text-sm text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
          Post Comments: {comments && comments.length || "0"}
        </h3>
      </div>

      <div className='grid grid-cols-1 gap-6'>
        {comments && comments.map((comment, i) => (
          <Card key={i}>
            <div className='flex flex-wrap flex-col gap-1'>
              <div className='flex flex-row flex-wrap gap-2 gap-y-8'>
                <Button icon='hashtag_solid' text={(i + 1).toString()} size='xs' class_extra='-mt-5 -ml-4 dark:fill-neutral-300 cursor-default'/>

                <ToolTip text={comment.created_at.toString()}>
                  <Button text={format_unix_time(comment.created_at)} size='xs' class_extra='-mt-5'/>
                </ToolTip>

                <div onClick={() => copy_to_clipboard(comment.author)}>
                  <ToolTip text={'Stake Address'}>
                    <Button text={comment.author} size='xs' class_extra='cursor-copy -mt-5 dark:fill-neutral-300 max-w-30 truncate md:max-w-50'/>
                  </ToolTip>
                </div>

                <div onClick={() => copy_to_clipboard(comment.signature)}>
                  <ToolTip text={'Signature'}>
                    <Button text={comment.signature} size='xs' class_extra='cursor-copy -mt-5 dark:fill-neutral-300 max-w-30 truncate md:max-w-50'/>
                  </ToolTip>
                </div>
              </div>

              <p className='py-4 px-2 dark:text-neutral-300'>
                {comment.post}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      {post.likers && (
        <div className='py-10 md:mt-30'>
          <h3 className="text-sm text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
            Post Likers
          </h3>
          <div className='flex flex-row flex-wrap gap-6'>
            <p className='text-xs py-2'>
              {post.likers.map((l, i) => (
                <code key={i} className=''>{l}{i !== post.likers.length - 1 ? ", " : ""}</code>
              ))}
            </p>
          </div>
        </div>
      )}

      <CreateCommentPopup
        is_popup_open={is_popup_open}
        toggle_popup={toggle_popup}
        create_post={handle_create_comment}
        comment_text={comment_text}
        set_comment_text={set_comment_text}
      />
    </div>
  );
};

export default ForumPost;
