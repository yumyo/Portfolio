import React, { useEffect } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { gsap } from "gsap"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/a11y'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { TransitionState } from "gatsby-plugin-transition-link";
// import Chart from '../components/Chart.jsx'

import {
  Project_Detail,
  Project_Detail_Label,
  Project_Detail_Content,
} from "../components/theme"

const ProjectTemplate = ({
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

  const transitionState = useTransitionState()

  let projectDate = moment(date).format("MMM YYYY")
  const shortcodes = { getImage, GatsbyImage, StaticImage, Slider }
  // console.log("embeddedImagesRemote")
  // console.log(embeddedImagesRemote)
  // console.log("embeddedImagesLocal")
  // console.log(embeddedImagesLocal)
  // console.log("transitionStatus 1st")
  // console.log(transitionStatus)
  useEffect(() => {
    gsap.to(".anim-project", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      console.log('exiting')
      gsap.to(".anim-project", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionState])

  // 2xl:w-k6
  return (
    <div className={`anim-project opacity-0 mb-k1v`}>
      <div className={`h-k625v relative overflow-hidden mx-auto md:w-k8 lg:w-k7 xl:w-k7 mt-k3v lg:mt-k3v`}>
        <GatsbyImage
          className="absolute top-0 left-0 w-full h-full object-cover"
          image={getImage(banner)}
          alt={title}
        />
      </div>
      <div 
      data-sal="fade" 
      data-sal-duration={900} 
      className={`${Project_Detail} mt-k2v`}>
        <div className={`${Project_Detail_Label}`}>Project</div>
        <div className={`${Project_Detail_Content}`}>
          <h1 className="leading-none text-2xl md:pl-4 ">{`${title}`}</h1>
          
        </div>
      </div>
      <div 
      data-sal="fade" 
      data-sal-duration={900} 
      className={`${Project_Detail} mt-k1v`}>
        <div className={`${Project_Detail_Label}`}>Year</div>
        <div className={`${Project_Detail_Content}`}>
          <p className="mb-0 md:pl-4">{`${projectDate}`}</p>
        </div>
      </div>
      <div 
      data-sal="fade" 
      data-sal-duration={900} 
      className={`${Project_Detail} mt-k1v`}>
        <div className={`${Project_Detail_Label}`}>Client</div>
        <div className={`${Project_Detail_Content}`}>
          <p className="mb-0 md:pl-4 md:pr-4">{ReactHtmlParser(profile)}</p>
        </div>
      </div>
      <div 
      data-sal="fade" 
      data-sal-duration={900} 
      className={`${Project_Detail} mt-k1v`}>
        <div className={`${Project_Detail_Label}`}>Activities</div>
        <div className={`${Project_Detail_Content}`}>
        <p className=" mt-k0v mb-0 md:pl-4 md:pr-4">{`${mission}`}</p>
          <p className="mb-0 md:pl-4 md:pr-4">{`${services.join(", ")}`}</p>
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
