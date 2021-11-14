
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import '../styles/global.scss'
import Header from "./Header"
import Footer from "./Footer"
import Middle from "./Middle"
import GridBg from "./GridBg";

import "@fontsource/ibm-plex-sans/400.css" // Weight 500.
import "@fontsource/ibm-plex-sans/500.css" // Weight 500.
import "@fontsource/ibm-plex-sans/700.css" // Weight 500.
import tw, { styled, css } from 'twin.macro'
import { renderToStaticMarkup } from 'react-dom/server';

const ContentWrapper = tw.div`
relative z-40 
`;
// w-6/12  z-50 

const MainContainer = tw.div`
 w-screen h-full  
`;

const Title = tw.div`
 sr-only 
`;

const svgString = encodeURIComponent(renderToStaticMarkup(<GridBg />));

const GridBgContainer = styled.div([
 css`
   ${tw`w-screen h-screen fixed top-0 left-0 z-0`}
   background-image: url("data:image/svg+xml,${svgString}");
 `
])

const Layout = ({ children }) => {

  const { title } = useSiteMetadata();
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <Title>{title}</Title>
        {children}
      </ContentWrapper>
      <Middle />
      <Footer />
      <GridBgContainer></GridBgContainer>
    </MainContainer>
  )
}

export default Layout