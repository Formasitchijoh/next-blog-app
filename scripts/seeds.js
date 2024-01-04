const { db } = require('@vercel/postgres')
const {
users, posts
} = require('../src/app/lib/placeholder-data.js')
const bcrypt = require('bcrypt');

async function seedUsers(client){
    try{
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql `
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        socials JSONB NOT NULL
        );
        `;
        console.log(`Created "invoices" table`);
        const insertedUsers = await Promise.all(
            users.map(async (user) =>{
                const hashedPassword = await bcrypt.hash(user.password,10)
                return client.sql`
                INSERT INTO users (id, name, email, password, role, image_url, socials)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.image_url}, ${user.socials})
                ON CONFLICT  (id) DO NOTHING
                `;
            })
        );

        console.log(`Seeded ${insertedUsers.length} users`);
        return {
            createTable,
            users: insertedUsers,
          };
        } catch (error) {
          console.error('Error seeding users:', error);
          throw error;
        }
    }

    async function seedPosts(client){
        try{
            await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
            const createTable = await client.sql `
            CREATE TABLE IF NOT EXIST post (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    likes INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    date  VARCHAR(50) NOT NULL,
            );
            `;
            console.log('Created posts table');
            const insertedPosts = await Promise.all(
                posts.map((post) => {
                    return client.sql`
                    
                    INSERT INTO post (
                        id,
                        image_url,
                        title,
                        description ,
                        author,
                        likes,
                        status,
                        date 
                    ) 
                    VALUES(${post.id}, ${post.image_url}, ${post.title}, ${post.description},${post.author}, ${post.likes}, ${post.status},${post.date})
                    ON CONFLICT (id) DO NOTHING
                    `;
                })
            );
            console.log(`Seeded ${insertedPosts.length} users`);
            return {
                createTable,
                posts:insertedPosts
            };
        }catch(error){
            console.error('Error seeding users:', error);
            throw error;
        }
    }