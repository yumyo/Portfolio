import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import tw from 'twin.macro'

const SmallCenter = tw.div`
w-k5 aspect-w-16 aspect-h-9 mx-auto bg-green-500
`;

const SGLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const StyleGuide = ({ transitionStatus }) => {
  useEffect(() => {
    console.log('Style Guide Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-sg', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-sg', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-sg', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (
    <SGLayout className="anim-sg opacity-0">
      <h1>Style Guide</h1>
      <SmallCenter></SmallCenter>
      <pre>{`
      spacing: {
        'k0' : '3.125%',
        'k1' : '6.25%',
        'k2' : '12.5%',
        'k3' : '25%',
        'k4' : '33.3333%',
        'k5' : '50%',
        'k6' : '66.6666%',
        'k7' : '75%',
        'k8' : '87.5%',
        'k9' : '93.75%',
        'k10' : '96.875%',
        'k100' : '100%',
      }`}
      </pre>
    </SGLayout>
  )
}

// StyleGuide.Layout = Layout

export default StyleGuide;