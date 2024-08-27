import React, { useEffect } from "react"
import tw from "twin.macro"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SEO from "../components/Seo"
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Behance } from "@styled-icons/boxicons-logos/Behance"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Codepen } from "@styled-icons/boxicons-logos/Codepen"
import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr"

const AboutLayout = tw.div``

const About_Title = `mb-12 fluid-text-3xl -mt-14 leading-tight xs:leading-tight font-extralight`
const About_SF = "relative z-10 mb-12 fluid-text-lg  max-w-[25em]"
const About_P = "mb-4 mb-4 fluid-text-base max-w-[34em]"

const AboutPage = props => {
  const {
    twitter,
    github,
    stackoverflow,
    secureEmail,
    behance,
    linkedin,
    pinterest,
    tumblrDesign,
    flickr,
    codepen,
  } = useSiteMetadata()

  return (
    <div className="page-trans mx-auto mb-k3v mt-k5v flex w-k8 flex-row flex-wrap items-baseline sm:w-k8 lg:w-k7 xl:w-k5 xl:pl-0 ">
      <SEO metaTitle="Giulia Nicole Pernice || Design Engineering Portfolio || About" />
      <div className="bio">
        <h1 className={`${About_Title}`}>Giulia Nicole Pernice</h1>
      </div>
      <div className="flex flex-row flex-wrap items-baseline sm:ml-k1 md:ml-k25">
        <p className={`${About_SF}`}>
          I'm a multidisciplinary Digital Product Engineer working at the
          intersection of design&nbsp;and&nbsp;technology.
        </p>
        <div className={`flex flex-col md:flex-row`}>
          {/* <div className="z-0 w-full mt-8 md:mt-2 sm:w-k6 sm:pl-k2 md:pl-0 md:-ml-k lg:pl-k2 md:w-k4  lg:w-k4 lg:-ml-k0 xl:-ml-k2 order-2 md:order-1">
            <StaticImage
              className=""
              src="https://res.cloudinary.com/yumyo/image/upload/v1640539607/media/about-g.png"
              alt="A kitten"
            />
          </div> */}
          <div className={`order-1 w-full md:order-2 md:w-k75`}>
            <p className={`${About_P}`} data-sal="fade" data-sal-duration={900}>
              My career began with a formal education in graphic design in the
              mid 90s, moving from print, to the early adoption of the web.
              Inquisitive about every aspect of the craft, I started
              undertakening formal training in various disciplines while
              constantly advancing through self-learning.
            </p>
            <p className={`${About_P}`} data-sal="fade" data-sal-duration={900}>
              Over time, driven by passion and desidere to understand every part
              of the process, I evolved a full-stack developer and designer with
              a passionate product mindset.
            </p>
            <p className={`${About_P}`} data-sal="fade" data-sal-duration={900}>
              I often act as a bridge between stakeholders, teams and business
              units, and have years of experience working within and across
              these teams to foster communication and collaboration.
            </p>
            <p className={`${About_P}`} data-sal="fade" data-sal-duration={900}>
              I am meticulous, focused on the finer details, and enthusiastic
              about problem-solving and making relevant contributions with
              measurable results.
            </p>
            <p className={`${About_P}`} data-sal="fade" data-sal-duration={900}>
              I believe in open, honest and kind communication, and enjoy
              collaborating within an inspiring and energised environment. I
              also believe in the power of mentoring and knowledge sharing.
            </p>
            <p className={`${About_P} mb-0`} data-sal="fade" data-sal-duration={900}>
              I constantly push myself to improve personally and professionally.
              With the same vibrance, I contribute to non-profit initiatives and
              projects that foster innovation and creativity for social change.
            </p>
            <p className={`${About_P} mb-0`} data-sal="fade" data-sal-duration={900}>
              If you’re interested in learning more about my work and insights,
              or if you’d like a glimpse behind the scenes, I invite you to
              connect with me on my social media channels.
            </p>
            <div className="mt-k0v" data-sal="fade" data-sal-duration={900}>
              <ul className="flex flex-row gap-6">
                <li>
                  <a href={linkedin} target="_blank" rel="noreferrer" title="">
                    <LinkedinSquare size="32" />
                  </a>
                </li>
                <li>
                  <a href={github} target="_blank" rel="noreferrer" title="">
                    <Github size="32" />
                  </a>
                </li>
                <li>
                  <a href={codepen} target="_blank" rel="noreferrer" title="">
                    <Codepen size="32" />
                  </a>
                </li>
                <li>
                  <a href={behance} target="_blank" rel="noreferrer" title="">
                    <Behance size="32" />
                  </a>
                </li>
                <li>
                  <a href={twitter} target="_blank" rel="noreferrer" title="">
                    <Twitter size="32" />
                  </a>
                </li>
                <li>
                  <a
                    href={tumblrDesign}
                    target="_blank"
                    rel="noreferrer"
                    title=""
                  >
                    <Tumblr size="32" />
                  </a>
                </li>
                <li>
                  <a
                    href={stackoverflow}
                    target="_blank"
                    rel="noreferrer"
                    title=""
                  >
                    <StackOverflow size="32" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
