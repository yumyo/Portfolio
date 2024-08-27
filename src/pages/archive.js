import React, { useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import tw from "twin.macro"

const ListItem = tw.div`
mb-4
`

const Title = tw.p`
text-3xl font-medium
`

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

const ArchiveLayout = tw.div`mx-auto w-6/12 mt-k2v`

const Archive = ({ data }) => {

  let nodes = data.allFile.nodes
  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )

  return (
    <ArchiveLayout className="page-trans">
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <Title>{childMdx.frontmatter.title}</Title>
          <p>{childMdx.frontmatter.description}</p>
          <GatsbyLink to={`${childMdx.slug}`}>Read More</GatsbyLink>
          <List>
            {childMdx.frontmatter.tags
              ? childMdx.frontmatter.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>
                })
              : null}
          </List>
        </ListItem>
      ))}
    </ArchiveLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "archive" } }) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            title
            description
            tags
            date(formatString: "YYYY MM DD")
          }
        }
      }
    }
  }
`

export default Archive
