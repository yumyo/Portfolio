import React, { Fragment } from "react"
import { graphql } from "gatsby"
// import { gsap } from "gsap"
import PostTemplate from "../../templates/post-template"
import ProjectTemplate from "../../templates/project-template"
import WorkTemplate from "../../templates/work-template"
import ArchiveTemplate from "../../templates/archive-template"
import LabsTemplate from "../../templates/labs-template"
import PropTypes from "prop-types"

const MdxPage = ({
  transitionStatus,
  data,
  data: {
    mdx: {
      frontmatter: { template },
    },
  },
}) => {
  const templates = {
    posts: <PostTemplate data={data} transitionStatus={transitionStatus} />,
    works: <WorkTemplate data={data} transitionStatus={transitionStatus} />,
    archive: (
      <ArchiveTemplate data={data} transitionStatus={transitionStatus} />
    ),
    cases: <ProjectTemplate data={data} transitionStatus={transitionStatus} />,
    labs: <LabsTemplate data={data} transitionStatus={transitionStatus} />,
  }
  return <Fragment>{templates[template] ? templates[template] : null}</Fragment>
}
export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        template
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
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
