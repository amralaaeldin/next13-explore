import { useRouter } from 'next/router'

export default function Post({ post }) {
  const router = useRouter()

  console.log(router.isFallback)
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Post ID: {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // const paths = posts.map((post) => `/rendering/ssg/${post.id}`);
  // const paths = posts.map((post) => {
  const paths = posts.slice(0, 10).map((post) => {
    return { params: { post: post.id.toString() } }
  })
  return {
    paths,
    // fallback: 'blocking',
    fallback: true,
    // fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post)
  return { props: { post }, notFound: !Object.keys(post).length };
}




// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return { props: { posts: data.slice(0, 5) }, notFound: !Object.keys(post).length };
// }
// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   // const paths = posts.map((post) => `/rendering/ssg/${post.id}`);
//   const paths = posts.slice(0, 10).map((post) => {
//     return { params: { post: post.id.toString() } }
//   })
//   // const paths = posts.map((post) => ({
//   //   params: { post: post.id.toString() },
//   // }))
//   return {
//     paths,
//     fallback: true,
//   };
// }

// // export async function getStaticProps({ params }) {
// //   const id = params.post;
// //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// //   const post = await res.json();
// //   console.log(post)
// //   return { props: { post }, notFound: !Object.keys(post).length };
// // }


// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return { props: { posts: data.slice(0, 5) }, notFound: !Object.keys(post).length };
// }