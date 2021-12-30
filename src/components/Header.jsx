import React, { useRef, useEffect, useState } from "react"
import tw, { styled, css } from 'twin.macro'
import TransitionLink from 'gatsby-plugin-transition-link';
import Logo from "./Logo"
import ThemeToggle from "./themeToggle"
// import {KeyboardArrowLeft} from "@styled-icons/material/KeyboardArrowLeft"

import { TopPos, RightPos, LeftPos } from "../components/theme" 
// import { InView } from 'react-intersection-observer'
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft'
// import { Sling as Hamburger } from 'hamburger-react'
// import Slider from './hamburger/types/slider'
// import SliderReverse from './types/slider-reverse'

// const ActiveIcon = tw(KeyboardArrowLeft)`
//   text-yellow-500 translate-x-4
// `
// <ActiveIcon size="24" />

const KKLogo = styled(Logo)([
  css`
    width: 171px;
    height: 122.56px
    /* left: 1.325%; */
    /* margin-left: -16px; */
    /* transform: translate(calc(-50% + 16px)); */
    @media screen and (min-width:640px) {
      /* width: 171px;
      height: 122.56px */
    }
  `
]);

const LogoLink = styled(TransitionLink)([
  css`
    /* width: 171px; */
    /* left: 1.325%; */
    /* transform: translate(calc(-50% + 16px)); */
    @media screen and (min-width:640px) {
      /* width: 171px; */
    }
  `
]);

const CtrlTC = tw.div`
`;

const MenuLink = tw(TransitionLink)`
leading-none font-medium text-base transition-all
`



/*
const CtrlBR = tw.div`
absolute right-k1 bottom-k1`;

const CtrlBL = tw.div`
absolute left-k1 bottom-k1`;
*/
const HeaderWrapper = tw.div`w-full`;

export default function Header(props) {
  const [small, setSmall] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 20)
      );
    }
  }, [setSmall]);
  return (
    <HeaderWrapper>
      <LogoLink to="/"
        exit={{
          length: .6,
        }}
        entry={{ length: .6 }}
        className=""
        activeClassName="text-violet-600 dark:text-violet-400"
        >
        <KKLogo className="transform block fixed top-k left-k 2xl:left-k0 z-50 cursor-pointer  text-black-shade-200 dark:text-black-shade-800" />
        <h1 className={`nav-link text-base leading-tight fixed top-k1 ${LeftPos} md:-ml-2 z-50 cursor-pointer transition-colors hover:text-violet-600 dark:hover:text-violet-400`}>Nicola Giulia<br />Pernice</h1>
      </LogoLink>
      <CtrlTC className={`hidden xs:block fixed z-40 right-1/2 ${TopPos} transition-opacity translate-x-1/2  ${
          small ? "opacity-0" : "opacity-1"
        }`}>
        <ThemeToggle />
      </CtrlTC>
      <div className={`hidden fixed lg:block z-40 text-right md:-mr-2 ${TopPos} ${RightPos}`}>
        <MenuLink to="/cases"
        exit={{
          length: .6,
        }}
        entry={{ length: .6 }}
        className="block"
        activeClassName="active"
        partiallyActive={true} 
        >Case Histories</MenuLink>
         <MenuLink to="/works"
        exit={{
          length: .6,
        }}
        entry={{ length: .6 }}
        className="block"
        activeClassName="active"
        >Works Archive</MenuLink>
         <MenuLink to="/labs"
        exit={{
          length: .6,
        }}
        entry={{ length: .6 }}
        className="block"
        activeClassName="active"
        >Creative Labs</MenuLink>
        <MenuLink to="/about/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="block"
        activeClassName="active"
        >About</MenuLink>
        <TransitionLink to="/cv/"
        exit={{
          length: .3,
        }}
        entry={{ length: .3 }}
        className="block"
        activeClassName="active"
        >CV</TransitionLink>
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