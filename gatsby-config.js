module.exports = {
  siteMetadata: {
    title: `Scott Gustas' Personal Portfolio`,
    description: `An exploration into the work of Scott Gustas.`,
    author: `Scott Gustas`,
    links: {
      github: `https://github.com/sc0ttius`,
      linkedin: `https://www.linkedin.com/in/scottgustas/`,
      soundcloud: `https://soundcloud.com/sc0ttius`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}