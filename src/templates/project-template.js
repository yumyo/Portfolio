import React, { useEffect, useState } from "react"
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

  const [svgContent, setSvgContent] = useState(null);
  const transitionState = useTransitionState()
  let projectDate = moment(date).format("MMM YYYY")
  const shortcodes = { getImage, GatsbyImage, StaticImage, Slider }

  const svgMap = {
    "Raconteur Media": "https://res.cloudinary.com/yumyo/image/upload/v1724319223/media/folio/prj/rac/Raconteur.svg",
    "PressRoom": "https://res.cloudinary.com/yumyo/image/upload/v1724319408/media/folio/prj/pr/Pressrooom-logo.svg",
    "Il manifesto": "https://res.cloudinary.com/yumyo/image/upload/v1724319375/media/folio/prj/man/logo-il-manifesto.svg",
  }

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

  useEffect(() => {
    const fetchSvg = async () => {
      if(svgMap[title]) {
        const response = await fetch(svgMap[title])
        if(response.ok) {
          const svgText = await response.text();
          setSvgContent(svgText)
        } else {
          console.error(`Failed to fetch SVG for ${title}`)
        }
      }
    }
    fetchSvg()
  }, [title])

  // 2xl:w-k6
  return (
    <div className={`anim-project opacity-0 mb-k2v`}>
      <div className={`h-k625v relative overflow-hidden mx-auto md:w-k8 lg:w-k8 3xl:w-k7 mt-k3v lg:mt-k3v`}>
        {svgContent && (
          <div
            className="svg-container"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}
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
