import React, { useEffect } from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"

const ListItem = tw.div`
mb-k1v mt-k3v
`

const Title = tw.p`
fluid-text-xl font-medium mt-2
`

const WorksLayout = tw.div`mx-auto w-6/12 mt-k2v`

const Works = ({ data }) => {

  // Filter out nodes that are not published
  let nodes = data.allFile.nodes.filter(node => node.childMdx.frontmatter.published)

  nodes.sort(
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() -
      new Date(d1.childMdx.frontmatter.date).getTime()
  )

  return (
    <div className={`page-trans mb-k1v`}>
      {nodes.map(({ childMdx }) => (
        <ListItem key={childMdx.id}>
          <TransitionLink
            className={`relative mx-auto block w-full md:w-k8 lg:w-k7 xl:w-k7`}
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
                className="absolute top-0 left-0 w-full h-full object-cover"
                image={getImage(childMdx.frontmatter.banner)}
                alt={childMdx.frontmatter.title}
              />
            </div>
          </TransitionLink>
           <div className="mx-auto w-k7 xs:w-k8 md:w-k7 lg:w-k6 xl:w-k5 3xl:w-k4 flex flex-row justify-between items-center mt-k0v">
            <div className="">
              <Title>{childMdx.frontmatter.title}</Title>
              {/* <p className="max-w-prose mb-0">
                {childMdx.frontmatter.description}
              </p> */}
            </div>
            {/* <div className="">
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
            </div> */}
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
            published
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

export default Works
