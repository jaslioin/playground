import Post from "../../components/Post";
import ContentfulClient from "~/cms/contentful";
function PostPage({ post }) {
  return <Post contentfulEntry={post.fields} />;
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await ContentfulClient.fetchPostBySlug(slug);
  return {
    props: { post },
  };
}
export async function getStaticPaths() {
  //required for dynamic SSG page
  const blogs = await ContentfulClient.fetchBlogPosts();
  const blogSlugs = blogs.map((post) => {
    return post.fields.slug;
  });
  const paths = blogSlugs.map((slug) => `/post/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
export default PostPage;
