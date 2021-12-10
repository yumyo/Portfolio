import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

const CtrlBR = tw.div`
fixed right-k1 bottom-k1 z-50`;

const CtrlBL = tw.div`
fixed left-k1 bottom-k1 z-50`;

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base
`

export default function Header(props) {

  return (
    <>
      <CtrlBL>   
        <MenuLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</MenuLink>
      </CtrlBL>
      <CtrlBR>
        <MenuLink to="/style-guide/"
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