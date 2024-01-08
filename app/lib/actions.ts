'use server'
import { z} from 'zod'
import { sql} from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '../../auth'
import { AuthError } from 'next-auth';
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
const CreatePost = FormSchema.omit({id:true, date:true, likes:true})
const UpdatePost = FormSchema.omit({id:true,date:true, likes:true})

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


export async function createPost( formData:FormData){
    const validatedFields = CreatePost.safeParse({
        image_url: formData.get('image_url'),
        title: formData.get('title'),
        description: formData.get('description'),
        author: formData.get('author'),
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
    const likes = 6;

    

    try{ 
        console.log('Successfull in');
        await sql`
        INSERT INTO posts (image_url, title, description, author, likes, status, date)
        VALUES (${image_url}, ${title}, ${description}, ${author}, ${likes}, ${status}, ${date})
        `
        console.log('Successfull inserted data');
    }catch (error) {
        console.error('Failed to create post:', error);
        return {
          message: 'Database Error: Failed to create post',
        };
      }
    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/posts');
  redirect('/dashboard/posts');
    
}

export async function updatePost(id:string, formData:FormData){
    const validatedFields = UpdatePost.safeParse({
        image_url: formData.get('image_url'),
        title: formData.get('title'),
        description: formData.get('description'),
        author: formData.get('author'),
        status: formData.get('status'),

    })

    if(!validatedFields.success){
        return {
            errors:validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields, Failed to create Invoice'
        }
    } 

    const { image_url, title, description, author, status} = validatedFields.data
    const date = new Date().toISOString().split('T')[0];
    const likes = 6;
    
    try{ 
        console.log(`logging the value of the updatedfields \n ${JSON.stringify(validatedFields.data)}`);
        await sql`
        UPDATE posts SET image_url = ${image_url}, title = ${title}, description = ${description}, likes = ${likes}, author = ${author}, status = ${status} 
        WHERE id = ${id}
        `;
        console.log('Successfull inserted data\n id', id);

    }catch(error){
        console.log('Failed to create post:', error);
        return {
            message:'Database Error: Failed to create post'
        }
        
    } 

    revalidatePath('/dashoard/posts')
    redirect('/dashboard/posts')
}

export async function deletePosts(id: string) { 
  
    try{
      await sql`DELETE FROM posts WHERE id = ${id}`;
    
    }catch(err){
      return {
        message:'Database Error: Failed to delete posts'
      }
    }
    revalidatePath('/dashboard/posts');
  }

  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ){
    try {    
        await signIn('credentials', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return 'Invalid credentials.';
              default:
                return 'Something went wrong.';
            }
          }
          throw error;
        }
    }
  