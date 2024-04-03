// import React from "react"

// export function wrapPageElement({ element, props }) {
//   const Layout = element.type.Layout ?? React.Fragment
//   return <Layout {...props}>{element}</Layout>
// }

import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { TransitionState } from "gatsby-plugin-transition-link"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ParallaxProvider>
      {/* <ParallaxRouteUpdate /> */}
      {element}
    </ParallaxProvider>
  )
}
