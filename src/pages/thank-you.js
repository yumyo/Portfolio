import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

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

  return (
    <div
    className={`page-trans sm:mb-20 lg:mb-0 mx-auto w-k8 sm:w-k75 md:w-k7 lg:w-k5 mt-k5v `}
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

export default ContactPage
