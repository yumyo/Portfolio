import React, { useRef, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from 'twin.macro'
import ContactForm from '../components/ContactForm'
// Assets
// import selfie from "../../about.png" 

const ContactLayout = tw.div`mx-auto w-k5 mt-k3v`;

const ContactPage = ({ transitionStatus }) => {
  useEffect(() => {
    // console.log('About Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-about', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-about', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-about', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (

      <ContactLayout className="anim-about opacity-0  mb-14">
        <div>
          <div className="">
            <h1>Let's get in touch!</h1>
          </div>
          <div className="">
            <ContactForm className="flex flex-col w-full"/>
          </div>
        </div>
      </ContactLayout>

  )
}

// AboutPage.Layout = Layout

export default ContactPage