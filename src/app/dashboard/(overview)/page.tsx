import React from 'react'
import Form from '@/app/ui/posts/create-post'
import { Suspense } from 'react'
import PostCardWrapper from '@/app/ui/posts/card'
import { PostCardSkeleton } from '@/app/ui/posts/skeletons'
const Page = () => {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
      <Suspense fallback={<PostCardSkeleton/>}>
        <PostCardWrapper/>
      </Suspense>
      </div>
        {/* <Form/> */}
    </div>
  )
}

export default Page