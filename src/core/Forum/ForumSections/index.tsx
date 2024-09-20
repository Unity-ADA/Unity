"use client";

import { FC, useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { redirect, usePathname } from 'next/navigation';

import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

import { forum_sections_details } from '../const';

import Breadcrumb from "@/components/Breadcrumb";
import Button from '@/components/Button';
import Card from '@/components/Card';

import { supabase } from '@/utils/api/supabase';
import { ForumComment, ForumPost } from '@/utils/Interfaces';
import CreatePostPopup from './CreatePostPopup';
import { forum_check_valid_post } from '@/utils/StringUtils';


const ForumSections: FC = () => {
  const slug = usePathname();
  const slug_ref = slug.split('/').pop() as string;
  const section_info = forum_sections_details.find(f => f.slug === slug_ref);

  if (!section_info) {
    redirect('/');
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [postText, setPostText] = useState('');
  const [author, setAuthor] = useState<any>('');
  const [signingData, setSigningData] = useState<any>('');

  const { isConnected, stakeAddress, signMessage } = useCardano();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [is_valid, set_is_valid] = useState(false);

  const togglePopup = () => {
    setTitleText('');
    setPostText('');
    setIsPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    if (titleText.length !== 0 && postText.length !== 0) {
      set_is_valid(forum_check_valid_post(titleText, postText, undefined));
    } else {
      set_is_valid(false);
    }
  }, [titleText, postText]);

  useEffect(() => {
    fetchPosts(slug_ref);
  }, []);

  

  const fetchPosts = async (id: string) => {
    let data, error;
    if (id === 'general') {
      ({ data, error } = await supabase.from<"General Forum", ForumPost>('General Forum').select('*'));
    }
  
    if (error) {
      console.error(error);
    } else {
      const postsWithCommentCount = await Promise.all(
        (data as ForumPost[]).map(async (post) => {
          const { data: commentData, error: commentError } = await supabase
            .from<"General Forum Comments", ForumComment>('General Forum Comments')
            .select('count')
            .eq('post_id', post.id);

          if (commentError) {
            console.error(commentError);
            return { ...post, comment_count: 0 };
          } else {
            return { ...post, comment_count: commentData[0].count};
          }
        })
      );
  
      setPosts(postsWithCommentCount as ForumPost[]);
    }
  };

  const create_post = async () => {
    if (!is_valid) {
      return null;
    }
    if (!isConnected) {
      return null;
    }
    setSigningData([titleText, postText].toString());
    setAuthor(stakeAddress);

    await signMessage(signingData, onSignMessage);
  }

  const onSignMessage = async (signature: string) => {
    const data_to_push = {
      title: titleText,
      post: postText,
      author: author,
      created_at: Math.floor(Date.now() / 1000),
      signature: signature,
    };

    const { error } = await supabase.from('General Forum').insert([data_to_push]).single();

    if (error) {
      console.error(error);
    } else {
      console.log('Post Made!');
      fetchPosts(slug_ref);
      togglePopup();
    }
  };

  return (
    <div>
      <Breadcrumb sub_page_1='Forum' active_page={section_info.slug}/>

      <div className='py-6'>
        <div className="flex flex-wrap gap-4 items-center pb-2 px-2">
          <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
            {section_info.title}
          </h3>

          {isConnected && (
            <div onClick={togglePopup}>
              <Button text='Create Post' size='xs' class_extra='cursor-pointer'/>
            </div>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
          {posts && posts.map((post, i) => (
            <Card key={i} hover_effect>
              <div className='flex flex-row gap-2 -ml-4 -mt-4'>
                <Button icon='like_solid' text={post.likers && post.likers.length.toString() || "0"} size='xs' class_extra='fill-neutral-300 cursor-default'/>
                <Button icon='chat_bubble_solid' text={post.comment_count && post.comment_count.toString() || "0"} size='xs' class_extra='fill-neutral-300 cursor-default'/>
              </div>

              <h3 className='py-1 mt-2 text-center font-medium tracking-wider text-lg uppercase dark:text-neutral-200'>
                {post.title}
              </h3>

              <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 h-10 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <code>
                  {post.post.length > 60 ? post.post.substring(0, 60) + '...' : post.post}
                </code>
              </p>

              <div className='flex flex-wrap flex-row justify-center gap-2 -mb-5 pt-2'>
                <Button icon='read_solid' text='Read Post' size='xs' url={'/forum/' + slug_ref + '/' + post.id} class_extra='dark:fill-neutral-300'/>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CreatePostPopup
        is_popup_open={isPopupOpen}
        section_info={section_info}
        title_text={titleText}
        set_title_text={setTitleText}
        post_text={postText}
        set_post_text={setPostText}
        toggle_popup={togglePopup}
        create_post={create_post}
      />
    </div>
  );
};

export default ForumSections;