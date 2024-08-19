import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
// import { PageDefault } from "../components/theme"
import tw from "twin.macro"
import { gsap } from "gsap"

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

// const ItemLayout = tw.div`
// mx-auto w-6/12 mt-k3v
// `
const ItemLayout = tw.div`mx-auto w-6/12 mt-k2v`

const LabsTemplate = ({
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { title, template, tags, date, embeddedImagesLocal },
      body,
    },
  },
}) => {

  const transitionState = useTransitionState()

  useEffect(() => {
    gsap.to(".lab-project", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".lab-project", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    <ItemLayout className={`lab-project opacity-0`}>
      <h1>{`${title}`}</h1>
      <h2>{`variant: ${template}`}</h2>
      <List>
        {tags
          ? tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>
            })
          : null}
      </List>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </ItemLayout>
  )
}

// PostTemplate.Layout = Layout

export default LabsTemplate
