import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { gsap } from "gsap"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
// import { PageDefault } from "../components/theme"
// import tw from "twin.macro"

const ProjectTemplate = ({
  transitionStatus,
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
      },
      body,
    },
  },
}) => {
  // const CSVServices = services.split(",").join(", ")
  // const ProjectLayout = tw.div`
  // mx-auto w-6/12 mt-k3v
  // `
  // const year = date.slice(-4)
  let projectDate = moment(date).format("MMM YYYY")
  const shortcodes = { getImage, GatsbyImage, StaticImage }
  // console.log("embeddedImagesRemote")
  // console.log(embeddedImagesRemote)
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
  return (
    // ${PageDefault}
    <div className={`anim-project opacity-0 mb-k1v`}>
      <GatsbyImage
        className="mx-auto md:w-k7 lg:w-k6 mt-k2v"
        image={getImage(banner)}
        alt={title}
      />
      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-k1 flex flex-row items-baseline">
        <div className="mt-0 w-k25 pl-4">Project</div>
        <div className=" w-k7">
          <h1 className="leading-none text-2xl pl-4 ">{`${title}`}</h1>
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
          <p className="text-base pl-4 pr-4">{`${services.join(", ")}`}</p>
        </div>
      </div>
      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-16 flex flex-row items-baseline">
        <div className="mt-0 w-k25 pl-4">Client</div>
        <div className=" w-k7 pl-4 pr-4">
          {/* <p className="text-base">{`${client}`}</p> */}
          <p className="text-base">{ReactHtmlParser(profile)}</p>
        </div>
      </div>

      <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-k1 pl-4 pr-4">
        <MDXProvider components={shortcodes}>
          <MDXRenderer
            remoteImages={embeddedImagesRemote}
            // localImages={embeddedImagesLocal}
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
