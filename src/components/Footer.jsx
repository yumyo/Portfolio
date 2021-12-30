import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import { BottomPos, RightPos, LeftPos, MenuLabel } from "../components/theme" 

const Footer = tw.div`
`;

export default function Header(props) {
  //  
  return (
    <Footer className="shrink-0 w-full flex justify-between items-end pl-k2 xs:pl-k1 pr-k2 xs:pr-k1 pb-k1v leading-none ">
      <div className={`z-40  ${LeftPos} flex`}>   
      <TransitionLink to="/labs/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="md:-ml-2"
        activeClassName=""
        >©2020 w/Love
        <span className={`mt-1 ml-4 -mb-4 ${MenuLabel}`}>Nicola Giulia Pernice</span></TransitionLink>
      </div>
      <div className={`z-30 text-right ${RightPos} flex`}>
        <TransitionLink to="/contact/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="md:-mr-2 "
        activeClassName=""
        >Contact
        <span className={`mt-1 mr-4 -mb-4 ${MenuLabel}`}>Let's get in touch</span></TransitionLink>
      </div>
    </Footer>
  )
}