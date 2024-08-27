// import React from "react"

// export function wrapPageElement({ element, props }) {
//   const Layout = element.type.Layout ?? React.Fragment
//   return <Layout {...props}>{element}</Layout>
// }

import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import gsap from "gsap"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ParallaxProvider>
      {/* <ParallaxRouteUpdate /> */}
      {element}
    </ParallaxProvider>
  )
}

let exitCompleted = false;

export const onInitialClientRender = () => {
  gsap.to(".page-trans", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "sine.inOut",
    delay: 0.5,
  })
}

export const shouldUpdateScroll = () => {
  return false
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) {
    exitCompleted = false;
    gsap.to(".page-trans", 
    { 
      autoAlpha: 0, 
      duration: 0.5, 
      ease: "sine.inOut",
      onComplete: () => {
        exitCompleted = true;
      }
    });
  }
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && exitCompleted) {
    gsap.to(".page-trans", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 1.5,
    })
  }
}