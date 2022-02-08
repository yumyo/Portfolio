import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { TransitionState } from "gatsby-plugin-transition-link"
import { gsap } from "gsap"
import tw from "twin.macro"

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

const ItemLayout = tw.div`
mx-auto w-6/12 mt-k3v
`

const PostTemplate = ({
  transitionStatus,
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { title, template, tags, date, embeddedImagesLocal },
      body,
    },
  },
}) => {
  const year = date.slice(-4)
  useEffect(() => {
    console.log("WORK Initial", transitionStatus)
    gsap.to(".work-project", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "entering") {
      console.log("WORK entering", transitionStatus)
      // gsap.to(".work-project", {
      //   autoAlpha: 1,
      //   duration: 0.5,
      //   delay: 0.5,
      // })
    }
    if (transitionStatus === "exiting") {
      console.log("WORK exiting", transitionStatus)
      gsap.to(".work-project", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  return (
    <div className={`work-project mx-auto w-6/12 mt-k3v opacity-0`}>
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
    </div>
  )
}

// PostTemplate.Layout = Layout

export default PostTemplate
