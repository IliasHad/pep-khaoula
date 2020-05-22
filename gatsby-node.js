const path = require("path");
const { createRemoteFileNode } = require("gatsby-source-filesystem");
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);

  const { createPage } = actions;
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: node.handle,
      },
    });
  });
};
