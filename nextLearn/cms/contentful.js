import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

async function fetchBlogPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

async function fetchPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    if (entries.items) {
      return entries.items[0];
    }
  } catch (e) {
    throw e;
  }
}

export default {
  fetchBlogPosts,
  fetchPostBySlug,
};
