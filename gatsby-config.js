/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Giulia Nicola Pernice`,
    description: `Product Designer and Full Stack Developer`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `https://nicolapernice.com`,
    authorName: `Nicola Giulia Pernice`,
    socialimage: `/exness_cover_social.jpeg`,
    twitter: `https://twitter.com/KdSign`,
    github: `https://github.com/yumyo`,
    gitlab: `https://gitlab.com/k30`,
    linkedin: `https://www.linkedin.com/in/pernice/`,
    stackoverflow: `https://stackoverflow.com/story/nicola-giulia-pernice`,
    secureEmail: `ekrypt@mailfence.com`,
    behance: `https://www.behance.net/kairos`,
    pinterest: `https://www.pinterest.co.uk/kdsign`,
    flickr: `https://www.flickr.com/photos/k_d_sign`,
    tumblrJournal: `https://yumyo-journal.tumblr.com`,
    tumblrDesign: `https://designengine.tumblr.com/`,
    dribble: `@kdsign`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cases`,
        name: `cases`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/works`,
        name: `works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/archive`,
        name: `archive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/labs`,
        name: `labs`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg/`,
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          webpOptions: {
            lossless: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
        sassOptions: {
          precision: 6,
          includePaths: ["src/styles/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
        ],
        // develop: true,
        tailwind: true,
        whitelist: ["aspect-[8/5]", "max-w-2xl", "max-w-4xl"],
        ignore: ["sal.js/", "slick-carousel/", "global.scss"],
        // purgeOnly: ['node_modules/bootstrap']
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Nicola Giuia Pernice Portfolio`,
        short_name: `Studio Pernice`,
        start_url: `/`,
        background_color: `#3A3A3B`,
        theme_color: `#fab62d`,
        display: `standalone`,
        icon: `./src/images/icons/icon-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Exness: Psychology of Trading`,
        short_name: `Exness`,
        description: `Psychology of Trading`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFCF01`,
        display: `standalone`,
        icon: `./src/images/icons/icon-512x512.png`,
        // https://www.simicart.com/manifest-generator.html/
        // https://github.com/onderceylan/pwa-asset-generator
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
  ],
}
