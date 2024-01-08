import React from "react";
import { Metadata } from "next";
import Search from "../../ui/posts/search";
import { CreatePost } from "../../ui/post/buttons";
import { Suspense } from "react";
import Pagination from "../../ui/post/pagination";
import Posts from "../../ui/posts/card";
import { fetchPostPages, fetchPosts } from "../../lib/data";
import { PostCardSkeleton } from "../../ui/posts/skeletons";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPostPages(query);

  const posts = await fetchPosts();
 

  return (
    <>
      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search posts..." />
          <CreatePost />
        </div>

        <Suspense fallback={<PostCardSkeleton />}>
          <div className="grid md:grid-cols-2 gap-10 mt-9">
            <Posts query={query} currentPage={currentPage} />
          </div>
        </Suspense>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
