import React, { useRef } from "react";
import styles from "./style.module.css";
import Layout from "../../layouts/Layout";
import { database, push, ref } from "../../config/firebase";

const CreatePost = () => {
  const textRef = useRef();

  const createPost = () => {
    const text = textRef.current.value;
    const postsRef = ref(database, "posts");
    push(postsRef, {
      text,
      time: new Date().getTime(),
      likes: 0,
      seen: 0,
      comments: [1, 2, 3],
      repost: 0,
    });
    textRef.current.value = "";
  };

  return (
    <Layout>
      <div className={styles.container}>
        <textarea
          className={styles.textBox}
          ref={textRef}
          placeholder="What's on your mind?"
        ></textarea>
        <button className={styles.button} onClick={createPost}>
          Post
        </button>
      </div>
    </Layout>
  );
};

export default CreatePost;
