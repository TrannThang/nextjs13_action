"use client";

import { useMyConText } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

const PostCard = ({ post, handleDelete }) => {
  const { setEditPost } = useMyConText();
  let [isPending, startTransition] = useTransition();

  return (
    <div className="w-[800px]">
      <div className="border border-gray-200 overflow-hidden bg-cyan-50 shadow-sm rounded mb-5">
        <div className="flex flex-col ">
          <div className="md:w-1/4 p-3">
            <div
              style={{
                width: "80%",
                height: "50%",
                position: "relative",
              }}
            >
              <Image src={post?.image} alt="image" width={240} height={240} />
            </div>
          </div>
          <div className="md:w-2/4">
            <div className="p-4">
              <Link href={`/post/${post._id}`} className="hover:text-blue-600">
                <h3>{post?.title}</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:w-1/4" style={{ display: "flex", gap: 20 }}>
          <button
            className="px-2 rounded-md bg-red-400"
            onClick={() => setEditPost(post)}
          >
            Edit
          </button>
          <button
            disabled={isPending}
            onClick={() => startTransition(() => handleDelete(post._id))}
          >
            {isPending ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
