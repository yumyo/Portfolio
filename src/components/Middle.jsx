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
      <CtrlML className={`hidden md:block fixed top-1/2 z-30 transform -rotate-90 -translate-x-1/2 -translate-y-1/2 ${LeftPos}`}>   
      <MenuLink to="/style-guide/"
        exit={{
          length: .6,
        }}
        entry={{ length: .6 }}
        className="block"
        activeClassName="active"
        >Style Guide</MenuLink>
      </CtrlML>
      <CtrlMR className={`hidden md:block fixed top-1/2 z-30 ml-2 transform rotate-90 translate-x-1/2 -translate-y-1/2 ${RightPos}`}>
        <MenuLink to="/works/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link"
        activeClassName="active"
        >Work Archive</MenuLink>
      </CtrlMR>
    </>
  )
}