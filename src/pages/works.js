import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { CasesLayout, GhostButton } from "../components/theme"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'

const ListItem = tw.div`
mb-24
`

const Title = tw.p`
text-xl font-medium mt-2
`

const WorksLayout = tw.div`mx-auto w-6/12 mt-k2v`

const Works = ({ data }) => {

  const transitionState = useTransitionState()

  let nodes = data.allFile.nodes
  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )
  useEffect(() => {
    gsap.to(".anim-works", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      // console.log("Works", transitionStatus)
      gsap.to(".anim-works", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionState])
  return (
    <div className={`anim-works opacity-0 ${CasesLayout} lg:mt-k3v mb-k2v`}>
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <TransitionLink
            
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
              <p className="max-w-prose mb-0">
                {childMdx.frontmatter.description}
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
            {/* <List>
            {childMdx.frontmatter.tags
              ? childMdx.frontmatter.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>
                })
              : null}
          </List> */}
          </div>
        </ListItem>
      ))}
    </div>
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
