import React, { useRef } from "react";
import styles from "./style.module.css";
import { database, ref, set } from "../../../config/firebase";
import ActionButton from "./ActionButton";

const PostItem = ({ post }) => {
  const isLiked = useRef(false);

  const like = () => {
    const postRef = ref(database, `posts/${post.id}/likes`);
    const newLikeValue = isLiked.current ? post.likes - 1 : post.likes + 1;
    isLiked.current = !isLiked.current;
    set(postRef, newLikeValue);
  };

  const repost = () => {
    const postRef = ref(database, `posts/${post.id}/repost`);
    set(postRef, post.repost + 1);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postText}>{post.text}</div>
      <div className={styles.actionBar}>
        <ActionButton title={`Like ${post.likes}`} onClick={like} />
        <ActionButton
          title={`Comment ${post.comments.length}`}
          onClick={repost}
        />
        <ActionButton title={`Repost ${post.repost}`} onClick={repost} />
      </div>
    </div>
  );
};

export default PostItem;
