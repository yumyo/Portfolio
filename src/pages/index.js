import React, { useEffect } from "react"
import { gsap } from "gsap"
import TransitionLink from "gatsby-plugin-transition-link"
import tw from "twin.macro"
import { Lead } from "../components/theme"
// PageDefault
const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log("Home Page", transitionStatus)
  }, [transitionStatus])
  useEffect(() => {
    gsap.to(".anim-home", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-home", { autoAlpha: 0, duration: 0.25, delay: 0,  onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  const Title = tw.h2`
    fluid-text-2xl
    mb-2
    2xl:mb-3
    font-light
  `

  // const Intro = tw.div``;
  // min-h-screen

  return (
    <div className="flex flex-col justify-center  ">
      <div className="anim-home opacity-0 mx-auto w-k8 md:w-k7 2xl:w-k5 mt-k5v -translate-y-1/2">
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
          <br /> welcome to my portfolio as a Design&nbsp;Engineer
        </Title>
        <div className={`md:ml-k1v ${Lead}`}>
        Within these pages lies a curated selection of {" "}
          <TransitionLink
            to="/cases"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            case&nbsp;studies, 
          </TransitionLink>{" "}
          {" "}
          <TransitionLink
            to="/works"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            recent&nbsp;works 
          </TransitionLink>
          , and {" "}
          <TransitionLink
            to="/labs"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            creative&nbsp;explorations.
          </TransitionLink>{" "}
          <br />
          <div className='xs:ml-k1v mt-3'>
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
            </TransitionLink>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
