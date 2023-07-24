"use client";

import { createPost, updatePost } from "@/actions/postActions";
import React, { useRef } from "react";

import ButtonSubmit from "./ButtonSubmit";
import { useMyConText } from "@/context/Provider";

const PostForm = () => {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyConText();
  async function handleAction(formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    if (editPost) {
      await updatePost({ title, image, id: editPost._id });
    } else {
      await createPost({ title, image });
    }

    setEditPost();

    formRef.current.reset();
  }
  return (
    <form
      ref={formRef}
      action={handleAction}
      style={{ display: "flex", gap: 20, margin: "30px 0" }}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        defaultValue={editPost?.title}
        className="border w-[500px] "
      />

      <input
        type="text"
        name="image"
        placeholder="Image"
        required
        defaultValue={editPost?.image}
        className="border  w-[700px]"
      />

      {editPost ? (
        <>
          <ButtonSubmit value="Update" />
          <button type="button" onClick={() => setEditPost()}>
            Cancel
          </button>
        </>
      ) : (
        <ButtonSubmit value="Create" />
      )}
    </form>
  );
};

export default PostForm;
