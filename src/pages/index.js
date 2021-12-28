import React, { useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import tw from 'twin.macro'
import { Lead } from "../components/theme" 

const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log('Home Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-home', {
      autoAlpha: 1,
      duration: .6,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entered') {
      gsap.to('.anim-home', {
        autoAlpha: 1, 
        duration: .6, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-home', { 
        autoAlpha: 0, 
        duration: .6 
      });
    }
  }, [transitionStatus]);
  const Title = tw.h2`
    text-lg
    sm:text-2xl
    2xl:text-3xl
    mb-2
    2xl:mb-3
  `;

  // const Intro = tw.div``;
  // min-h-screen 

  return (
    <div className="flex flex-col justify-center mt-k5v -translate-y-1/2">
      <div className="anim-home opacity-0 mx-auto w-k7 xs:w-k8 md:w-k5">
        <Title>
          Hi, my name is Nicola&nbsp;Giulia&nbsp;Pernice <br /> I am a Product Designer and Creative&nbsp;Developer.
        </Title>
        <div className={Lead}>Here you can scroll through my <Link to="/cases">case-histories</Link>, know more <Link to="/about">about me</Link> and get in touch to discuss your awesome idea! </div>
      </div>
    </div>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
