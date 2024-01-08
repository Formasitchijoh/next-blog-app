import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  HandThumbUpIcon,
  ShareIcon,
  HeartIcon,
  EyeIcon,
  EyeSlashIcon,
  PencilIcon
} from "@heroicons/react/24/outline";
import { lusitana } from './fonts';
import Image from "next/image";
import { fetchPosts, fetchFilteredPosts } from "../../lib/data";
import { UpdatePost, DeletePost } from "../post/buttons";
export default async function Posts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const postdata = await fetchPosts()
  const images =['/santa.jpg','/hero1.jpg','/picnic.jpg', '/tree.jpeg']
const selectImage = (index:number):string =>{ 
  
  return images[index]
}
  const posts = await fetchFilteredPosts(query, currentPage);
  
  return (
    <>
      {posts.map((post, index) => {
        const date = new Date().toISOString().split("T")[0];
        return (
          <PostCard
            key={index}
            id={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
            status={post.status}
            likes={post.likes}
            date={date}
            image_url={selectImage(index)}
          />
        );
      })}
    </>
  );
}
 
export function PostCard({
  id,
  title,
  image_url,
  author,
  likes,
  status,
  date,
  description,
}: {
  id:string
  title: string;
  image_url: string;
  author: string;
  likes?: number;
  status: string;
  date?: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50  shadow-sm">
      <div className="flex relative">
        <Image
          src={image_url}
          className="w-full"
          width={500}
          height={500}
          alt="blog-image"
        />
        <div className="absolute bg-black w-full h-full bg-opacity-10  text-white font-bold flex justify-end pr-2 items-start">
          <h5 className="ml-2 text-md  font-bold  mt-2">
            {status.charAt(0).toUpperCase()}
            {status.slice(1)}
          </h5>
        </div>
      </div>
      <div className=" px-2">
        <div className="flex justify-between items-center py-2 text-gray-800 ">
          <h5 className=" text-sm font-medium">{author}</h5>
          <h5 className="ml-2 text-sm font-medium">{date}</h5>
        </div>
        <h2 className=" text-lg py-1 font-bold text-teal-900">{title}</h2>
        <span className=" text-sm text-justify  text-gray-700 font-medium">
          {description}
        </span>

        <div className="flex  mt-5 justify-between px-2 py-2 items-stretch">
          <div className="flex gap-2">
          <HandThumbUpIcon className="w-6 " /> 
          <span className=" text-gray-500"> 5</span>
          </div>
            <UpdatePost id={id}/>
            {/* <DeletePost id={id}/> */}
            {/* <div className="flex gap-2">
            <HeartIcon className="w-6 " />
          <span className="text-gray-500">10</span>
          </div> */}
          <div className="flex gap-2">
          <ShareIcon className="w-6 " />
          </div>
          
        </div>
      </div>
    </div>
  );
}
