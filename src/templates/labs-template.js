import React, { useEffect, useState } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import moment from "moment"
import tw from "twin.macro"
import { gsap } from "gsap"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

const List = tw.ul`
list-none
`

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`

const LabsTemplate = ({
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: {
        title,
        template,
        profile,
        services,
        mission,
        client,
        tags,
        date,
        banner,
        embeddedImagesLocal,
      },
      body,
    },
  },
}) => {

  const transitionState = useTransitionState()
  const shortcodes = { getImage, GatsbyImage, StaticImage }

  let projectDate = moment(date).format("MMM YYYY")

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
  }, [transitionState])
  return (
    <div className={`lab-project opacity-0 mb-k3v`}>
      <div className={`h-k625v relative overflow-hidden mx-auto md:w-k8 lg:w-k7 xl:w-k7 mt-k3v lg:mt-k3v`}>
        <GatsbyImage
            className="absolute top-0 left-0 w-full h-full object-cover"
            image={getImage(banner)}
            alt={title}
          />
      </div>
      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-k1 flex flex-row items-baseline">
        <div className="mt-0 w-k25 pl-4">Project</div>
        <div className=" w-k7">
          <h1 className="fluid-text-2xl pl-4 ">{`${title}`}</h1>
          <p className=" mt-8 pl-4 pr-4">{`${mission}`}</p>
        </div>
      </div>
      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-10 flex flex-row items-baseline">
        <div className="mt-0 w-k25 pl-4">Year</div>
        <div className=" w-k7">
          {" "}
          <p className=" mt-4 pl-4">{`${projectDate}`}</p>
        </div>
      </div>
      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-16 flex flex-row items-baseline">
        <div className="mt-0 w-k25 pl-4">Activities</div>
        <div className=" w-k7">
          {/* <p className="text-base pl-4 pr-4">{`${services.join(", ")}`}</p> */}
        </div>
      </div>
      <div className=" mt-k1 project-content">
        <MDXProvider components={shortcodes}>
          <MDXRenderer
          remoteImages={embeddedImagesRemote}
          localImages={embeddedImagesLocal}
          >{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  )
}

export default LabsTemplate
