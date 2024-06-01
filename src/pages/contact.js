import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
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
import Contact from '../templates/contact-form-template.js'
// import { PageDefault } from "../components/theme"
// Assets
// import selfie from "../../about.png"

// const ContactLayout = tw.div`mx-auto w-k5 mt-k3v`

const ContactPage = ({ transitionStatus }) => {
  const {
    twitter,
    github,
    stackoverflow,
    secureEmail,
    behance,
    pinterest,
    tumblrJournal,
  } = useSiteMetadata()

  useEffect(() => {
    // console.log('About Page', transitionStatus);
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
        // window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    <div
      className={`anim-about opacity-0 mb-k3v lg:mb-0 mx-auto w-k8 md:w-k8 3xl:w-k5 mt-k5v lg:mt-k3v `}
    >
    <Contact />
    </div>
  )
}

// AboutPage.Layout = Layout

export default ContactPage
