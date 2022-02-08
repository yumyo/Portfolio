import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { PageDefault } from "../components/theme"
import tw from "twin.macro"
import { gsap } from "gsap"

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

const ItemLayout = tw.div`
mx-auto w-6/12 mt-k3v
`

const LabsTemplate = ({
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
  useEffect(() => {
    gsap.to(".lab-project", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "entering") {
      // gsap.to('.anim-project', {
      //   autoAlpha: 1,
      //   duration: .3,
      //   delay: 0.6
      // });
    }
    if (transitionStatus === "exiting") {
      gsap.to(".lab-project", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  return (
    <div className={`lab-project opacity-0 ${PageDefault}`}>
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

export default LabsTemplate
