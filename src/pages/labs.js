import React, { useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import { GhostButton } from "../components/theme"
import { gsap } from "gsap"
import tw from "twin.macro"

const ListItem = tw.div`
mt-k3v
`

const Title = tw.p`
fluid-text-xl font-medium
`

const Labs = ({ data }) => {

  const transitionState = useTransitionState()

  // Filter out nodes that are not published
  let nodes = data.allFile.nodes.filter(node => node.childMdx.frontmatter.published)

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
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".anim-labs", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionState])
  return (
    <div className="anim-labs opacity-0 mb-k2v">
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <TransitionLink
            className={`relative mx-auto block w-full md:w-k8 lg:w-k7 xl:w-k7`}
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
            <div className={`h-k625v relative overflow-hidden mx-auto w-full`}>
              <GatsbyImage
                image={getImage(childMdx.frontmatter.banner)}
                alt={childMdx.frontmatter.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
        </TransitionLink>
          <div className="mx-auto w-k7 xs:w-k8 md:w-k7 lg:w-k6 xl:w-k5  flex flex-row justify-between items-center mt-k0v">
          <div className="">
            <Title>{childMdx.frontmatter.title}</Title>
            {/* <p className="mb-0">
              {childMdx.frontmatter.description}{" "}
            </p> */}
          </div>
        </div>
      </ListItem>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "labs" } }) {
      nodes {
        childMdx {
          id
          slug
          embeddedImagesRemote {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED)
            }
          }
          frontmatter {
            title
            published
            embeddedImagesLocal {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
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

export default Labs
