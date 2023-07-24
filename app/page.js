import { getAllPosts } from "@/actions/postActions";
import Feature from "@/components/Feature";
import Pagination from "@/components/Pagination";
import PostForm from "@/components/PostForm";
import { PostList } from "@/components/PostList";
import React from "react";
import Image from "next/image";

const Home = async ({ params, searchParams }) => {
  const { posts, totalPage } = await getAllPosts(searchParams);

  return (
    <div className="px-4">
      <header className=" px-2 border-b">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="flex-shrink-0 mr-5">
              <a href="/">
                <Image
                  src="/images/logo.png"
                  height="40"
                  width="120"
                  alt="BuyItNow"
                />
              </a>
            </div>
            <Feature />
          </div>
        </div>
      </header>

      <PostForm />
      {posts && <PostList posts={posts} />}
      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
};

export default Home;
