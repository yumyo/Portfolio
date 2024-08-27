import React, { Fragment } from "react"
import { graphql } from "gatsby"
// import { gsap } from "gsap"
import PostTemplate from "../../templates/post-template"
import ProjectTemplate from "../../templates/project-template"
import WorkTemplate from "../../templates/work-template"
import ArchiveTemplate from "../../templates/archive-template"
import LabsTemplate from "../../templates/labs-template"
import PropTypes from "prop-types"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { template },
    },
  },
}) => {
  const transitionState = useTransitionState()
  const templates = {
    posts: <PostTemplate data={data} transitionStatus={transitionState.transitionStatus} />,
    works: <WorkTemplate data={data} transitionStatus={transitionState.transitionStatus} />,
    archive: (
      <ArchiveTemplate data={data} transitionStatus={transitionState.transitionStatus} />
    ),
    cases: <ProjectTemplate data={data} transitionStatus={transitionState.transitionStatus} />,
    labs: <LabsTemplate data={data} transitionStatus={transitionState.transitionStatus} />,
  }
  return <Fragment>{templates[template] ? templates[template] : null}</Fragment>
}
export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      embeddedImagesRemote {
        childImageSharp {
          gatsbyImageData(webpOptions: { quality: 100 })
        }
      }
      frontmatter {
        title
        template
        published
        tags
        date
        profile
        description
        services
        mission
        client
        banner {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
          }
        }
        video
      }
      body
    }
  }
`

MdxPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        template: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }),
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

// MdxPage.Layout = Layout

export default MdxPage
