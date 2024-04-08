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
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    // h-k100v t-0  ${PageDefault} md:mb-0
    <div
      className={`anim-about opacity-0 sm:mb-20 lg:mb-0 mx-auto w-k75 md:w-k8 3xl:w-k7 mt-k3v  `}
    >
      <div className="lg:flex">
        <div className="flex-auto lg:w-k4 xlw-k2 2xl:w-k1 pr-k0 2xl:pr-k1 flex flex-col">
          <div className="">
            <h1 className="fluid-text-xl leading-snug">Let's get in touch!</h1>
            <p className="fluid-text-base mt-8">Here's where your idea gets the spotlight it deserves. Tell me about your project, and let's chart a course to realization. </p>
            <p className="fluid-text-base mt-8">Excited to see where we can go together.</p>
          </div>
        </div>
        <div className="flex-auto lgw-k7 xl:w-k5 2xl:w-k25 lg:ml-k1 3xlml-k">
          <div className="">
            <ContactForm className="flex flex-col w-full" />
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="flex-auto lg:w-k4 xlw-k2 2xl:w-k1 pr-k0 2xl:pr-k1 flex flex-col">
          <div className="mt-16 lg:mt-auto">
            <h2 className="text-base mb-2">Social networks</h2>
            <ul className="flex flex-row gap-6">
              <li>
                <a href={twitter} target="_blank" rel="noreferrer" title="">
                  <Twitter size="32" />
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noreferrer" title="">
                  <Github size="32" />
                </a>
              </li>
              <li>
                <a href={stackoverflow} target="_blank" rel="noreferrer" title="">
                  <StackOverflow size="32" />
                </a>
              </li>
              <li>
                <a href={behance} target="_blank" rel="noreferrer" title="">
                  <Behance size="32" />
                </a>
              </li>
              <li>
                <a href={pinterest} target="_blank" rel="noreferrer" title="">
                  <Pinterest size="32" />
                </a>
              </li>
              <li>
                <a href={tumblrJournal} target="_blank" rel="noreferrer" title="">
                  <Tumblr size="32" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-auto lgw-k7 xl:w-k5 2xl:w-k25 lg:ml-k1 3xlml-k">
          <div className="mt-14">
            <p className="text-base">
              For an encrypted service you can send your message at my Mailfence
              account:{" "}
              <a
                className="block mt-2 mb-2 font-normal whitespace-nowrap"
                href={`mailto:${secureEmail}?subject=Message from the portfolio website`}
                title=""
              >
                <ShieldCheckmark size="36" /> {secureEmail}
              </a>
              OpenPGP key: <br />
              <strong className="break-all">
                78C7EC3BEF2627F387CD523C868EFEEEBAB47896
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

// AboutPage.Layout = Layout

export default ContactPage
