import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import { BottomPos, RightPos, LeftPos } from "../components/theme" 

const Footer = tw.div`
`;

export default function Header(props) {
  // md:-ml-4 md:-mr-4
  return (
    <Footer className="shrink-0 w-full flex justify-between pl-k1 pr-k1 pb-k1v leading-none">
      <div className={`z-40  ${LeftPos}`}>   
        <TransitionLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</TransitionLink>
      </div>
      <div className={`z-30  ${RightPos}`}>
        <TransitionLink className="leading-none font-medium text-base" to="/style-guide/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Style Guide</TransitionLink>
      </div>
    </Footer>
  )
}