const { db } = require("@vercel/postgres");
const { users, posts } = require("../src/app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    const createTable = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            role TEXT NOT NULL,
            image_url VARCHAR(255) NOT NULL,
            socials JSONB NOT NULL
        );
        `);
    console.log(`Created users table`);
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.query(`
                INSERT INTO users (id, name, email, password, role, image_url, socials)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (id) DO NOTHING
                `, [user.id, user.name, user.email, hashedPassword, user.role, user.image_url, user.socials]);
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);
    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedPosts(client) {
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    const createTable = await client.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                image_url VARCHAR(255) NOT NULL,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                author VARCHAR(255) NOT NULL,
                likes INT NOT NULL,
                status VARCHAR(50) NOT NULL,
                date VARCHAR(50) NOT NULL
            );
            `);
    console.log("Created posts table");
    const insertedPosts = await Promise.all(
      posts.map((post) => {
        return client.query(`
                    INSERT INTO posts (
                        id,
                        image_url,
                        title,
                        description,
                        author,
                        likes,
                        status,
                        date
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                    ON CONFLICT (id) DO NOTHING
                    `, [post.id, post.image_url, post.title, post.description, post.author, post.likes, post.status, post.date]);
      })
    );
    console.log(`Seeded ${insertedPosts.length} posts`);
    return {
      createTable,
      posts: insertedPosts,
    };
  } catch (error) {
    console.error("Error seeding posts:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedPosts(client);
 

  await client.end();
}

main().catch((error) => {
  console.error(
    "An error occurred while attempting to seed the database",
    error
  );
});