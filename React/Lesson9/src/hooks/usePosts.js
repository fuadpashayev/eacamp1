import { useContext } from "react";
import { Context } from "../contexts/PostContext";

const usePosts = () => {
  const { posts, setPosts } = useContext(Context);

  return { posts, setPosts };
};

export default usePosts;
