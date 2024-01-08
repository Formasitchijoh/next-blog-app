import { fetchPostById } from "@/app/lib/data";
import EditForm from "@/app/ui/posts/edit-form"; 
import { notFound } from "next/navigation";
import NotFound from "./not-found";
export default async function Page({params}:{params:{id:string}}){
    const id = params.id;

    const post = await fetchPostById(id)
    if(!post){
        notFound()
    }
    return (
        <EditForm post={post}/>
    )
    
}