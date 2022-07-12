// import React from "react"

// export function wrapPageElement({ element, props }) {
//   const Layout = element.type.Layout ?? React.Fragment
//   return <Layout {...props}>{element}</Layout>
// }

import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      {/* <ParallaxRouteUpdate /> */}
      {element}
    </ParallaxProvider>
  )
}
