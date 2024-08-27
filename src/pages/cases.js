import React, { useEffect, useState } from "react"
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

// const CasesLayout = tw.div``

const Cases = ({ data }) => {

  const svgMap = {
    "Raconteur Media": "https://res.cloudinary.com/yumyo/image/upload/v1724319223/media/folio/prj/rac/Raconteur.svg",
    "PressRoom": "https://res.cloudinary.com/yumyo/image/upload/v1724319408/media/folio/prj/pr/Pressrooom-logo.svg",
    "Il manifesto": "https://res.cloudinary.com/yumyo/image/upload/v1724319375/media/folio/prj/man/logo-il-manifesto.svg",
  }

  // Filter out nodes that are not published
  let nodes = data.allFile.nodes.filter(node => node.childMdx.frontmatter.published)

  nodes.sort(
    // prettier-ignore
    (d1, d2) =>
      new Date(d2.childMdx.frontmatter.date).getTime() - new Date(d1.childMdx.frontmatter.date).getTime()
  )

    const [svgContentMap, setSvgContentMap] = useState({})
  
  useEffect(() => {
    const fetchSvgContent = async (title) => {
      if (svgMap[title]) {
        try {
          const response = await fetch(svgMap[title])
          if (response.ok) {
            const svgText = await response.text()
            setSvgContentMap(prevMap => ({ ...prevMap, [title]: svgText }))
          } else {
            console.error(`Failed to fetch SVG for ${title}`)
          }
        } catch (error) {
          console.error(`Failed to fetch SVG for ${title}: ${error}`)
        }
      }
    }

    nodes.forEach(({ childMdx }) => {
      const { title } = childMdx.frontmatter
      if (!svgContentMap[title]) {
        fetchSvgContent(title)
      }
    })
  }, [nodes, svgMap, svgContentMap])

  return (
    <div className={`page-trans mb-k2v`}>
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
              {svgContentMap[childMdx.frontmatter.title] && (
                <div
                  className="svg-container"
                  dangerouslySetInnerHTML={{ __html: svgContentMap[childMdx.frontmatter.title] }}
                />
              )}
              <GatsbyImage
                image={getImage(childMdx.frontmatter.banner)}
                alt={childMdx.frontmatter.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
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
          </List> 
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
            */}
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

export default Cases
