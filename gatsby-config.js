require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Inicio",
    titleTemplate: "%s | Yulianny Betancort",
    description:
      "Sitio oficial de Yulianny Betancort, dónde encontrarás los proyectos y el trayecto en el mundo del Desarrollo de Software como Ingeniero de Sistemas.",
    siteUrl: "https://www.yuliannydev.me",
    image: "/images/og.jpg",
    twitterUsername: "@yuliannydev",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        collectionTypes: ["portfolio"],
        queryLimit: 1000,
      },
    },
  ],
};
