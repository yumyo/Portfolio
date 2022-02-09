import React, { useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
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

const Archive = ({ data, transitionStatus }) => {
  let nodes = data.allFile.nodes
  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )
  // console.log(data.allFile.nodes)
  useEffect(() => {
    gsap.to(".anim-archive", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-archive", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  return (
    <ArchiveLayout className="anim-archive opacity-0">
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

// Archive.Layout = Layout

export default Archive
