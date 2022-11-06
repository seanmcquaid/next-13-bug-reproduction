'use client';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
import Post from '../types/Post';

export default function HomePage({ recentPosts }: { recentPosts: Post[] }) {
  const handleOnClick = () => {
    throw new Error('Error');
  };
  return (
    <div>
      {recentPosts.map(post => (
        <div key={post.id} onClick={handleOnClick}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
