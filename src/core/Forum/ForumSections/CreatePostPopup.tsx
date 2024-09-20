import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import Markdown from 'react-markdown';
import Button from '@/components/Button';

import { forum_sections_details } from '../const';
import { forum_check_valid_post } from '@/utils/StringUtils';
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';
import ToolTip from '@/components/Tooltip';
import { FORUM_GENERAL } from '@/consts/global';

interface component_props {
  is_popup_open: boolean;
  section_info: forum_sections_details;

  title_text: string;
  set_title_text: Dispatch<SetStateAction<string>>;

  post_text: string;
  set_post_text: Dispatch<SetStateAction<string>>;

  toggle_popup: () => void;
  create_post: () => void;
}

const CreatePostPopup: FC <component_props> = ({
  is_popup_open, section_info, title_text, set_title_text, post_text, set_post_text, toggle_popup, create_post
}) => {
  const { isConnected } = useCardano();
  const [show_preview, set_show_preview] = useState(false);
  const [is_valid, set_is_valid] = useState(false);

  const fg_string_rules = FORUM_GENERAL.string_rules;

  const toggle_preview = () => {
    set_show_preview(!show_preview);
  }

  useEffect(() => {
    if (title_text.length !== 0 && post_text.length !== 0) {
      set_is_valid(forum_check_valid_post(title_text, post_text, undefined));
    } else {
      set_is_valid(false);
    }
  }, [title_text, post_text]);

  function handle_create_post() {
    create_post();
  };

  return (
    <>
      {is_popup_open && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-70 flex justify-center items-center z-10 transition-all duration-300">
          <div className="mx-4 dark:bg-neutral-900 border-2 dark:border-neutral-800 px-4 py-2 rounded-lg flex flex-col gap-2">
              <h3 className='font-bold tracking-wider text-center'>
              Create a Post on
              <span className='text-violet-400'>{' ' + section_info.title}</span>
            </h3>

            <code className='text-center text-xs md:px-10'>
              {`[*] - Limited markdown support is supported when creating your post.`}<br/>
              {`Minimum 3 characters in each field.`}<br/>
              {`Maximum 50 characters in title field. Maximum 600 characters in post field.`}<br/>
              {`Images are always center aligned with a limited size.`}
            </code>

            <div>
              <form className="flex flex-col gap-4 mt-4">
                <div className='block'>
                  <code className='text-xs'>{title_text.length + "/" + fg_string_rules.MAX_CHARS_TITLE}</code>
                  <input
                    placeholder="Write a title..."
                    className="w-full px-4 py-2 bg-neutral-950/70 rounded-md text-sm focus:bg-neutral-950/30 focus:text-neutral-300 text-neutral-400 placeholder-neutral-400 focus:ring-0 focus:outline-none"
                    value={title_text}
                    onChange={(e) => set_title_text(e.target.value)}
                  />
                </div>

                <div className={`block ${show_preview ? "hidden" : ""}`}>
                  <code className='text-xs'>{post_text.length + "/600"}</code>
                  <textarea
                    placeholder="[*] Write your post..."
                    className="min-h-20 w-full px-4 py-2 bg-neutral-950/70 rounded-md text-sm focus:bg-neutral-950/30 focus:text-neutral-300 text-neutral-400 placeholder-neutral-400 focus:ring-0 focus:outline-none"
                    value={post_text}
                    onChange={(e) => set_post_text(e.target.value)}
                  />
                </div>

                <div className={`block ${show_preview == true ? "min-h-20" : "hidden"}`}>
                  <Markdown
                    components={{
                      img: ({ node, ...props }) => <img className='mx-auto max-w-30 py-2 my-2 max-h-full' {...props} />,
                      hr: ({ node, ...props }) => <hr className='my-2' {...props} />,
                      p: ({ node, ...props }) => <p className='py-0.5' {...props} />,
                      a: ({ node, ...props }) => <a className='py-0.5 dark:text-violet-400 font-medium tracking-wider' {...props} />,
                    }}
                  >
                    {post_text}
                  </Markdown>
                </div>

                <div className='flex flex-row justify-center' onClick={toggle_preview}>
                  <Button text={`${!show_preview ? "Show Preview" : "Back to Edit"}`} size='xs' class_extra='cursor-pointer'/>
                </div>
              </form>
            </div>

            <div className='-mb-5 pt-2 flex flex-row gap-2 justify-center'>
              <div onClick={toggle_popup}>
                <Button text='Close Popup' size='xs' class_extra='cursor-pointer'/>
              </div>

              { (is_valid && isConnected) ?
                <div className='transition-all duration-300' onClick={handle_create_post}>
                  <Button text='Submit Post' size='xs' class_extra={`cursor-pointer`}/>
                </div>
                :
                <div className='transition-all duration-300'>
                  { !isConnected ? 
                    <ToolTip text='Error: Wallet isnt connected!'>
                      <Button text='Invalid' size='xs' class_extra={`cursor-not-allowed`}/>
                    </ToolTip>
                    :
                    <ToolTip text='Error: Post is invalid!'>
                      <Button text='Invalid' size='xs' class_extra={`cursor-not-allowed`}/>
                    </ToolTip>
                  }
                </div>
              }

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePostPopup;