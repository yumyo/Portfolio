import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { PageTitle } from "../components/theme"

const AboutLayout = tw.div``

const About_Title =
  "mb-2 pl-0 sm:pl-k1 md:pl-k1 lg:pl-k2 mb-8 pt-16 text-2xl xs:text-4xl leading-tight xs:leading-tight "
const About_SF =
  "relative z-10 mb-4 mb-4 pl-0 sm:pl-k2 pr-k1  md:ml-k0  md:w-k75 lg:w-k6 text-lg xs:text-xl"
const About_P = "mb-4 mb-4 pl-0  pr-k2"

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
      gsap.to(".anim-about", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  return (
    // min-h-screen
    <AboutLayout className="anim-about m-auto md:ml-k2 2xl:ml-k3 w-k75 sm:w-k9 md:w-k8 lg:w-k8  2xl:w-k6 3xl:w-k6 3xl:pr-k0 mt-k2v opacity-0 flex  flex-row flex-wrap items-baseline mb-k1v ">
      <div className="bio">
        <h1 className={`${About_Title}`}>Giulia Nicola Pernice</h1>
        <p className={`${About_SF}`}>
          I am a multidisciplinary Digital Product Engineer working at the
          intersection between design and technology.
        </p>
        <div className={`flex flex-row`}>
          <div className="z-0 w-k35 sm:w-k5 md:w-k3">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/yumyo/image/upload/v1640539607/media/about-g.png"
              alt="A kitten"
            />
          </div>
          <div className={` md:w-k75 lg:w-k5 mr-k4 ml-8`}>
            <p className={`${About_P}`}>
              My career began with a formal education in graphic design, moving
              from print to the early adoption of the web medium. Inquisitive
              about every aspect of the craft, I have undertaken formal training
              in various disciplines while also constantly advancing through
              self-learning. Eventually, I became a full-stack developer and
              designer with a passionate product mindset.
            </p>
            <p className={`${About_P}`}>
              Thanks to my diverse skillsets, I can contribute to a digital
              product's entire process and life cycle, from idea generation to
              design concept, technology selection, production, and deployment.
              For the same reason, I often act as a bridge between stakeholders,
              teams, and business units.
            </p>
            <p className={`${About_P}`}>
              I am meticulous, focused on details, and enthusiastic about
              problem-solving and making relevant contributions with measurable
              results
            </p>
            <p className={`${About_P}`}>
              I believe in open, honest and kind communication and enjoy
              contributing to a happy and inspiring collaboration environment. I
              also believe in the power of mentoring and knowledge sharing.
            </p>
            <p className={`${About_P} mb-0`}>
              I constantly push myself to improve personally and professionally.
              With the same vibrance, I contribute to no-profit initiatives and
              projects fostering innovation and creativity for social change.
            </p>
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}

// AboutPage.Layout = Layout

export default AboutPage
