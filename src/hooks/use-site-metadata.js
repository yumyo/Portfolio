import { graphql, useStaticQuery } from "gatsby";
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            keywords
            socialimage
            lastBuildDate
            codepen
            twitter
            github
            linkedin
            stackoverflow
            secureEmail
            behance
            pinterest
            flickr
            tumblrJournal
            tumblrDesign
            dribble
            siteLanguage
          }
        }
      }
    `
  );
  return site.siteMetadata;
}