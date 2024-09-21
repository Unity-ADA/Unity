import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

import Button from '@/components/Button';
import ToolTip from '@/components/Tooltip';

import { FORUM_GENERAL } from '@/consts/global';

import { forum_check_valid_post } from '@/utils/StringUtils';

interface component_props {
  is_popup_open: boolean;

  comment_text: string;
  set_comment_text: Dispatch<SetStateAction<string>>;

  toggle_popup: () => void;
  create_post: () => Promise<null | undefined>;
}

const CreateCommentPopup: FC <component_props> = ({
  is_popup_open, toggle_popup, create_post, comment_text, set_comment_text
}) => {
  const { isConnected } = useCardano();
  const [is_valid, set_is_valid] = useState(false);

  const fg_string_rules = FORUM_GENERAL.string_rules;

  useEffect(() => {
    if (comment_text.length !== 0) {
      set_is_valid(forum_check_valid_post(undefined, undefined, comment_text));
    } else {
      set_is_valid(false);
    }
  }, [comment_text]);

  function handle_create_post() {
    create_post();
  };

  return (
    <>
      {is_popup_open && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-70 flex justify-center items-center z-10 transition-all duration-300">
          <div className="mx-4 dark:bg-neutral-900 border-2 dark:border-neutral-800 px-4 py-2 rounded-lg flex flex-col gap-2">
            <h3 className='font-bold tracking-wider text-center'>
              Comment on Token
            </h3>

            <code className='text-center text-xs md:px-10'>
              {`Minimum 3 characters.`}<br/>
              {`Maximum 200 characters.`}<br/>
            </code>

            <div>
              <form className="flex flex-col gap-4 mt-4">
                <div className='block'>
                  <code className='text-xs'>{comment_text.length + "/" + fg_string_rules.MAX_CHARS_COMMENTS}</code>
                  <input
                    placeholder="Write a comment..."
                    className="w-full px-4 py-2 bg-neutral-950/70 rounded-md text-sm focus:bg-neutral-950/30 focus:text-neutral-300 text-neutral-400 placeholder-neutral-400 focus:ring-0 focus:outline-none"
                    value={comment_text}
                    onChange={(e) => set_comment_text(e.target.value)}
                  />
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
                    <ToolTip text='Error: Comment is invalid!'>
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

export default CreateCommentPopup;