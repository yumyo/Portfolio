import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { gsap } from "gsap"
import PostTemplate from '../../templates/post-template'
import ProjectTemplate from '../../templates/project-template'
import WorkTemplate from '../../templates/work-template'
import ArchiveTemplate from '../../templates/archive-template'
import PropTypes from "prop-types"

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { template },
    },
  },
}) => {
  const templates = {
    posts: <PostTemplate data={data} />,
    works: <WorkTemplate data={data} />,
    archive: <ArchiveTemplate data={data} />,
    cases: <ProjectTemplate data={data} />,
  }
  return (
    <Fragment>
      {templates[template] ? templates[template] : null}
    </Fragment>
  )
}
export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        template
        tags
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