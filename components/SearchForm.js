"use client";
import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import useCustomRouter from "@/hooks/useCustomRouter";

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();
  async function handleSearch(formData) {
    const search = formData.get("search");
    pushQuery({ search, page: 1 });
  }
  return (
    <form
      action={handleSearch}
      className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4 "
    >
      <input
        type="search"
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        name="search"
        defaultValue={query.search || ""}
      />
      <ButtonSubmit value="Search" />
    </form>
  );
};

export default SearchForm;
