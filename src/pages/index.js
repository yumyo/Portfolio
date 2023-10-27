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
    text-lg
    sm:text-2xl
    2xl:text-3xl
    mb-2
    2xl:mb-3
  `

  // const Intro = tw.div``;
  // min-h-screen

  return (
    <div className="flex flex-col justify-center  ">
      <div className="anim-home opacity-0 mx-auto w-k7 xs:w-k8 md:w-k5 mt-k5v -translate-y-1/2">
        <Title>
          Hi, my name is{" "}
          <TransitionLink
            to="/about"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            Giulia&nbsp;Nicola&nbsp;Pernice
          </TransitionLink>
          <br /> I am a Digital Product Engineer currently based in London.
        </Title>
        <div className={Lead}>
          Please take a look at a collection of{" "}
          <TransitionLink
            to="/cases"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            my recent work
          </TransitionLink>{" "}
          and{" "}
          <TransitionLink
            to="/cases"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            case histories,
          </TransitionLink>
          or feel free to{" "}
          <TransitionLink
            to="/contact"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className=""
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            get&nbsp;in&nbsp;touch{" "}
          </TransitionLink>{" "}
          if you want to discuss your next project.
        </div>
      </div>
    </div>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
