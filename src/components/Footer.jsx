import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

const CtrlBR = tw.div`
`;

const CtrlBL = tw.div`
`;

const MenuLink = tw(TransitionLink)`

`

export default function Header(props) {

  return (
    <>
      <CtrlBL className="fixed left-k2 xs:left-k1 lg:left-k0 2xl:left-k1 mb-4 2xl:mb-0 bottom-k0 2xl:bottom-k1 z-50">   
        <MenuLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</MenuLink>
      </CtrlBL>
      <CtrlBR className="fixed right-k2 xs:right-k1 lg:right-k0 2xl:right-k1 mb-4 2xl:mb-0 bottom-k0 2xl:bottom-k1 z-50">
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