const path = require(`path`);
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Pépinière Khaoula `,
    description: `Pépinière Khaoula est l'une des meilleures pépinières à Kénitra et nous protègent notre réputation pour plus de 20 ans avec de nombreuses variantes de plantes de différentes tailles.    `,
    author: `@iliashaddad`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: "images",
      },
    },
    "gatsby-plugin-use-query-params",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    {
      // This plugin lets me access environment variables that
      // aren't prefixed with Gatsby. This allows me to use
      // Shopify-related variables in the context setup script.
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["SHOP_NAME", "SHOP_TOKEN"],
      },
    },

    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOP_TOKEN,
        verbose: true,
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: true,
          position: "displace",
        },
        plugins: [
          "gatsby-tinacms-json",
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/data`,
              name: "data",
            },
          },
          "gatsby-transformer-json",
          "gatsby-tinacms-git",
        ],
      },
    },
  ],
};
