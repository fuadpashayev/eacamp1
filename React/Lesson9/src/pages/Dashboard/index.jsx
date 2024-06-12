import React from "react";
import Layout from "../../layouts/Layout";
import usePosts from "../../hooks/usePosts";

const Dashboard = () => {
  const { posts, setPosts } = usePosts();

  return (
    <Layout>
      {posts.map((post) => (
        <div
          key={post.time}
          style={{
            marginBottom: 50,
            borderBottom: "1px solid #ccc",
          }}
        >
          <p>{post.text}</p>
          <div
            style={{
              borderTop: "1px solid #ccc",
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>Likes: {post.likes}</div>
            <div>Reposts: {post.repost}</div>
            <div>Comments: {post.comments.length}</div>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Dashboard;
