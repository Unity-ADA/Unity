"use client";

import { FC, useEffect, useState } from 'react';

import Breadcrumb from "@/components/Breadcrumb";
import Button from '@/components/Button';
import Card from '@/components/Card';
import { forum_sections_details } from './const';
import { ForumComment, ForumPost } from '@/utils/Interfaces';
import { supabase } from '@/utils/api/supabase';
import Chip from '@/components/Chip';
import TextLink from '@/components/TextLink';

const ForumIndex: FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);

  const slug_ref = [
    "general",
  ];

  useEffect(() => {
    slug_ref.forEach((slug) => {
      fetchPosts(slug);
    });
  }, [slug_ref]);

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
            return { ...post, comment_count: commentData[0].count };
          }
        })
      );
  
      setPosts(postsWithCommentCount as ForumPost[]);
    }
  };

  return (
    <div>
      <Breadcrumb active_page='Forum'/>

      <div className='py-6'>
        <div className="flex flex-col gap-2 items-center pb-4 px-2">
          <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
            Unity Forums Overview
          </h3>
          <h3 className="text-sm text-neutral-600 dark:text-neutral-200 tracking-wider text-center">
            The Unity Forums is in a very early stage of development when compared to the rest of the platform.<br/>
            Things may break, not go as expected and other unmentionable things.<br/>
            <span className='dark:text-violet-400 font-bold tracking-widest uppercase text-xs'>Please bare with us.</span>
          </h3>
        </div>

        <div className="flex flex-row flex-wrap gap-2 items-center py-2 px-2">
          <div className='px-2'>
            <Chip text='General' size='xs'/>
          </div>
          <div className='px-2'>
            <TextLink text='View All' url='/forum/general' size='xs'/>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4'>
          {posts.slice(0, 4).map((post, i) => {

            return (
              <Card key={i} hover_effect>
                <div className='flex flex-row gap-2 -ml-4 -mt-4'>
                  <Button icon='like_solid' text={post.likers && post.likers.length.toString() || "0"} size='xs' class_extra='fill-neutral-300 cursor-default'/>
                  <Button icon='chat_bubble_solid' text={post.comment_count && post.comment_count.toString() || "0"} size='xs' class_extra='fill-neutral-300 cursor-default'/>
                </div>

                <h3 className='py-2 h-25 flex items-center justify-center text-center font-medium tracking-wider text-lg uppercase dark:text-neutral-200'>
                  {post.title}
                </h3>

                <div className='flex flex-wrap flex-row justify-center gap-2 -mb-5 pt-2'>
                  <Button icon='read_solid' text='Read Post' size='xs' url={'/forum/' + slug_ref + '/' + post.id} class_extra='dark:fill-neutral-300'/>
                </div>
              </Card>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ForumIndex;
