import React from "react";
import PostItem from "./PostItem";
import styles from "./style.module.css";
import usePosts from "../../../hooks/usePosts";

const Posts = ({}) => {
  const { posts } = usePosts();

  console.log({ posts });

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostItem key={post.time} post={post} />
      ))}
    </div>
  );
};

export default Posts;
