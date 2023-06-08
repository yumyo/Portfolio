import React from "react"
import tw from "twin.macro"
import TransitionLink from "gatsby-plugin-transition-link/AniLink"
import { RightPos, LeftPos, MenuLabel } from "../components/theme"
// BottomPos
const Footer = tw.div`
`

export default function Header(props) {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <Footer className="shrink-0 w-full flex justify-between items-end pl-k1 xs:pl-k1 pr-k1 xs:pr-k1 leading-none static  md:z-50 bottom-k md:bottom md:fixed pb-k1v md:pb-k0 transform-gpu ">
      <div className={`z-40  ${LeftPos} flex`}>
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
      <div className={`z-30 text-right ${RightPos} flex`}>
        <TransitionLink
          to="/contact/"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="md:-mr-2 "
          activeClassName=""
        >
          Contact
          {/* <span className={`mt-1 mr-4 -mb-4 ${MenuLabel}`}>
            Let's get in touch
          </span> */}
        </TransitionLink>
      </div>
    </Footer>
  )
}
