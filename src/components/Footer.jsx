import React from "react"
import TransitionLink from "gatsby-plugin-transition-link/AniLink"
import { gsap } from "gsap"

export default function Footer(props) {
  const today = new Date()
  const year = today.getFullYear()

  const exitAnimation = ({ node }) => {
    return new Promise(resolve => {
      gsap.to(node, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          window.scrollTo(0, 0)  // Scroll to the top
          resolve()
        },
      })
    })
  }

  const entryAnimation = ({ node }) => {
    gsap.from(node, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "sine.inOut",
    })
  }

  return (
    <div className="md:bottom static bottom-0 mx-auto flex w-k8 shrink-0 transform-gpu items-end justify-between pb-k1v leading-none md:z-50 md:pb-k1v xl:fixed lg:w-full">
      <div className={`static left-k1 z-40 flex lg:fixed`}>
        ©{year}
        {/* <TransitionLink
          to="/style-guide/"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="md:-ml-2"
          activeClassName=""
        >
          ©2020
          <span className={`mt-1 ml-4 -mb-4 ${MenuLabel}`}>w/Love</span>
        </TransitionLink> */}
      </div>
      <div className={`z-30 text-right right-k1 flex static lg:fixed`}>
        <TransitionLink
          to="/contact/"
          exit={{
            length: 0.5,
            trigger: exitAnimation,
            delay:0.5
          }}
          entry={{
            length: 0.5,
            trigger: entryAnimation,
            delay:0.5
          }}
          className=" "
          activeClassName=""
        >
          Contact
        </TransitionLink>
      </div>
    </div>
  )
}
