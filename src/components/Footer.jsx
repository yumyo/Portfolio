import React from "react"
import tw from 'twin.macro'
import NavLink from "./NavLink"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const CtrlBR = tw.div`
absolute right-k1 bottom-k1 z-50`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1 z-50`;

export default function Header(props) {

  return (
    <>
      <CtrlBL>   
        <AniLink fade to="/cv/">CV</AniLink>
      </CtrlBL>
      <CtrlBR>
        <AniLink fade to="/style-guide/">Style Guide</AniLink>
      </CtrlBR>
    </>
  )
}