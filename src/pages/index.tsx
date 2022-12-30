import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const blogPosts = await fetch('/api/blog-posts');
  const users = await fetch('/api/users');
  return { props: { blogPosts, users } };
};
interface User {
  id: number;
  name: string;
  nickName: string;
}

type THomeProps = {
  blogPosts: BlogPost[];
  users: User[];
};

const Home: FC<THomeProps> = ({ blogPosts = [], users = [] }) => {
  return (
    <div>
      <h1>Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
