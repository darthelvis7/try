import Image from 'next/image';
import styles from './page.module.css';
import prisma from '@/lib/prisma';
import Post from './components/Post';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/nextAuth';

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log({ homePage: session });
  const posts = await getPosts();
  console.log({ posts });
  console.log('hello');
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>Data</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}
