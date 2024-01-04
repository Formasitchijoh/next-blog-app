'use server'
import { z} from 'zod'
import { sql} from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
const FormSchema = z.object({

    id: z.string(),
    image_url: z.string({invalid_type_error:'please select a customer'}),
    title : z.string({invalid_type_error:'please enter the title'}),
    description: z.string({invalid_type_error:'please enter the descripiton of your post'}),
    author : z.string({invalid_type_error:'author name required'}),
    likes : z.coerce.number(),
    status : z.enum(['public', 'private'], { invalid_type_error:'please select a status'}),
    date : z.string()
})
export type State = {
    errors?:{
        image_url?:string[];
        title:string[];
        description:string[];
        author:string[];
        status:string[];
    };
    message?:string[] | null
}

const CreatePost = FormSchema.omit({id:true, date:true, likes:true})

export async function createPost( formData:FormData){

    const validatedFields = CreatePost.safeParse({

        image_url: formData.get('image_url'),
        title: formData.get('title'),
        description: formData.get('description'),
        author: formData.get('author'),
        likes : formData.get('likes'),
        status: formData.get('status'),
    });
    //checking if validation fails then we return an error

    if(!validatedFields.success){
        return {
            errors:validatedFields.error.flatten().fieldErrors,
            message:'Missing Fields, Failed to create Invoice'
        };
    }

    //preparing data for insertion into the database

    const {image_url, title, description, author, status} = validatedFields.data
    const date = new Date().toISOString().split('T')[0];

    try{ 

        await sql `
        
        INSERT INTO posts (image_url, title, description, author,likes, status, date)
        VALUES (${image_url},${title}, ${description}, ${author}, ${status}, ${date})
        `

    }catch(error){
        return {
            message:'Database Error : Failed to create Invoice'
        }
    }
    
}