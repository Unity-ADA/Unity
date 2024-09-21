
import { FC, useEffect, useState }  from "react";

import token from "@/verified/token";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { supabase } from '@/utils/api/supabase';
import { TokenComment, TokenLikes } from "@/utils/Interfaces";
import CreateCommentPopup from "./CreateCommentPopup";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";
import { copy_to_clipboard } from "@/utils/StringUtils";
import { FORUM_GENERAL } from "@/consts/global";

interface UserSocialInteractionProps {
  info: token;
}

const UserSocialInteraction: FC <UserSocialInteractionProps> = ({ info }) => {
  const { isConnected, stakeAddress, signMessage } = useCardano();
  const [comments, set_comments] = useState<TokenComment[]>();
  const [token_likes, set_token_likes] = useState<TokenLikes>();

  const [is_popup_open, set_is_popup_open] = useState(false);
  const [comment_text, set_comment_text] = useState('');
  const [signing_data, set_signing_data] = useState<any>('');
  const [show_all_comments, set_show_all_comments] = useState(false);

  const toggle_popup = () => {
    set_comment_text('');
    set_signing_data('');
    set_is_popup_open(!is_popup_open);
  }

  const fetch_token_interactions = async (id: string) => {
    const { data: c_data, error: c_error } = await supabase
      .from<"Project Comments", TokenComment>('Project Comments')
      .select('*')
      .eq('project_slug', id)

    const { data: l_data, error: l_error } = await supabase
      .from<"Project Likes", TokenLikes>('Project Likes')
      .select('*')
      .eq('project_slug', info.slug)
      .single();

    if (c_error || l_error) {
      console.error(c_error || l_error);
    } else {
      set_comments(c_data as TokenComment[]);
      set_token_likes(l_data as TokenLikes);
    };
  };

  const handle_token_like = async () => {
    if (!isConnected) {
      return null;
    }

    if (stakeAddress && !token_has_liker(stakeAddress)) {
      const s_data = "LIKED SLUG: [" + info.slug + "] - BY ADDRESS: [" + stakeAddress + "]";
      await signMessage(s_data, on_sign_token_liked);
    }
  };

  const token_has_liker = (addr: string): boolean => {
    if (!token_likes) {
      return false;
    }
    return token_likes.likers?.includes(addr);
  }

  const on_sign_token_liked = async () => {
    const updatedLikers = token_likes ? [...token_likes.likers, stakeAddress] : [stakeAddress];
  
    // Check if the row exists
    const { data, error: selectError } = await supabase
      .from<"Project Likes", TokenLikes>('Project Likes')
      .select('*')
      .eq('project_slug', info.slug)
      .single();
  
    let updateError;
    if (data) {
      // If the row exists, update it
      const { error } = await supabase
        .from<"Project Likes", TokenLikes>('Project Likes')
        //@ts-ignore
        .update({ likers: updatedLikers })
        .eq('project_slug', info.slug)
        .single();
  
      updateError = error;
    } else {
      // If the row doesn't exist, insert a new row
      const { error } = await supabase
        .from<"Project Likes", TokenLikes>('Project Likes')
        //@ts-ignore
        .insert( {project_slug: info.slug, likers: updatedLikers} );
  
      updateError = error;
    }
  
    if (updateError) {
      console.error(updateError);
    } else {
      console.log('Liker added to post');
      fetch_token_interactions(info.slug);
    }
  };
  
  const handle_all_comments = () => {
    set_show_all_comments(!show_all_comments);
  }

  const fetch_token_comments = async (id: string) => {
    const { data, error } = await supabase
      .from<"Project Comments", TokenComment>('Project Comments')
      .select('*')
      .eq('project_slug', id);

    if (error) {
      console.error(error);
    } else {
      set_comments(data as TokenComment[]);
    }
  };

  const handle_create_comment = async () => {
    if (!isConnected) {
      return null;
    }
    set_signing_data([comment_text].toString());
    await signMessage(signing_data, on_sign_create_comment);
  }

  const on_sign_create_comment = async (signature: string) => {
    const data_to_push = {
      comment: comment_text,
      author: stakeAddress,
      created_at: Math.floor(Date.now() / 1000),
      project_slug: info.slug,
      signature: signature,
    };

    const { error } = await supabase
      .from('Project Comments')
      .insert([data_to_push])
      .single();

    if (error) {
      console.error(error);
    } else {
      console.log('Comment Made!');
      fetch_token_comments(info.slug);
      toggle_popup();
    }
  };

  useEffect(() => {
    fetch_token_interactions(info.slug);
  }, []);

  const handle_delete_post = async (id: number, comment_author: string) => {
    if (!isConnected) {
      return null;
    }
    if (stakeAddress != comment_author) {
      return null;
    }
    await delete_comment(id);
  };

  const delete_comment = async (id: number) => {
    const { error } = await supabase
      .from('Project Comments')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(error);
    }

    fetch_token_interactions(info.slug);
  }

  return (
    <div className="mb-6">
      <div className="py-4">
        <h2 className="text-lg font-bold text-top-color tracking-wider flex flex-col justify-center items-center">
          <div>
            <span className="dark:text-violet-400">
              {info.information.name}
            </span>
              {' on '}
            <span className="dark:text-violet-400">
              Unity
            </span>
          </div>
          <div className="dark:bg-neutral-300 h-1 rounded-full w-20 mt-1 mb-3"/>
        </h2>
      </div>

      <div className="py-2 flex flex-row flex-wrap gap-4">
        <>
          { isConnected && (
            <>
              <div onClick={handle_token_like} className="">
                <Button icon="like_solid" text={'Like Token'} size="xs" class_extra={`dark:fill-neutral-300 ${token_has_liker(stakeAddress as string) ? "cursor-not-allowed" : "cursor-pointer"}`}/>
              </div>

              <div onClick={toggle_popup} className="">
                <Button icon="chat_bubble_solid" text={'Make Comment'} size="xs" class_extra="dark:fill-neutral-300 cursor-pointer"/>
              </div>
            </>
          )}

          { comments && comments.length != 0 && (
            <div onClick={handle_all_comments} className="">
              <Button icon="hashtag_solid" text={'View All Comments'} size="xs" class_extra="dark:fill-neutral-300 cursor-pointer"/>
            </div>
          )}
        </>
      </div>

      <div className="flex flex-row flex-wrap gap-6 py-2">
        <h3>
          <code>Token Likes: {token_likes && token_likes.likers?.length || "0"}</code>{/** @TODO */}
        </h3>
        <h3>
          <code>Token Comments: {comments && comments.length || "0"}</code>
        </h3>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-0.5 md:p-2 ${show_all_comments ? "hidden" : "mt-4"}`}>
        { comments && !show_all_comments && /** @TODO sort by highest liked before full comments */
          comments.slice(0, 3).map((comment, i) => (<>
            <Card hover_effect key={i}>
              <div className="">
                <div className="flex flex-row flex-wrap -mt-5 pb-2 gap-2">
                  <div onClick={() => copy_to_clipboard(comment.author)}>
                    <Button icon="user_solid" text={comment.author} max_w="max-w-24" size="xs" class_extra="truncate cursor-copy"/>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <span className="text-sm dark:text-neutral-300 text-center">
                  <code>
                    {comment.comment}
                  </code>
                </span>
              </div>

              <div className="flex flex-row flex-wrap -mb-6 pt-4 gap-2 items-center">
                { isConnected && (comment.author == stakeAddress || stakeAddress == FORUM_GENERAL.admin || FORUM_GENERAL.mods.includes(stakeAddress as string)) && (
                  <div onClick={() => handle_delete_post(comment.id, stakeAddress as string)}>
                    <Button icon="delete_solid" size="xs" class_extra="fill-rose-400 cursor-pointer"/>
                  </div>
                )}
                { FORUM_GENERAL.admin.includes(comment.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-violet-400 dark:bg-neutral-900 cursor-default'>
                    <p className='text-xs px-2'><code>ADMIN</code></p>
                  </div>
                )}
                { FORUM_GENERAL.mods.includes(comment.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-yellow-400 dark:bg-neutral-900 cursor-default'>
                    <p className='text-xs px-2'><code>MOD</code></p>
                  </div>
                )}
              </div>
            </Card>
          </>
        ))}
      </div>

      <div className={`grid grid-cols-1 gap-y-10 py-4 p-2 mt-6 ${show_all_comments ? "mt-4" : "hidden"} min-h-30 max-h-80 overflow-y-auto text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}>
        { comments && show_all_comments && comments.map((comment, i) => (
          <Card key={i}>
            <div className="flex flex-col flex-wrap">
              <div className="flex flex-row flex-wrap -mt-6 gap-2">
                <div onClick={() => copy_to_clipboard(comment.author)}>
                  <Button icon="hashtag_solid" text={i + 1} max_w="max-w-24" size="xs" class_extra="fill-neutral-300 truncate cursor-default"/>
                </div>
                { isConnected && comment.author == stakeAddress && (
                  <div onClick={() => handle_delete_post(comment.id, stakeAddress as string)}>
                    <Button icon="delete_solid" size="xs" class_extra="fill-rose-400 cursor-pointer"/>
                  </div>
                )}
              </div>

              <span className="text-sm dark:text-neutral-300 h-15 flex items-center justify-center px-4">
                <code>
                  {comment.comment}
                </code>
              </span>

              <div className="flex flex-row flex-wrap -mb-6 gap-2 items-center">
                <div onClick={() => copy_to_clipboard(comment.author)}>
                  <Button icon="user_solid" text={comment.author} max_w="max-w-24" size="xs" class_extra="truncate cursor-copy"/>
                </div>

                <div onClick={() => copy_to_clipboard(comment.signature)}>
                  <Button icon="write_solid" text={comment.signature} max_w="max-w-24" size="xs" class_extra="fill-neutral-300 truncate cursor-copy"/>
                </div>
                { FORUM_GENERAL.admin.includes(comment.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-violet-400 dark:bg-neutral-900 cursor-default'>
                    <p className='text-xs px-2'><code>ADMIN</code></p>
                  </div>
                )}
                { FORUM_GENERAL.mods.includes(comment.author) && (
                  <div className='border-2 rounded-md border-neutral-500 dark:border-yellow-400 dark:bg-neutral-900 cursor-default'>
                    <p className='text-xs px-2'><code>MOD</code></p>
                  </div>
                )}
              </div>

            </div>
          </Card>
        ))}
      </div>

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

export default UserSocialInteraction;