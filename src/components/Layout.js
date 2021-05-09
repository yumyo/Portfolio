
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata";
import '../styles/global.scss';
import Interface from "../components/Interface";

import "@fontsource/ibm-plex-sans/400.css" // Weight 500.
import "@fontsource/ibm-plex-sans/500.css" // Weight 500.
import "@fontsource/ibm-plex-sans/700.css" // Weight 500.
import tw, { styled, css } from 'twin.macro'


export default function Layout({ children }) {

  const ContentWrapper = tw.div`
   mx-auto w-6/12 mt-k3v relative z-50
  `;

  const MainContainer = tw.div`
    w-screen h-full dark:bg-gray-900 
  `;

  const Title = tw.div`
    sr-only 
  `;

  const { title } = useSiteMetadata();
  return (
    <MainContainer>
      <Interface />
      <ContentWrapper>
        <Title>{title}</Title>
        {children}
      </ContentWrapper>
    </MainContainer>
  )
}
