import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { CasesLayout, GhostButton } from "../components/theme"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"

const ListItem = tw.div`
mb-20
`

const Title = tw.p`
text-2xl font-medium mt-2
`

// const CasesLayout = tw.div``

const Cases = ({ data, transitionStatus }) => {
  let nodes = data.allFile.nodes
  console.log(nodes)
  nodes.sort(
    // prettier-ignore
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() - new Date(d1.childMdx.frontmatter.date).getTime()
  )
  useEffect(() => {
    gsap.to(".anim-case", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    // if (transitionStatus === "entering") {
    //   gsap.to(".anim-case", {
    //     autoAlpha: 1,
    //     duration: 0.6,
    //   })
    // }
    if (transitionStatus === "exiting") {
      gsap.to(".anim-case", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])

  return (
    <div className={`anim-case opacity-0 ${CasesLayout}`}>
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <TransitionLink
            className={`block`}
            partiallyActive={true}
            activeClassName="active"
            to={`${childMdx.slug}`}
            exit={{
              length: 0.5,
            }}
            entry={{
              appearAfter: 0.5,
              length: 0.5,
            }}
          >
            <GatsbyImage
              image={getImage(childMdx.frontmatter.banner)}
              alt={childMdx.frontmatter.title}
            />
          </TransitionLink>
          <div className="mx-auto w-k8 md:w-full">
            <Title>{childMdx.frontmatter.title}</Title>
            <p className="mb-2 max-w-prose">
              {childMdx.frontmatter.description}
            </p>
            {/* <List>
            {childMdx.frontmatter.tags
              ? childMdx.frontmatter.tags.map((tag, index) => {
                  return (
                    <Tag key={index}>
                      <span className="text-black-shade-500">#</span>
                      {tag}
                    </Tag>
                  )
                })
              : null}
          </List> */}
            <TransitionLink
              className={`mt-4 inline-block ${GhostButton}`}
              partiallyActive={true}
              activeClassName="active"
              to={`${childMdx.slug}`}
              exit={{
                length: 0.5,
              }}
              entry={{
                appearAfter: 0.5,
                length: 0.5,
              }}
            >
              View Case
            </TransitionLink>
          </div>
        </ListItem>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "cases" } }) {
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
            video
          }
        }
      }
    }
  }
`

// Cases.Layout = Layout

export default Cases
