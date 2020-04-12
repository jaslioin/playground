import Card from "../components/Card";
import Head from "next/head";
import ContentfulClient from "../cms/contentful";
import { useEffect } from "react";

function HomePage({ posts }) {
  useEffect(() => {
    console.log(posts);
  });
  return (
    <>
      <Head>
        <title>Jasonly' s Blog</title>
      </Head>

      {posts.length > 0
        ? posts.map((p) => (
            <Card
              slug={p.fields.slug}
              key={p.fields.title}
              heroImage={p.fields.heroImage.fields.file.url}
              title={p.fields.title}
              publishedAt={p.fields.publishDate}
              description={p.fields.description}
            />
          ))
        : null}
    </>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const posts = await ContentfulClient.fetchBlogPosts();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default HomePage;
