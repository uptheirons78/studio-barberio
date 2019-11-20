const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const articoloPost = path.resolve(`./src/templates/articolo-post.js`);
  const sentenzaPost = path.resolve(`./src/templates/sentenza-post.js`);

  const articoliResult = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/articoli/" } }) {
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

  const sentenzeResult = await graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/sentenze/" } }) {
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

  // Create blog posts pages.
  const articoli = articoliResult.data.allMdx.edges;
  const sentenze = sentenzeResult.data.allMdx.edges;

  articoli.forEach(articolo => {
    createPage({
      path: `articoli${articolo.node.fields.slug}`,
      component: articoloPost,
      context: {
        slug: articolo.node.fields.slug,
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
