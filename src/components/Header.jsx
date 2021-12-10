import * as React from "react"
import tw, { styled, css } from 'twin.macro'
import TransitionLink from 'gatsby-plugin-transition-link';
import Logo from "./Logo"

import ThemeToggle from "./themeToggle"

const KKLogo = styled(Logo)([
  tw`absolute top-k0 z-50 cursor-pointer text-black-shade-900 dark:text-black-shade-50`,
  css`
    width: 171px;
    left: 1.325%;
  `
]);

const CtrlTR = tw.div`
absolute right-k1 mt-9  -translate-y-k100`;

const CtrlTC = tw.div`
absolute right-1/2 mt-8 transform translate-x-1/2`;

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base
`

/*
const CtrlBR = tw.div`
absolute right-k1 bottom-k1`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1`;
*/
const HeaderWrapper = tw.div`
fixed z-50 top-k0 left-0 w-full`;

export default function Header(props) {

  return (
    <HeaderWrapper>
      <TransitionLink to="/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        >
        <KKLogo />
      </TransitionLink>
      <CtrlTC> <ThemeToggle /></CtrlTC>
      <CtrlTR>
        <MenuLink to="/cases"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Case Histories</MenuLink>
        <MenuLink to="/works/"
        exit={{
          length: .3,
        }}
        entry={{}}
        className="nav-link hover:text-gray-600"
        activeClassName="border-b-2 border-gray-600"
        >Works</MenuLink>
      </CtrlTR>
    </HeaderWrapper>
  )
}