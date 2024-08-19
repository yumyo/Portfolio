import React, { useEffect } from "react"
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
import { gsap } from "gsap"
import tw from "twin.macro"
// import { Label } from "../../components/theme"

// const SmallCenter = tw.div`
// w-k5 aspect-w-16 aspect-h-9 mx-auto bg-green-500
// `
const SGLabel = tw.div`text-xs 2xl:text-sm uppercase tracking-widest text-black-shade-600`

const SGLayout = tw.div`mx-auto w-k75 md:w-k6 lg:w-6/12 mt-k3v md:mt-k2v`

const StyleGuide = () => {

  const transitionState = useTransitionState()

  useEffect(() => {
    console.log("Style Guide Page", transitionStatus)
  }, [transitionStatus])
  useEffect(() => {
    gsap.to(".anim-sg", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      gsap.to(".anim-sg", { autoAlpha: 0, duration: 0.25, delay: 0, onComplete: () => {
        window.scrollTo(0, 0)
      } })
    }
  }, [transitionStatus])
  return (
    <SGLayout className="anim-sg opacity-0 mb-k1v">
      <SGLabel>Logo</SGLabel>
      <div>
        <SGLabel>Typography</SGLabel>
        <div className="mt-8 mb-8">
          <SGLabel>Typeface</SGLabel>
          <p className="mt-4 text-3xl leading-normal max-w-prose break-all">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            1234567890 ?!()[]
            {}&*^%$#@~
          </p>
        </div>
        {/* <SmallCenter></SmallCenter> */}
        <SGLabel>Type scale</SGLabel>
        <h1 className="text-6xl">Display Heading</h1>
        <h1 className="text-5xl">Heading One</h1>
        <h2 className="text-4xl">Heading Two</h2>
        <h3 className="text-3xl">Heading Three</h3>
        <h4 className="text-2xl">Heading Four</h4>
        <h5 className="text-xl">Heading Five</h5>
        <h6 className="text-lg uppercase">Heading Six</h6>
        <p className="text-lg">Text Leading</p>
        <p className="text-base">Text Base</p>
        <p className="text-sm">Text Small</p>
        <p className="text-xs">Text Nano</p>
        <p className="text-xxs">Text Micro</p>
        <hr className="mb-8 mt-8 bg-black-shade-600" />
        <h1 className="text-6xl leading-tight">
          Cwm fjord bank glyphs vext quiz
        </h1>
        <h1 className="text-5xl leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h1>
        <h2 className="text-4xl leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h2>
        <h3 className="text-3xl leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h3>
        <h4 className="text-2xl leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h4>
        <h5 className="text-xl leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h5>
        <h6 className="text-lg uppercase leading-snug">
          Cwm fjord bank glyphs vext quiz
        </h6>
        <p className="text-lg leading-normal">
          Cwm fjord bank glyphs vext quiz
        </p>
        <p className="text-base">Cwm fjord bank glyphs vext quiz</p>
        <p className="text-sm">Cwm fjord bank glyphs vext quiz</p>
        <p className="text-xs">Cwm fjord bank glyphs vext quiz</p>
        <p className="text-xxs">Cwm fjord bank glyphs vext quiz</p>
      </div>
      <div>
        <SGLabel>Typography</SGLabel>
      </div>
    </SGLayout>
  )
}

// StyleGuide.Layout = Layout

export default StyleGuide
