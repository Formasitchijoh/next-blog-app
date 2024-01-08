import React from 'react'
import Form from '../../ui/posts/create-post'
import { Suspense } from 'react'
import { PostCardSkeleton } from '../../ui/posts/skeletons'
import Posts from '../../ui/posts/card'
import { fetchPostPages } from '../../lib/data'
export default async function Page({searchParams}:{searchParams?:{
  query?:string,
  currentPage?:number
}}){ 

  const query = searchParams?.query || '';
  const currentPage = searchParams?.currentPage || 1;
  const totalPages = await fetchPostPages(query)
  return (
    <div>
      <div className='w-full py-4'>
        <h1 className='text-gray-900  text-xl md:text-2xl font-bold'>Recent Posts</h1>
        <hr className='w-20 h-[2px]  bg-teal-800' />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <Suspense fallback={<PostCardSkeleton/>}>
        <Posts  query={query} currentPage={currentPage}/>
      </Suspense>
      </div>
        {/* <Form/> */}
    </div>
  )
}

