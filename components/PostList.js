"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import PostCard from "./PostCard";
import { deletePost } from "@/actions/postActions";

export const PostList = ({ posts }) => {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({ ...state, posts: newPosts })
  );
  async function handleDelete(postId) {
    if (window.confirm("Do you want to delete this post")) {
      const newPosts = posts.filter((post) => post._id !== postId);
      addOptimisticPosts((optimisticPosts.posts = newPosts));
      await deletePost(postId);
    }
  }

  return (
    <div style={{ gap: 20 }}>
      {optimisticPosts?.posts?.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
