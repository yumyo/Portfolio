import React from "react"
import tw, { styled, css } from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink"

  // const CtrlMR = tw.div`
  // absolute right-k1 top-1/2 z-50`;

const CtrlMR = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw`fixed right-k1 top-1/2 z-50 transform rotate-90 translate-x-1/2`}
    
  `
]);
// const CtrlML = tw.div`
// `;
const CtrlML = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw`fixed left-k1 top-1/2 z-50 transform -rotate-90 -translate-x-1/2`}
    
  `
]);

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base
`

export default function Middle(props) {

  return (
    <>
      <CtrlML>   
        <MenuLink to="/about/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >About</MenuLink>
      </CtrlML>
      <CtrlMR>
        <MenuLink to="/archive/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Archive</MenuLink>
      </CtrlMR>
    </>
  )
}