import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { gsap } from "gsap"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

import {
  Project_Detail,
  Project_Detail_Label,
  Project_Detail_Content,
} from "../components/theme"

const ProjectTemplate = ({
  transitionStatus,
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: {
        title,
        embeddedImagesLocal,
        template,
        profile,
        services,
        mission,
        client,
        tags,
        date,
        banner,
      },
      body,
    },
  },
}) => {
  let projectDate = moment(date).format("MMM YYYY")
  const shortcodes = { getImage, GatsbyImage, StaticImage }
  console.log("embeddedImagesRemote")
  console.log(embeddedImagesRemote)
  console.log("embeddedImagesLocal")
  console.log(embeddedImagesLocal)
  useEffect(() => {
    gsap.to(".anim-project", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-project", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])

  // 2xl:w-k6
  return (
    <div className={`anim-project opacity-0 mb-k1v`}>
      <GatsbyImage
        className="mx-auto md:w-k8 lg:w-k7 xl:w-k7 mt-k2v md:mt-k2v lg:mt-k3v"
        image={getImage(banner)}
        alt={title}
      />
      <div className={`${Project_Detail} mt-k1`}>
        <div className={`${Project_Detail_Label}`}>Project</div>
        <div className={`${Project_Detail_Content}`}>
          <h1 className="leading-none text-2xl pl-4 ">{`${title}`}</h1>
          <p className="text-base mt-8 pl-4 pr-4">{`${mission}`}</p>
        </div>
      </div>
      <div className={`${Project_Detail} mt-10`}>
        <div className={`${Project_Detail_Label}`}>Year</div>
        <div className={`${Project_Detail_Content}`}>
          <p className="text-base mt-4 pl-4">{`${projectDate}`}</p>
        </div>
      </div>
      <div className={`${Project_Detail} mt-16`}>
        <div className={`${Project_Detail_Label}`}>Activities</div>
        <div className={`${Project_Detail_Content}`}>
          <p className="text-base pl-4 pr-4">{`${services.join(", ")}`}</p>
        </div>
      </div>
      <div className={`${Project_Detail} mt-16`}>
        <div className={`${Project_Detail_Label}`}>Client</div>
        <div className={`${Project_Detail_Content} pl-4 pr-4`}>
          <p className="text-base">{ReactHtmlParser(profile)}</p>
        </div>
      </div>
      <div className=" mt-k1 project-content">
        <MDXProvider components={shortcodes}>
          <MDXRenderer
            remoteImages={embeddedImagesRemote}
            localImages={embeddedImagesLocal}
          >
            {body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  )
}

// ProjectTemplate.Layout = Layout

export default ProjectTemplate
