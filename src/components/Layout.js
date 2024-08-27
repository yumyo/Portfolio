import React, { useRef, useEffect, useState } from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useLocation } from "@reach/router"

// global styles
import "../styles/global.scss"
// Components
// import { TopPos, RightPos } from "../components/theme"
import Header from "./Header"
import Footer from "./Footer"
import Middle from "./Middle"
import GridBg from "./GridBg"
import Minus from "./hamburger"
// import Slider from './hamburger/types/spin'
import FullNav from "./FullNav"
// Fonts
import '@fontsource/ibm-plex-sans/200.css';
import '@fontsource/ibm-plex-sans/300.css';
import "@fontsource/ibm-plex-sans/400.css" // Weight 500.
import "@fontsource/ibm-plex-sans/500.css" // Weight 500.
import "@fontsource/ibm-plex-sans/700.css" // Weight 500.
import tw, { styled, css } from "twin.macro"
// import { renderToStaticMarkup } from "react-dom/server"
import { EyeOutline } from '@styled-icons/evaicons-outline/'


const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// const Navigation = styled(FullNav)([
//   css`
//   display: flex;
//   &.is-active {
//     display: none;
//     nav {
//       background-color:red;
//     }
//   }
//   `
// ])

const ContentWrapper = tw.div`
relative z-30 
`
// w-6/12  z-50

const MainContainer = styled.div(
  css`
    ${tw` w-screen h-full `};
    &.is-locked {
      ${tw`overflow-hidden h-screen`}; /* style custom css selectors with tailwind classes */
    }
  `
)

// const svgString = encodeURIComponent(renderToStaticMarkup(<GridBg />))

// const GridBgContainer = styled.div([
//   css`
//     ${tw`w-screen h-screen fixed top-0 left-0 z-0`}
//     background-image: url("data:image/svg+xml,${svgString}");
//   `,
// ])

const GeometriCBG = tw(GridBg)`
w-screen h-screen fixed top-0 left-0 z-0 text-white dark:text-black dark:sm:text-black-shade-950
`

const Layout = ({ children }) => {

  // const { title } = useSiteMetadata()
  const [isActive, setActive] = useState("false")
  const [isBGVisible, setBGVisible] = useState(false)
  const location = useLocation()
  const prevLocation = usePrevious(location)

  useEffect(() => {
    if (location !== prevLocation) {
      setActive(false)
    }
  }, [location, prevLocation, setActive])

  const handleToggle = () => {
    setActive(!isActive)
  }

  const toggleBGVisibility = () => {
    setBGVisible(!isBGVisible)
  }

  return (
    <MainContainer
      className={`${isActive ? "is-locked" : ""} flex flex-col min-h-screen`}
    >
      
      <Header />
      <div
        className={`flex hidden flex-row fixed top-k1 z-50 text-violet-400 right-k1 md:-mr-4`}
      >
        <Minus
          active={isActive}
          onClick={handleToggle}
          width={40}
          lineHeight={3}
          borderRadius={3}
        />
      </div>
      <FullNav
        // className={`${isActive ? "is-active" : ""} `}
        isActive={isActive}
      />
      <ContentWrapper className="grow shrink-0 basis-auto content">
        {children}
      </ContentWrapper>
      {/* <Middle /> */}
      <Footer />
     {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview") && <button className={`fixed bottom-k1 z-50 left-1/2 -translate-x-1/2`} onClick={toggleBGVisibility}> <EyeOutline size="24" className="transition-colors hover:text-violet-600" /></button>}
      {isBGVisible && <GeometriCBG />}
    </MainContainer>
  )
}

export default Layout
