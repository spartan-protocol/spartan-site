require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://spartanprotcol.org",
    title: "Spartan Protocol",
  },
  // pathPrefix: `/spartan-site`,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon-32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://api.github.com/repos/spartan-protocol/SpartanProtocol-DAppV2/contributors",
          "https://api.github.com/repos/spartan-protocol/spartan-site/contributors",
          "https://api.github.com/repos/spartan-protocol/spartan-docs/contributors",
        ],
      },
    },
  ],
};
