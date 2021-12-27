import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";
import { BottomPos, RightPos, LeftPos } from "../components/theme" 

const CtrlBR = tw.div`
`;

const CtrlBL = tw.div`
`;

const MenuLink = tw(TransitionLink)`

`

export default function Header(props) {

  return (
    <>
      <CtrlBL className={`fixed mb-4 ${BottomPos} z-40 ${LeftPos}`}>   
        <MenuLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</MenuLink>
      </CtrlBL>
      <CtrlBR className={`fixed mb-4 ${BottomPos} z-30 ${RightPos}`}>
        <MenuLink className="leading-none font-medium text-base" to="/style-guide/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Style Guide</MenuLink>
      </CtrlBR>
    </>
  )
}