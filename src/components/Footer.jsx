import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import { BottomPos, RightPos, LeftPos } from "../components/theme" 

const Footer = tw.div`
`;

export default function Header(props) {
  //  
  return (
    <Footer className="shrink-0 w-full flex justify-between pl-k2 xs:pl-k1 pr-k2 xs:pr-k1 pb-k1v leading-none">
      <div className={`z-40  ${LeftPos}`}>   
      <TransitionLink to="/style-guide/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600 md:-ml-2"
        activeClassName="border-b-2 border-gray-600"
        >Style Guide</TransitionLink>
      </div>
      <div className={`z-30  ${RightPos}`}>
        <TransitionLink to="/style-guide/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600 md:-mr-2"
        activeClassName="border-b-2 border-gray-600"
        >Contact</TransitionLink>
      </div>
    </Footer>
  )
}