import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Contact from '../templates/contact-form-template.js'

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

  return (
    <div
      className={`page-trans mb-k3v lg:mb-0 mx-auto w-k8 md:w-k8 3xl:w-k5 mt-k5v lg:mt-k3v `}
  >
    <Contact />
    </div>
  )
}

export default ContactPage
