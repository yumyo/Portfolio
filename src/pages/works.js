import React, { useRef, useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { CasesLayout, GhostButton, Lead } from "../components/theme"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"

const ListItem = tw.div`
mb-20
`

const Title = tw.p`
text-2xl font-medium mt-2
`

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

const WorksLayout = tw.div`mx-auto w-6/12 mt-k2v`

const Works = ({ data, transitionStatus }) => {
  let nodes = data.allFile.nodes
  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )
  useEffect(() => {
    console.log("Works Initial", transitionStatus)
    gsap.to(".anim-works", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      console.log("Works", transitionStatus)
      gsap.to(".anim-works", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  return (
    <WorksLayout className="anim-works opacity-0">
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <TransitionLink
            exit={{
              length: 0.5,
            }}
            entry={{
              appearAfter: 0.5,
              length: 0.5,
            }}
            to={`${childMdx.slug}`}
            preventScrollJump
          >
            <GatsbyImage
              image={getImage(childMdx.frontmatter.banner)}
              alt={childMdx.frontmatter.title}
            />
          </TransitionLink>
          <Title>{childMdx.frontmatter.title}</Title>
          <p>{childMdx.frontmatter.description}</p>
          <TransitionLink
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5, appearAfter: 0.5 }}
            className={`mt-4 inline-block ${GhostButton}`}
            to={`${childMdx.slug}`}
          >
            View Project
          </TransitionLink>
          {/* <List>
            {childMdx.frontmatter.tags
              ? childMdx.frontmatter.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>
                })
              : null}
          </List> */}
        </ListItem>
      ))}
    </WorksLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            title
            description
            tags
            date(formatString: "YYYY-MM-DD")
            banner {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP, AVIF]
                  aspectRatio: 2.34
                )
              }
            }
          }
        }
      }
    }
  }
`

// Works.Layout = Layout

export default Works
