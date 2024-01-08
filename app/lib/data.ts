import { sql } from "@vercel/postgres";
import { Post } from "./definitions";

export async function fetchPosts(){

    try{
        console.log('Fetching posts data');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Post> `SELECT * FROM posts`;
        console.log('Data fetch completed after 3 seconds');
        console.log(`value of the posts \n ${JSON.stringify(data.rows)}`);
        
        return data.rows;
        
        
    }catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data');
    }
}

export async function fetchUsers(){
    try{ 

        console.log('Fetching users');
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const data = await sql<Post> `SELECT * FROM users`;
        console.log('Data fetch completed after 3 seconds');
        return data.rows;

    }catch(error){
        console.error('Failed to fetch users', error);
        throw new Error('Failed to fetch new user')
        
    }
}

const ITEMS_PER_PAGE = 4;
export async function fetchFilteredPosts(query:string, currentPage:number){
    const offset = (currentPage -1) * ITEMS_PER_PAGE;

    try{ 
        // await new Promise((resolve) => setTimeout(resolve, 3000))

        const posts = await sql<Post>`
        SELECT
        posts.id,
        posts.image_url,
        posts.title,
        posts.description,
        posts.author,
        posts.likes,
        posts.status,
        posts.date
        FROM posts WHERE 
        posts.image_url ILIKE ${`%${query}`} OR
        posts.title ILIKE ${`%${query}`} OR
        posts.description ILIKE ${`%${query}`} OR
        posts.author ILIKE ${`%${query}`} OR
        posts.likes::text ILIKE ${`%${query}`} OR
        posts.status ILIKE ${`%${query}`} 
        ORDER BY posts.date DESC 
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
        
        return posts.rows;
    }catch(err){
        console.log('DataBase error', err);
        throw new Error('Failed to make query')
        
    }
}

export async function fetchPostPages(query:string){
    try {
        
        const count = await sql`
        SELECT COUNT(*) FROM posts 
        WHERE 
        posts.image_url ILIKE ${`%${query}`} OR
        posts.title ILIKE ${`%${query}`} OR
        posts.description ILIKE ${`%${query}`} OR
        posts.author ILIKE ${`%${query}`} OR
        posts.likes::text ILIKE ${`%${query}`} OR
        posts.status ILIKE ${`%${query}`} OR
        posts.date::text ILIKE ${`%${query}`} `;
        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
    }catch(error) {
        console.log('Database error', error);
        throw new Error('Failed to fetch total number of posts.');
        
    }
}

export async function fetchPostById(id:string){
    try {
        
        const data = await sql<Post> `
        SELECT 
        posts.id,
        posts.image_url,
        posts.title,
        posts.description,
        posts.author,
        posts.likes,
        posts.status,
        posts.date
        FROM posts
        WHERE posts.id = ${id}

        `;
       return data.rows[0]
    } catch (error) {
        console.log('Database Error:', error);
        throw new Error('Failed to fetch posts.');
    }
}