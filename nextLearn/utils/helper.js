export const getNavigationLink = (slug) => `/blog/${slug}`;
export const getHref = (slug) => ({
  pathname: "/blog",
  query: { post: slug },
});
