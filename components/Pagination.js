"use client";

import useCustomRouter from "@/hooks/useCustomRouter";
import React from "react";

const Pagination = ({ totalPage }) => {
  const newArray = [...Array(totalPage)].map((_, i) => i + 1);
  const { pushQuery, query } = useCustomRouter();
  return (
    <div
      className="flex justify-center"
      style={{ display: "flex", margin: "30px 10px" }}
    >
      {newArray.map((page) => (
        <button
          className="px-2 rounded-md  "
          key={page}
          onClick={() => pushQuery({ page })}
          style={{ background: (query.page || 1) === page ? "red" : "" }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
