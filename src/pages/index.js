import React, { useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import tw from 'twin.macro'

const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log('Home Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-home', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entered') {
      gsap.to('.anim-home', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-home', { 
        autoAlpha: 0, 
        duration: .3 
      });
    }
  }, [transitionStatus]);
  const Title = tw.h2`
    text-3xl
  `;

  const SubTitle = tw.p`
    text-lg
  `;

  const Intro = tw.div`
    mx-auto w-6/12 mt-k3v
  `;

  return (
      <Intro className="anim-home">
        <Title>
          Hi, I am Nicola Giulia Pernice <br /> a Creative Developer and Product Designer.
        </Title>
        <SubTitle>Here you can scroll through my <Link to="/cases">case-histories</Link>, know more <Link to="/about">about me</Link> and get in touch to discuss your awesome idea! </SubTitle>
      </Intro>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
