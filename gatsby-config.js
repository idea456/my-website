module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Adrienne Rio",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Blk7v8bdhV90cnBXnSQHv3_dVSBpVAjDi0YJodeOQtg",
        // accessToken: "iPaZdz4A97nadpXLzOnTA18tUS1NMT39gFON57tz6wc",
        spaceId: "8lz29owteu2j",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
