import React from "react"
import tw, { styled, css } from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink"

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
        <TransitionLink to="/about/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >About</TransitionLink>
      </CtrlML>
      <CtrlMR>
        <TransitionLink to="/archive/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Archive</TransitionLink>
      </CtrlMR>
    </>
  )
}