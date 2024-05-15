/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: `https://nicolapernice.com`,
    title: `Giulia Nicole Pernice || Design Engineering Portfolio`,
    description: `A Digital Product Engineer blending design and technology to create innovative solutions. Based in London, Giulia specialises in  digital product design and full-stack development. Connect to bring your project to life.`,
    author: `Giulia Nicole Pernice`,
    keywords: `product design, design technologist, front-end engineer, full-stack developer, ui/ux, web design, javascript, react, wordpress, hubspot, creative coding, design systems, threejs`,
    socialimage: `./og.png`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    codepen: `https://codepen.io/yumyo`,
    twitter: `https://twitter.com/KdSign`,
    github: `https://github.com/yumyo`,
    gitlab: `https://gitlab.com/k30`,
    linkedin: `https://www.linkedin.com/in/pernice`,
    stackoverflow: `https://stackoverflow.com/users/1214176/giulia-nicole-pernice`,
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
        theme_color: `#FC00BD`,
        display: `standalone`,
        icons: [
          {
            "src": "./src/images/favicons/favicon.ico",
            "sizes": "16x16",
            "type": "image/ico"
          },
          {
            "src": "./src/images/favicons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "./src/images/favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ], 
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
  ],
}
