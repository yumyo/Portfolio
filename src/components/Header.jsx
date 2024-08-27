import React, { useEffect, useState } from "react"
import tw, { styled, css } from "twin.macro"
import TransitionLink from "gatsby-plugin-transition-link"
import Logo from "./Logo"
import ThemeToggle from "./themeToggle"
// import {KeyboardArrowLeft} from "@styled-icons/material/KeyboardArrowLeft"

import { TopPos, RightPos, LeftPos } from "../components/theme"
// import { InView } from 'react-intersection-observer'
// import { MenuAltLeft } from "@styled-icons/boxicons-regular/MenuAltLeft"

const KKLogo = styled(Logo)([
  css`
    width: 171px;
    height: 122.56px /* left: 1.325%; */ /* margin-left: -16px; */
      /* transform: translate(calc(-50% + 16px)); */ @media screen and
      (min-width: 640px) {
      /* width: 171px;
      height: 122.56px */
    }
  `,
])

// const LogoLink = styled(TransitionLink)([
//   css`
//     /* width: 171px; */
//     /* left: 1.325%; */
//     /* transform: translate(calc(-50% + 16px)); */
//     @media screen and (min-width: 640px) {
//       /* width: 171px; */
//     }
//   `,
// ])

const CtrlTC = tw.div`
`

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base transition-all
`

/*
const CtrlBR = tw.div`
absolute right-k1 bottom-k1`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1`;
*/
const HeaderWrapper = tw.div`w-full mx-auto top-0`

export default function Header(props) {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 20))
    }
  }, [setSmall])
  return (
    <HeaderWrapper>
      <TransitionLink
        to="/"
        exit={{
          length: 0.5,
        }}
        entry={{ length: 0.5 }}
        className="block"
        activeClassName="text-violet-600 dark:text-violet-400"
      >
        <KKLogo className="fixed -left-k1 sm:left-0 md:left-k top-k z-50 block transform cursor-pointer text-black-shade-200 dark:text-black-shade-800 2xl:left-k0" />
        <h1
          className={`nav-link text-base leading-normal top-k1v fixed left-k1 pl-1 z-50 cursor-pointer transition-colors hover:text-violet-600 dark:hover:text-violet-400 transform -translate-x-1`}
        >
          Giulia Nicole 
          <br />
          Pernice
        </h1>
      </TransitionLink>
      <CtrlTC
        className={`hidden xs:block fixed z-40 right-1/2 ${TopPos} transition-opacity translate-x-1/2  -translate-y-1/2 ${
          small ? "opacity-0" : "opacity-1"
        }`}
      >
        {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview") && <ThemeToggle />}
      </CtrlTC>
      <div
        className={`block fixed z-40 text-right ${TopPos} ${RightPos}`}
        // fixed
      >
        
        {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview") && <MenuLink
          to="/cases"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="block"
          activeClassName="active"
          partiallyActive={true}
          preventScrollJump
        >
          Case Histories
        </MenuLink>}
        {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview") && <MenuLink
          to="/works"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="block"
          activeClassName="active"
          partiallyActive={true}
          preventScrollJump
        >
          Works Archive
        </MenuLink>}
        {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview") && <MenuLink
          to="/labs"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="block"
          activeClassName="active"
          partiallyActive={true}
          preventScrollJump
        >
          Creative Labs
        </MenuLink>}
        <MenuLink
          to="/about/"
          exit={{
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="block"
          activeClassName="active"
          preventScrollJump
        >
          About
        </MenuLink>
        <TransitionLink
          to="/cv/"
          exit={{
            trigger: ({ node, e, exit, entry }) => console.log(node, e, exit, entry),
            length: 0.5,
          }}
          entry={{ length: 0.5 }}
          className="block"
          activeClassName="active"
          preventScrollJump
        >
          CV
        </TransitionLink>
        {/* <MenuLink to="/contact/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="block"
        activeClassName="active"
        >Contact</MenuLink> */}
      </div>
    </HeaderWrapper>
  )
}
