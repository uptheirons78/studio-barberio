const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const sentenzaPost = path.resolve(`./src/templates/sentenza-post.js`);
  const articoloPost = path.resolve(`./src/templates/articoli-post.js`);

  const blogResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    throw blogResult.errors;
  }

  const sentenzeResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/sentenze/" } }
          sort: { fields: [frontmatter___data], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                titolo
              }
            }
          }
        }
      }
    `
  );

  if (sentenzeResult.errors) {
    throw sentenzeResult.errors;
  }

  const articoliResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/articoli/" } }
          sort: { fields: [frontmatter___data], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                titolo
              }
            }
          }
        }
      }
    `
  );

  if (articoliResult.errors) {
    throw articoliResult.errors;
  }

  // Create blog posts pages.
  const posts = blogResult.data.allMdx.edges;
  const sentenze = sentenzeResult.data.allMdx.edges;
  const articoli = articoliResult.data.allMdx.edges;

  posts.forEach(post => {
    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });

  sentenze.forEach(sentenza => {
    createPage({
      path: `sentenze${sentenza.node.fields.slug}`,
      component: sentenzaPost,
      context: {
        slug: sentenza.node.fields.slug,
      },
    });
  });

  articoli.forEach(articolo => {
    createPage({
      path: `articoli${articolo.node.fields.slug}`,
      component: articoloPost,
      context: {
        slug: articolo.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
