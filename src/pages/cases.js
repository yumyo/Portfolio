import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { CasesLayout, GhostButton } from "../components/theme"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollToPlugin);
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'

const ListItem = tw.div`
mb-24 mt-k3v
`

const Title = tw.p`
text-xl font-medium mt-2
`

// const CasesLayout = tw.div``

const Cases = ({ data }) => {

  const transitionState = useTransitionState()

  let nodes = data.allFile.nodes
  // const [currentTransitionStatus, setCurrentTransitionStatus] = useState('');
  // console.log(nodes)
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
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".anim-case", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      }});
      
    }
  }, [transitionState])
  
  return (
    <div className={`anim-case opacity-0  mb-k2v`}>
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
            <GatsbyImage
              image={getImage(childMdx.frontmatter.banner)}
              alt={childMdx.frontmatter.title}
              className={``}
              objectFit='contain'
            />
          </TransitionLink>
          <div className="mx-auto w-full lg:w-k7 xl:w-k7 flex flex-row justify-between items-center">
            <div className="">
              <Title>{childMdx.frontmatter.title}</Title>
              <p className="max-w-prose mb-0">
                {childMdx.frontmatter.description}
              </p>
            </div>
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
            <div className="">
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
          embeddedImagesRemote {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED)
            }
          }
          frontmatter {
            title
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

// Cases.Layout = Layout

export default Cases
