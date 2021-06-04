import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import Link from 'next/link';
import Post from '../components/Post';
import { getPosts } from '@lib/posts';
import Search from '@components/Search';

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Search />
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post}>
            {post.frontmatter.title}
          </Post>
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All posts
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  // console.log(posts);

  return {
    props: {
      posts: posts.slice(0, 6),
    },
  };
}
