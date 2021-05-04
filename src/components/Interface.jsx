import React from "react"
import tw, { styled, css } from 'twin.macro'
import { renderToStaticMarkup } from 'react-dom/server';
import NavLink from "../components/NavLink"
import Logo from "../components/Logo"
import GridBg from "../components/GridBg";

export default function Interface(props) {

  const KKLogo = styled(Logo)([
    tw`absolute left-k0 top-k0 z-50`,
    css`
      width: 171px;
    `
  ]);

  const CtrlTR = styled(NavLink)([
    css`
      ${tw`absolute right-k1 top-k1 z-50 -translate-y-k100`}
    `
  ]);

  const CtrlBR = styled(NavLink)([
    css`
      ${tw`absolute right-k1 bottom-k1 z-50`}
    `
  ]);

  const CtrlBL = styled(NavLink)([
    css`
      ${tw`absolute left-k1 bottom-k1 z-50`}
    `
  ]);

  const svgString = encodeURIComponent(renderToStaticMarkup(<GridBg />));

  const GridBgContainer = styled.div([
    css`
      ${tw`w-screen h-screen absolute top-0 left-0 z-0`}
      background-image: url("data:image/svg+xml,${svgString}");
    `
  ])

  return (
    <>
      <NavLink to="/">
        <KKLogo></KKLogo>
      </NavLink>
      <CtrlBL to="/cv/">CV</CtrlBL>
      <CtrlTR to="/about/">About</CtrlTR>
      <CtrlBR to="/case-histories/">Case Histories</CtrlBR>
      <GridBgContainer></GridBgContainer>
    </>
  )
}