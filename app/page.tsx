// Import your Client Component
import HomePage from './HomePage';
import Post from '../types/Post';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://...');
  return await res.json();
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />;
}
