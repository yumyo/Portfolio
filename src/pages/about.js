import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { PageTitle } from "../components/theme"

const AboutLayout = tw.div``

const About_Title =
  `mb-2 pl-0 mb-8 pt-16 md:ml-k1 lg:ml-k3 xl:ml-k2 md:w-k75 lg:w-k8  text-2xl xs:text-4xl leading-tight xs:leading-tight`
const About_SF =
  "relative z-10 mb-4 mb-4 pl-0 lg:pl-k2 xl:pl-k1 2xl:pl-k lg:pr-k1 3xl:pr-0 md:ml-k1 lg:ml-k2 lg:ml-k25  md:w-k75 lg:w-k75 xl:w-k6 2xl:w-k6 3xl:w-k5 text-lg xs:text-xl"
const About_P = "mb-4 mb-4 pl-0 sm:pr-k2"

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
    <AboutLayout className="anim-about m-auto 
     w-k75 lg:w-k8 lg:w-k9 2xl:w-k6 3xl:w-k6 
     xl:ml-k2 2xl:ml-k3
     3xl:pr-k0 mt-k2v mb-k2v opacity-0 flex flex-row flex-wrap items-baseline">
      <div className="bio">
        <h1 className={`${About_Title}`}>Giulia Nicole Pernice</h1>
        <p className={`${About_SF}`}>
          I'm a multidisciplinary Digital Product Engineer working at the
          intersection of design and technology.
        </p>
        <div className={`flex flex-col md:flex-row`}>
          <div className="z-0 w-full mt-8 md:mt-2 sm:w-k6 sm:pl-k2 md:pl-0 md:-ml-k lg:pl-k2 md:w-k4  lg:w-k4 lg:-ml-k0 xl:-ml-k2 order-2 md:order-1">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/yumyo/image/upload/v1640539607/media/about-g.png"
              alt="A kitten"
            />
          </div>
          <div className={`w-full md:w-k75 lg:w-k5 xl:w-k5 3xl:w-k5 3xl:pr-k1 md:ml-8 lg:mr-k1  order-1 md:order-2 sm:pl-k2 md:pl-0`}>
            <p className={`${About_P}`}>
              My career began with a formal education in graphic design, moving
              from print to the early adoption of the web. Being inquisitive
              about every aspect of the craft, I've undertaken formal training
              in various disciplines while constantly advancing through
              self-learning. Today, I'm a full-stack developer and designer with
              a passionate product mindset.
            </p>
            <p className={`${About_P}`}>
              Thanks to my diverse skillsets, I can contribute to a digital
              product's entire process and lifecycle, from idea generation to
              design concept, technology selection, production and deployment.
              For the same reason, I often act as a bridge between stakeholders,
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
    </AboutLayout>
  )
}

// AboutPage.Layout = Layout

export default AboutPage
