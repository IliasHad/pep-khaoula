const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
    {
        allStrapiProducts {
          edges {
            node {
             slug
            }
          }
        }
      }
      
    `)

    const {createPage} = actions
    result.data. allStrapiProducts.edges.forEach(({ node }) => {
        createPage({
          path: `/product/${node.slug}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })

}