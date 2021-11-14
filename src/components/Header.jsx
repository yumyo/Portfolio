import * as React from "react"
import tw, { styled, css } from 'twin.macro'
// import NavLink from "./NavLink"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "./Logo"

import ThemeToggle from "./themeToggle"

const KKLogo = styled(Logo)([
  tw`absolute top-k0 z-50 cursor-pointer`,
  css`
    width: 171px;
    left: 1.325%;
  `
]);

const CtrlTR = tw.div`
absolute right-k1 mt-9  -translate-y-k100`;

const CtrlTC = tw.div`
absolute right-1/2 mt-8  transform translate-x-1/2`;

const CtrlBR = tw.div`
absolute right-k1 bottom-k1`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1`;
// const CtrlBL = styled(NavLink)([
//   css`
//     ${tw`absolute left-k1 bottom-k1 z-50`}
//   `
// ]);

const HeaderWrapper = tw.div`
fixed z-50 top-k0 left-0 w-full`;

export default function Header(props) {

  return (
    <HeaderWrapper>
      <KKLogo />
      <CtrlTC> <ThemeToggle /></CtrlTC>
      <CtrlTR>
        <AniLink cover to="/cases/">Case Histories</AniLink>
        <AniLink cover to="/works/">Works</AniLink>
      </CtrlTR>
    </HeaderWrapper>
  )
}