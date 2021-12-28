import React from "react"
import tw, { styled, css } from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink"
import { RightPos, LeftPos } from "../components/theme" 

  // const CtrlMR = tw.div`
  // absolute right-k1 top-1/2 z-40`;

const CtrlMR = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw``}
    
  `
]);
// const CtrlML = tw.div`
// `;
const CtrlML = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw``}
    
  `
]);

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base
`

export default function Middle(props) {

  return (
    <>
      <CtrlML className={`hidden md:block fixed ml-2 top-1/2 z-30 transform -rotate-90 -translate-x-full -translate-y-1/2 ${LeftPos}`}>   
        <MenuLink to="/about/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >About</MenuLink>
      </CtrlML>
      <CtrlMR className={`hidden md:block fixed mr-2 top-1/2 z-30 transform rotate-90 translate-x-full -translate-y-1/2 ${RightPos}`}>
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