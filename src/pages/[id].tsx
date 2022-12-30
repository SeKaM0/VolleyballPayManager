import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

export const getServerSideProps: GetServerSideProps<TBlogProps> = async (
  ctx,
) => {
  const id = ctx.query.id;
  const post = await fetch(`/api/blog-posts/${id}`);
  const users = await fetch('/api/users');
  return { props: { post, users } };
};
interface User {
  id: number;
  name: string;
  nickName: string;
}

type TBlogProps = {
  post: BlogPost;
  users: User[];
};

const Blog: FC<TBlogProps> = ({ post = {}, users = [] }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Blog {post.title}</h1>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.nickName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
