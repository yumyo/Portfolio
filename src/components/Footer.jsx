import React from "react"
import tw from 'twin.macro'
import TransitionLink from "gatsby-plugin-transition-link/AniLink";

const CtrlBR = tw.div`
absolute right-k1 bottom-k1 z-50`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1 z-50`;

export default function Header(props) {

  return (
    <>
      <CtrlBL>   
        <TransitionLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >CV</TransitionLink>
      </CtrlBL>
      <CtrlBR>
        <TransitionLink to="/style-guide/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Style Guide</TransitionLink>
      </CtrlBR>
    </>
  )
}