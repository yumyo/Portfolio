import React  from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ContactForm from "../components/ContactForm"
// Icons.
// import { Pinterest } from "@styled-icons/entypo-social/Pinterest"
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Behance } from "@styled-icons/boxicons-logos/Behance"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
// import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr"
import { ShieldCheckmark } from "@styled-icons/fluentui-system-regular/ShieldCheckmark"


export default function Contact(props) {
  const {
    twitter,
    github,
    stackoverflow,
    secureEmail,
    behance,
    linkedin,
    pinterest,
    tumblrJournal,
  } = useSiteMetadata()

  return (
    // h-k100v t-0  ${PageDefault} md:mb-0
    <>
      <div className="lg:flex">
        <div className="flex-auto lg:w-k4 xlw-k2 2xl:w-k1  2xl:pr-k1 flex flex-col">
          <div className="">
            <h1 className="-mt-16 lg:mt-0 fluid-text-2xl lg:fluid-text-xl leading-snug">Let's get in touch!</h1>
            <p className="fluid-text-base mt-8">Here's where your idea gets the spotlight it deserves. Tell me about your project, and let's chart a course to realization. </p>
            <p className="fluid-text-base mt-8">Excited to see where we can go together.</p>
          </div>
        </div>
        <div className="flex-auto lg:w-k5 2xl:w-k25 lg:ml-k1 3xlml-k">
          <div className="">
            <ContactForm className="flex flex-col w-full" />
          </div>
        </div>
      </div>
      <div className="lg:flex items-stretch mt-8">
        <div className="flex-auto lg:w-k4 xlw-k2 2xl:w-k1 2xl:pr-k1 flex flex-col">
          <div className="mt-16 lg:mt-auto">
            <h2 className="text-base mb-2">Social networks</h2>
            <ul className="flex flex-row gap-6">
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer" title="">
                  <LinkedinSquare size="32" />
                </a>
              </li>
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
              {/* <li>
                <a href={pinterest} target="_blank" rel="noreferrer" title="">
                  <Pinterest size="32" />
                </a>
              </li>
              <li>
                <a href={tumblrJournal} target="_blank" rel="noreferrer" title="">
                  <Tumblr size="32" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex-auto lg:w-k5 2xl:w-k25 lg:ml-k1 3xlml-k">
          <div className="mt-14">
            <p className="text-base mb-0">
              For a fully encrypted service you can send your message directly at:{" "}
              <a
                className="block mt-2 mb-2 font-normal whitespace-nowrap"
                href={`mailto:${secureEmail}?subject=Message from the portfolio website`}
                title=""
              >
                <ShieldCheckmark size="36" /> {secureEmail}
              </a>
              OpenPGP key: <br />
              <strong className="break-all">
              0D6581E7FE7D224014E0AE64F5CF1D5DBC61CC14
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}