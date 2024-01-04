import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    HeartIcon,
    EyeIcon,
    EyeSlashIcon
    
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/posts/fonts';
import Image from 'next/image';
import { posts } from '@/app/lib/placeholder-data'
import { Post } from '@/app/lib/definitions';
export default async function PostCardWrapper(){ 

    let data = []

    setTimeout(() =>{
        data = posts
    },2000)

    return (
        <>
        
        {
            posts.map((post, index) =>{ 
                const date = new Date().toISOString().split('T')[0]
               return (
                <PostCard
                key={index}
                title={post.title}
                description={post.description}
                author={post.author}
                status={post.status} 
                likes={post.likes}
                date={date}
                image_url={post.image_url}
                />
               )
            })
        }
        </>
    )
}
  export function PostCard({
    title,
    image_url,
    author,
    likes,
    status,
    date,
    description,
  
  }: {
    title: string;
    image_url?:string;
    author:string;
    likes?:number;
    status: string,
    date?:string;
    description:string
  }) {
  
    return (
      <div className="rounded-xl bg-gray-50  shadow-sm">
        <div className="flex relative">
            <Image src='/chrismas.jpg' width={500} height={500} alt='blog-image'/>
<div className='absolute bg-black w-full h-full bg-opacity-10  text-white font-bold flex justify-end pr-2 items-start'>
<h5 className="ml-2 text-sm font-medium mt-2">{status.charAt(0).toUpperCase()}{status.slice(1)}</h5>

</div>
        </div>
        <div className=' px-2'>
        <div className='flex justify-between items-center ' >
        <h5 className=" text-sm font-medium">{author}</h5>
        <h5 className="ml-2 text-sm font-medium">{date}</h5>
        </div>
        <h2 className=" text-lg py-1 font-bold">{title}</h2>
        <span className=" text-sm text-justify  text-gray-700 font-medium">{description}</span>

            <div className='flex  mt-5 justify-between px-2 items-stretch'>
                <HandThumbUpIcon className='w-6'/>
                <HeartIcon  className='w-6'/>
                <HandThumbDownIcon className='w-6'/>

            </div>
        </div>
       
      </div>
    );
  }
  