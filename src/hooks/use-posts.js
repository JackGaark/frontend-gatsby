import {graphql,useStaticQuery} from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql `
    query {
      allMdx(sort: { fields: [id] order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            author
            slug
            url
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    url: post.frontmatter.url
  }));
};

export default usePosts;
