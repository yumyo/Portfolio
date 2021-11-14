import React from "react"
import tw, { styled, css } from 'twin.macro'
import NavLink from "./NavLink"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Link } from "gatsby"

  // const CtrlMR = tw.div`
  // absolute right-k1 top-1/2 z-50`;

const CtrlMR = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw`absolute right-k1 top-1/2 z-50 transform rotate-90 translate-x-1/2`}
    
  `
]);
// const CtrlML = tw.div`
// `;
const CtrlML = styled.div([
  css`
    /* writing-mode: vertical-rl; */
    /* text-orientation: upright; */
    ${tw`absolute left-k1 top-1/2 z-50 transform -rotate-90 -translate-x-1/2`}
    
  `
]);

export default function Middle(props) {

  return (
    <>
      <CtrlML>   
        <AniLink fade to="/about/">About</AniLink>
      </CtrlML>
      <CtrlMR>
        <AniLink fade to="/archive/">Archive</AniLink>
      </CtrlMR>
    </>
  )
}