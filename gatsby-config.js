const path = require(`path`)
require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind with Plant.js`,
    author: `@taylorbryant`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-helmet`,
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`,
    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`products`],
      //If using single types place them in this array.
      // Possibility to login with a strapi user, when content types are not publically available (optional).
   
    },
  }
  ]
};
