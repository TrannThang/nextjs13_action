"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const ButtonSubmit = ({ value }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      {pending ? "Loading..." : value}
    </button>
  );
};

export default ButtonSubmit;
