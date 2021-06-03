import Image from 'next/image';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
        />

        <h1 className='text-6xl my-5'>😢</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>
          이 페이지는 존재하지 않습니다.
        </h2>
      </div>
    </Layout>
  );
}
