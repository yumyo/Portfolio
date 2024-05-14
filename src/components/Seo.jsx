import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

function SEO({ metaTitle, metaDescription, metaImage, lang, meta, pathname }) {
  const { 
    siteUrl,
    title,
    description, 
    author, 
    keywords,
    socialimage, 
    lastBuildDate,
    codepen,
    twitter,
    github,
    linkedin,
    stackoverflow,
    secureEmail,
    behance,
    pinterest,
    flickr,
    tumblrJournal,
    tumblrDesign,
    dribble,
    siteLanguage
  } = useSiteMetadata()

  const seoTitle = metaTitle || title;
  const seoDescription = metaDescription || description;
  const seoImage = metaImage || socialimage;

  return (
    <Helmet
      htmlAttributes={{
        siteLanguage,
      }}
      title={seoTitle}
      defer={false}
      meta={[
        {
          name: `description`,
          content: seoDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: seoDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: seoImage,
        },
        {
          name: `twitter:card`,
          content: seoDescription,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:description`,
          content: seoDescription,
        },
      ]}
    />
  )
}

export default SEO