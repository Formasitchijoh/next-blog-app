import React from 'react'
import { Metadata } from 'next';
import Search from '@/app/ui/posts/search';
import { CreatePost } from '@/app/ui/post/buttons';
import { Suspense } from 'react';
import Pagination from '@/app/ui/post/pagination';
import PostCardWrapper from '@/app/ui/posts/card';
import { posts } from '@/app/lib/placeholder-data';
const Page = () => {
  return (
    <>
    
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={` text-2xl`}>Posts</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreatePost />
      </div>

      <div className='grid md:grid-cols-2 gap-10 mt-9'>

      <PostCardWrapper/>
      </div>
      
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={posts.length} />
      </div>
    </div>
    </>
  )
}

export default Page