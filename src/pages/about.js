import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { PageTitle } from "../components/theme"
import SEO from "../components/Seo"

const AboutLayout = tw.div``

const About_Title =
  `mb-12 fluid-text-3xl -mt-14 leading-tight xs:leading-tight font-extralight`
const About_SF =
  "relative z-10 mb-12 fluid-text-lg  max-w-[25em]"
const About_P = "mb-4 mb-4 fluid-text-base max-w-[34em]"

const AboutPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log("About Page", transitionStatus)
  }, [transitionStatus])
  useEffect(() => {
    gsap.to(".anim-about", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-about", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    // min-h-screen
    <div className="anim-about mx-auto mt-k5v mb-k3v flex w-k8 sm:w-k8 flex-row flex-wrap items-baseline opacity-0 lg:w-k7  xl:w-k5 xl:pl-0 ">
      <SEO metaTitle="Giulia Nicole Pernice || Design Engineering Portfolio || About" />
      <div className="bio">
        <h1 className={`${About_Title}`}>Giulia Nicole Pernice</h1>
        </div>
        <div className="sm:ml-k1 md:ml-k25 mb-k3v flex flex-row flex-wrap items-baseline">
        <p className={`${About_SF}`}>
          I'm a multidisciplinary Digital Product Engineer working at the intersection of design&nbsp;and&nbsp;technology.
        </p>
        <div className={`flex flex-col md:flex-row`}>
          {/* <div className="z-0 w-full mt-8 md:mt-2 sm:w-k6 sm:pl-k2 md:pl-0 md:-ml-k lg:pl-k2 md:w-k4  lg:w-k4 lg:-ml-k0 xl:-ml-k2 order-2 md:order-1">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/yumyo/image/upload/v1640539607/media/about-g.png"
              alt="A kitten"
            />
          </div> */}
          <div className={`w-full md:w-k75 order-1 md:order-2`}>
            <p className={`${About_P}`}>
              My career began with a formal education in graphic design in the mid 90s, moving
              from print, to the early adoption of the web. Inquisitive about every aspect of the craft, I started undertakening formal training in various disciplines while constantly advancing through
              self-learning.<br /> Over time, driven by passion and desidere to understand every part of the process, I evolved a full-stack developer and designer with a passionate product mindset.
            </p>
            <p className={`${About_P}`}>
              I often act as a bridge between stakeholders,
              teams and business units, and have years of experience working
              within and across these teams to foster communication and
              collaboration.
            </p>
            <p className={`${About_P}`}>
              I often act as a bridge between stakeholders,
              teams and business units, and have years of experience working
              within and across these teams to foster communication and
              collaboration.
            </p>
            <p className={`${About_P}`}>
              I am meticulous, focused on the finer details, and enthusiastic
              about problem-solving and making relevant contributions with
              measurable results.
            </p>
            <p className={`${About_P}`}>
              I believe in open, honest and kind communication, and enjoy
              collaborating within an inspiring and energised environment. I
              also believe in the power of mentoring and knowledge sharing.
            </p>
            <p className={`${About_P} mb-0`}>
              I constantly push myself to improve personally and professionally.
              With the same vibrance, I contribute to non-profit initiatives and
              projects that foster innovation and creativity for social change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// AboutPage.Layout = Layout

export default AboutPage
