import Link from "next/link";


export async function getStaticProps() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const res = await fetch(`http://127.0.0.1:3001/posts`);
  const res = await fetch(`http://localhost:3001/posts`);
  const posts = await res.json();
  return {
    props: { posts },
    revalidate: 50
  };
}
export default function Isr({ posts }) {
  return (
    <div>
      <h2>Posts API</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/rendering/ssg/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

