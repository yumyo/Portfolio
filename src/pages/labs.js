import React, { useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import { GhostButton } from "../components/theme"
import { gsap } from "gsap"
import tw from "twin.macro"

const ListItem = tw.div`
mb-24
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

const LabsLayout = tw.div`mx-auto w-6/12 mt-k2v`

const Labs = ({ data, transitionStatus }) => {
  let nodes = data.allFile.nodes
  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )
  useEffect(() => {
    gsap.to(".anim-labs", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-labs", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    <LabsLayout className="anim-labs opacity-0 lg:mt-k3v mb-k2v">
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
          <div className="mx-auto w-k8 md:w-full flex flex-row justify-between items-center">
            <div className="">
              <Title>{childMdx.frontmatter.title}</Title>
              <p className="mb-0">
                {childMdx.frontmatter.description}{" "}
                {/* <List>
                  {childMdx.frontmatter.tags
                    ? childMdx.frontmatter.tags.map((tag, index) => {
                        return (
                          <Tag key={index}>
                            <span className="text-gray-500">#</span>
                            {tag}
                          </Tag>
                        )
                      })
                    : null}
                </List> */}
              </p>
            </div>
            <div className="">
              <TransitionLink
                exit={{
                  length: 0.5,
                }}
                entry={{ length: 0.5, appearAfter: 0.5 }}
                partiallyActive={true}
                className={`mt-4 inline-block ${GhostButton}`}
                to={`${childMdx.slug}`}
              >
                View Project
              </TransitionLink>
            </div>
          </div>
        </ListItem>
      ))}
    </LabsLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "labs" } }) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            title
            description
            tags
            date(formatString: "YYYY MM DD")
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

export default Labs
