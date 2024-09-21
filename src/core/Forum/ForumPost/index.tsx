"use client";

import { FC, useEffect, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';

import Breadcrumb from "@/components/Breadcrumb";
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
import { comment } from 'postcss';
import { cp } from 'fs';
import Chip from '@/components/Chip';
import CustomMarkdown from '@/components/MarkdownRender';
import team from '@/verified/team';
import token from '@/verified/token';


const ForumPost: FC = () => {
  const [post, set_post] = useState<FPI>({ id: 0, title: "", post: "", created_at: 0, author: "", likers: [""], signature: "", tag: "" });
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
  const [signing_data, set_signing_data] = useState<string>('');
  const [is_edit_open, set_is_edit_open] = useState(false);
  const [comment_id, set_comment_id] = useState(0);
  const [show_oc_comment, set_show_oc_comment] = useState(false);
  const [comment_full_details, set_comment_full_details] = useState<number | null>(null);

  const toggle_popup = () => {
    set_comment_text('');
    set_signing_data('');
    set_is_popup_open(!is_popup_open);
  }

  const toggle_show_oc = () => {
    set_show_oc_comment(!show_oc_comment);
  }

  const toggle_show_full_comment_details = (index: number) => {
    set_comment_full_details(comment_full_details === index ? null : index);
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
    const s_data = "COMMENT MADE ON: [" + slug + "] - BY ADDRESS: [" + stakeAddress + "] - COMMENT TEXT: [" + comment_text + "]";
    set_signing_data(s_data);
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

  const handle_delete_comment = async (c: ForumComment) => {
    if (!isConnected) {
      return null;
    }
    if (is_valid_wallet(stakeAddress as string, c) === false) {
      return null;
    }
    await delete_comment(c.id);
  };

  const delete_comment = async (id: number) => {
    const { error } = await supabase
      .from('General Forum Comments')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(error);
    }

    fetch_post(Number(slug_ref));
  }

  const handle_edit_comment = async (comment: ForumComment) => {
    set_comment_text(comment.updated_comment ? comment.updated_comment : comment.post);
    set_comment_id(comment.id);
    set_signing_data('');
    set_is_edit_open(true);
    set_is_popup_open(!is_popup_open);
  };

  const on_sign_edit_comment = async (signature: string) => {
    // Update the comment in the database
    const { error } = await supabase
      .from('General Forum Comments')
      .update({ signature: signature, updated_comment: comment_text, last_updated: Math.floor(Date.now() / 1000) })
      .eq('id', comment_id);

    if (error) {
      console.error(error);
    } else {
      console.log('Comment updated!');
      // Close the modal or the form
      set_is_edit_open(false);
      set_is_popup_open(!is_popup_open);

      // Fetch the updated post
      fetch_post(Number(slug_ref));
    }
  };

  useEffect(() => {
    if (signing_data !== "") {
      if (is_edit_open == true) {
        signMessage("[EDITED COMMENT] - " + signing_data, on_sign_edit_comment)
      } else {
        signMessage(signing_data, on_sign_create_comment);
      }
    }
  }, [signing_data]);

  useEffect(() => {
    fetch_post(Number(slug_ref));
  }, []);

  const author_sliced = post.author.slice(0, 30) + "...";
  const sig_sliced = post.signature.slice(0, 30) + "...";

  const is_valid_wallet = (logged_in_wallet: string, post: ForumComment | FPI): boolean => {
    if (logged_in_wallet == post.author) {
      return true;
    } else if (logged_in_wallet == FORUM_GENERAL.admin) {
      return true;
    } else if (FORUM_GENERAL.mods.includes(logged_in_wallet)) {
      return true;
    }
    return false;
  }

  /**
   * @NOTE Mod tools
   */
  const handle_delete_post = async (post: ForumComment | FPI) => {
    if (!isConnected) {
      return null;
    }
    if (is_valid_wallet(stakeAddress as string, post) === false) {
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

  const is_author_known_project_team = (author: string) => team.some(team =>
    team.team_members.some(member =>
      member.stake_wallets.includes(author)
    )
  );

  const getTokenInfo = (author: string) => {
    const teamInfo = team.find(team =>
      team.team_members.some(member =>
        member.stake_wallets.includes(author)
      )
    );

    if (teamInfo) {
      const tokenInfo = token.find(token => token.slug === teamInfo.slug);
      return tokenInfo;
    }

    return undefined;
  };

  return (
    <div>
      <Breadcrumb sub_page_1='Forum' sub_page_2={slug_before_ref.toLocaleUpperCase()} active_page={slug_ref}/>

      { isConnected && FORUM_GENERAL.mods.includes(stakeAddress as string) && (
        <div>
          <h3 className='dark:text-violet-400 font-bold tracking-widest'>MOD TOOLS</h3>
          <div className='flex flex-row my-2'>
            <div onClick={() => handle_delete_post(post)}>
              <Button text='Delete Post' size='xs' class_extra='cursor-pointer'/>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-row'>
        <div className='py-6 w-80 mx-auto md:w-2/3'>
          <Card>
            <div className='flex flex-row items-center flex-wrap gap-2 pb-2 -mt-5'>
              <Button icon='like_solid' text={post.likers && post.likers.length.toString() || "0"} size='xs' class_extra='cursor-default dark:fill-neutral-300'/>
              <Button icon='chat_bubble_solid' text={comments && comments.length.toString() || "0"} size='xs' class_extra='cursor-default dark:fill-neutral-300'/>

              <div className='flex flex-row justify-center gap-4'>
                <ToolTip text={"Unix: " + post.created_at}>
                  <Chip icon='time_solid' text={format_unix_time(post.created_at)} size='xs'/>
                </ToolTip>
              </div>

              { FORUM_GENERAL.admin.includes(post.author) && (
                <div className='border-2 rounded-md dark:bg-neutral-900 border-neutral-500 dark:border-violet-400 cursor-default'>
                  <p className='text-xs px-2'><code>ADMIN</code></p>
                </div>
              )}

              { FORUM_GENERAL.mods.includes(post.author) && (
                <div className='border-2 rounded-md dark:bg-neutral-900 border-neutral-500 dark:border-yellow-400 cursor-default'>
                  <p className='text-xs px-2'><code>MOD</code></p>
                </div>
              )}
            </div>

            <div className='px-2 md:px-4 text-center mt-4 md:mt-10'>
              {post.tag && (
                <div className='flex flex-row justify-center items-center gap-2 my-4'>
                  <div className='border-2 rounded-md border-neutral-500 dark:border-violet-400 cursor-default'>
                    <p className='text-sm px-3 '><code>{'# ' + post.tag}</code></p>
                  </div>
                </div>
              )}

              <div className=''>
                <div className='text-center'>
                  <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider py-2">
                    {post.title}
                  </h3>

                  <p className='px-2 text-sm mt-4'>
                    <CustomMarkdown>
                      {post.post}
                    </CustomMarkdown>
                  </p>
                </div>
              </div>

              <div className='flex flex-row flex-wrap items-center gap-2 -mb-5 pt-6 md:pt-10'>
                <div onClick={() => copy_to_clipboard(post.author)}>
                  <ToolTip text={'Copy Stake Address'}>
                  { getTokenInfo(post.author) ?
                    (
                      <Button img={getTokenInfo(post.author)?.images.logo} text={'[$' + getTokenInfo(post.author)?.information.ticker + "] " + team.find(team => team.team_members.find(member => member.stake_wallets.includes(post.author)))?.team_members.find(member => member.stake_wallets.includes(post.author))?.name || post.author} size='xs' max_w='max-w-30' class_extra='cursor-copy dark:fill-neutral-300'/>
                    ) : (
                      <Button icon='curator_solid' text={post.author} size='xs' max_w='max-w-30' class_extra='cursor-copy -mt-5 dark:fill-neutral-300'/>
                    )
                  }
                  </ToolTip>
                </div>

                <div onClick={() => copy_to_clipboard(post.signature)}>
                  <ToolTip text='Copy Signature'>
                    <Button icon='copy_solid' text={post.signature} max_w='max-w-30' size='xs' class_extra='fill-neutral-300 cursor-copy'/>
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

      <div className='grid grid-cols-1 gap-10'>
        {comments && comments.sort((a, b) => a.created_at - b.created_at).map((comment, i) => (
          <Card key={i}>
            <div className='flex flex-wrap flex-col gap-1'>
              <div className='flex flex-row flex-wrap gap-2 gap-y-8'>
                <Button icon='hashtag_solid' text={(i + 1).toString()} size='xs' class_extra='-mt-5 -ml-4 dark:fill-neutral-300 cursor-default'/>

                <ToolTip text={comment.created_at.toString()}>
                  <Button icon='time_solid' text={format_unix_time(show_oc_comment == false ? comment.updated_comment != null ? comment.last_updated : comment.created_at : comment.created_at)} size='xs' class_extra='-mt-5 dark:fill-neutral-300'/>
                </ToolTip>

                { getTokenInfo(comment.author) ?
                  (
                    <ToolTip text={'$' + getTokenInfo(comment.author)?.information.ticker + ' Team Member'}>
                      <Button img={getTokenInfo(comment.author)?.images.logo} text={'[$' + getTokenInfo(comment.author)?.information.ticker + "] " + team.find(team => team.team_members.find(member => member.stake_wallets.includes(comment.author)))?.team_members.find(member => member.stake_wallets.includes(comment.author))?.name || comment.author} size='xs' max_w='max-w-30' url={'https://pool.pm/' + comment.author} target='_blank' class_extra='cursor-pointer -mt-5 dark:fill-neutral-300'/>
                    </ToolTip>
                  ) : (
                    <ToolTip text={'Stake Address'}>
                      <Button icon='curator_solid' text={comment.author} size='xs' max_w='max-w-30' url={'https://pool.pm/' + comment.author} target='_blank' class_extra='cursor-pointer -mt-5 dark:fill-neutral-300'/>
                    </ToolTip>
                  )
                }

                <div onClick={() => toggle_show_full_comment_details(i)}>
                  <ToolTip text={"Show full details."}>
                    <Button icon='detail_solid' size='xs' class_extra='cursor-pointer -mt-5 dark:fill-neutral-300'/>
                  </ToolTip>
                </div>

                { comment.last_updated && comment.updated_comment && !(comment_full_details === i) && (
                  <div onClick={toggle_show_oc}>
                    <ToolTip text={show_oc_comment == false ? comment.updated_comment != null ? "Show original post." : "Show edited post." : "Show edited post."}>
                      <Button icon='edited_solid' size='xs' class_extra='cursor-pointer -mt-5 dark:fill-neutral-300'/>
                    </ToolTip>
                  </div>
                )}
              </div>

              {!(comment_full_details === i) ?
                <p className='py-4 -mt-2 px-2 dark:text-neutral-300 min-h-25 items-center flex'>
                  <Markdown>{show_oc_comment == false ? `${comment.updated_comment != null ? "[EDITED] " + comment.updated_comment : ""} ${comment.post}` : comment.post}</Markdown>
                </p>
                :
                <div className='py-4 -mt-2 px-2 dark:text-neutral-300 min-h-25'>
                  <div className='flex flex-col flex-wrap gap-2'>
                    <div className='flex flex-row gap-2 flex-wrap p-0.5'>
                      <div onClick={() => copy_to_clipboard(comment.author)}>
                        <Button icon='copy_solid' size='xs' class_extra='dark:fill-neutral-300 cursor-pointer'/>
                      </div>
                      <Button text={'Author: ' + comment.author} size='xs' url={'https://pool.pm/' + comment.author} target='_blank' max_w='max-w-60'/>
                    </div>

                    <div className='flex flex-row gap-2 flex-wrap items-center p-0.5'>
                      <div onClick={() => copy_to_clipboard(comment.signature)}>
                        <Button icon='copy_solid' size='xs' class_extra='dark:fill-neutral-300 cursor-pointer'/>
                      </div>
                      <Chip text={'Signature: ' + comment.signature} size='xs' max_w='max-w-60'/>
                    </div>

                    <div className='flex flex-row gap-2 flex-wrap items-center p-0.5 mt-4 md:mt-10'>
                      <Chip icon='time_solid' text={comment.created_at.toString()} size='xs'/>
                      <Chip icon='time_solid' text={format_unix_time(comment.created_at)} size='xs'/>
                    </div>

                    <div className='flex flex-row gap-2 flex-wrap p-0.5'>
                      <div>
                        <Chip text='Original Comment:' size='xs'/>
                      </div>
                    </div>

                    <div className=''>
                      <div className='border-2 dark:border-neutral-600 rounded-md h-15 overflow-y-auto px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                        <p className='text-xs px-4 py-2'>
                          <code>{comment.post}</code>
                        </p>
                      </div>
                    </div>

                    {comment.updated_comment != null && (
                      <>
                      <div className='flex flex-row gap-2 flex-wrap items-center p-0.5 mt-4 md:mt-10'>
                        <Chip icon='time_solid' text={comment.last_updated.toString()} size='xs'/>
                        <Chip icon='time_solid' text={format_unix_time(comment.last_updated)} size='xs'/>
                      </div>
  
                      <div className='flex flex-row gap-2 flex-wrap p-0.5'>
                        <div>
                          <Chip text='Edited Comment:' size='xs'/>
                        </div>
                      </div>
  
                      <div className=''>
                        <div className='border-2 dark:border-neutral-600 rounded-md h-15 overflow-y-auto px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                          <p className='text-xs px-4 py-2'>
                            <code>{comment.updated_comment}</code>
                          </p>
                        </div>
                      </div>
  
                      </>
                    )}
                  </div>
                </div>
              }

              <div className='flex flex-row flex-wrap gap-2 -mb-5 pt-4'>
                { isConnected && is_valid_wallet(stakeAddress as string, comment) === true && (
                  <div onClick={() => handle_delete_comment(comment)}>
                    <ToolTip text={"Delete post."}>
                      <Button icon="delete_solid" size="xs" class_extra="fill-rose-400 cursor-pointer -mt-5 dark:fill-rose-400 "/>
                    </ToolTip>
                  </div>
                )}

                { isConnected && stakeAddress == comment.author === true && (
                  <div onClick={() => handle_edit_comment(comment)}>
                    <ToolTip text={"Edit post."}>
                      <Button icon="write_solid" size="xs" class_extra="fill-rose-400 cursor-pointer -mt-5 dark:fill-yellow-400 "/>
                    </ToolTip>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {post.likers && (
        <div className='py-10 md:mt-30'>
          <h3 className="text-sm text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
            Post Likers
          </h3>
          <div className='flex flex-row flex-wrap h-20 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
            {post.likers.map((l, i) => (
              <p key={i} className='text-xs py-2 truncate w-30'>
                <code>{l}{i !== post.likers.length - 1 ? ", " : ""}</code>
              </p>
            ))}
          </div>
        </div>
      )}

      <CreateCommentPopup
        is_edit={is_edit_open}
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