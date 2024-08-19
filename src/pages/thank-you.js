import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import { gsap } from "gsap"
// import tw from "twin.macro"
import ContactForm from "../components/ContactForm"
import { Pinterest } from "@styled-icons/entypo-social/Pinterest"
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Behance } from "@styled-icons/boxicons-logos/Behance"
import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr"
import { ShieldCheckmark } from "@styled-icons/fluentui-system-regular/ShieldCheckmark"
// import { PageDefault } from "../components/theme"
// Assets
// import selfie from "../../about.png"

// const ContactLayout = tw.div`mx-auto w-k5 mt-k3v`

const ContactPage = () => {
  const {
    twitter,
    linkedin,
    github,
    stackoverflow,
    secureEmail,
    behance,
    pinterest,
    tumblrJournal,
  } = useSiteMetadata()

  const transitionState = useTransitionState()

  useEffect(() => {
    // console.log('About Page', transitionStatus);
  }, [transitionState])
  useEffect(() => {
    gsap.to(".anim-about", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".anim-about", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionState])
  return (
    // h-k100v t-0  ${PageDefault} md:mb-0
    <div
    className={`anim-about opacity-0 sm:mb-20 lg:mb-0 mx-auto w-k8 sm:w-k75 md:w-k7 lg:w-k5 mt-k5v `}
  >
    <div className="-translate-y-2/4 ">
      <header className=" inline-block text-right mb-4">
      <span className="block fluid-text-xl leading-none font-thin translate-y-4">(＠＾◡＾)</span>
      <h1 className="fluid-text-5xl leading-loose font-thin">Thank you!</h1>
      </header>
      <p className="sm:ml-k1 xl:ml-k25 mb-0">In the meantime, you can find me on <a href={linkedin} target="_blank" rel="noreferrer" title="">LinkedIn</a>&nbsp;and&nbsp;<a href={twitter} target="_blank" rel="noreferrer" title="">Twitter</a>
    </p>
    <p className="sm:ml-k2 xl:ml-k3">Let's stay in touch and continue the conversation!
    </p>
    </div>
    
  </div>

  )
}

// AboutPage.Layout = Layout

export default ContactPage
