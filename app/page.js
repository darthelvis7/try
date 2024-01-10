import Image from 'next/image';
import styles from './page.module.css';
import prisma from '@/lib/prisma';

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
  const posts = await getPosts();
  console.log({ posts });
  console.log('hello');
  return (
    <main className={styles.main}>
      <h1>Data</h1>
    </main>
  );
}
