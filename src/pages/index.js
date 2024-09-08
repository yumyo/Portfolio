import React, { useEffect } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import tw from "twin.macro"
import { Lead } from "../components/theme"
import SEO from "../components/Seo"
import { gsap } from "gsap"

const IndexPage = () => {

  const Title = tw.h2`
    fluid-text-2xl
    mb-2
    2xl:mb-3
    font-light
    -mt-12
  `

  useEffect(() => {
    gsap.to(".page-trans", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, [])

  return (
    <div className="flex flex-col justify-center  ">
      <SEO />
      <div className="page-trans mx-auto w-k8 md:w-k7 2xl:w-k5 mt-k5v">
        <Title>
          Hi, my name is{" "}
          <TransitionLink
            to="/about"
            exit={{
              length: 0.5,
              trigger: ({ node }) => {
                return new Promise(resolve => {
                  gsap.to(node, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "sine.inOut",
                    onComplete: () => {
                      window.scrollTo(0, 0)
                      resolve()
                    },
                  })
                })
              },
              delay:0.5
            }}
            entry={{
              length: 0.5,
              trigger: ({ node }) => {
                gsap.from(node, {
                  autoAlpha: 0,
                  duration: 0.5,
                  ease: "sine.inOut",
                })
              },
              delay:0.5
            }}
            className="font-normal"
            activeClassName="text-violet-600 dark:text-violet-400"
          >
            Giulia&nbsp;Nicole&nbsp;Pernice
          </TransitionLink>
          <br /> welcome to my Design&nbsp;Engineering portfolio
        </Title>
        <div className={`md:ml-k1v lg:ml-k2v ${Lead}`}>
          <div className='md:pl-4 lg:pl-8 mt-12'>
            Have an inspiring project in mind? <br />
            <TransitionLink
              to="/contact"
              exit={{
                length: 0.5,
                trigger: ({ node }) => {
                  return new Promise(resolve => {
                    gsap.to(node, {
                      autoAlpha: 0,
                      duration: 0.5,
                      ease: "sine.inOut",
                      onComplete: () => {
                        window.scrollTo(0, 0)
                        resolve()
                      },
                    })
                  })
                },
                delay:0.5
              }}
              entry={{
                length: 0.5,
                trigger: ({ node }) => {
                  gsap.from(node, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "sine.inOut",
                  })
                },
                delay:0.5
              }}
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

export default IndexPage
