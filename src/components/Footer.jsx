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
    <div className="md:bottom fixed bottom-0 mx-auto flex w-full shrink-0 transform-gpu items-end justify-between leading-none md:z-50 h-k2v pb-k0v sm:pb-k1v bg-fade-to-top">
      <div className={`fixed left-k1 z-40 flex`}>
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
      <div className={`z-30 text-right right-k1 flex fixed`}>
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
