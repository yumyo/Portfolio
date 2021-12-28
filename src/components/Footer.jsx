import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import { BottomPos, RightPos, LeftPos } from "../components/theme" 

const Footer = tw.div`
`;

export default function Header(props) {

  return (
    <Footer className="shrink-0">
      <div className={`fixed mb-4 ${BottomPos} z-40 md:-ml-4 ${LeftPos}`}>   
        <TransitionLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</TransitionLink>
      </div>
      <div className={`fixed mb-4 ${BottomPos} z-30 md:-mr-4 ${RightPos}`}>
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