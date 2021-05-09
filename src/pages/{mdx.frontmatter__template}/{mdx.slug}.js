import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import PostTemplate from '../../templates/post-template'
import ProjectTemplate from '../../templates/project-template'
import WorkTemplate from '../../templates/work-template'
import ArchiveTemplate from '../../templates/archive-template'

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
export default MdxPage