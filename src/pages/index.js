import React, { useEffect } from "react"
import { gsap } from "gsap"
import TransitionLink from "gatsby-plugin-transition-link"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import tw from "twin.macro"
import { Lead } from "../components/theme"
import SEO from "../components/Seo"
// PageDefault
const IndexPage = () => {

  const transitionState = useTransitionState()

  useEffect(() => {
    gsap.to(".anim-home", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".anim-home", { autoAlpha: 0, duration: 0.25, delay: 0,  onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionState])
  const Title = tw.h2`
    fluid-text-2xl
    mb-2
    2xl:mb-3
    font-light
    -mt-12
  `

  return (
    <div className="flex flex-col justify-center  ">
      <SEO />
      <div className="anim-home opacity-0 mx-auto w-k8 md:w-k7 2xl:w-k5 mt-k5v">
        <Title>
          Hi, my name is{" "}
          <TransitionLink
            to="/about"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className="font-normal"
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            Giulia&nbsp;Nicole&nbsp;Pernice
          </TransitionLink>
          <br /> welcome to my Design&nbsp;Engineering portfolio
        </Title>
        <div className={`md:ml-k2v ${Lead}`}>
          <div className='pl-8 mt-12'>
            Have an inspiring project in mind? <br />
            <TransitionLink
              to="/contact"
              exit={{
                length: 0.5,
              }}
              entry={{ length: 0.5 }}
              className="font-normal sm:ml-k1v"
              activeClassName="text-violet-600 dark:text-violet-400"
            >
              Let’s connect and bring your vision to life
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
