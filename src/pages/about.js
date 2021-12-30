import React, { useRef, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { gsap } from "gsap"
import tw from 'twin.macro'
import { StaticImage } from "gatsby-plugin-image"
// Assets
// import selfie from "../../about.png" 

const AboutLayout = tw.div`mx-auto w-k7 mt-k2v`;

const AboutPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log('About Page', transitionStatus);
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

      <AboutLayout className="anim-about opacity-0  mb-14">
        <div className="">
          <div className="">
            <StaticImage className="ml-k2 w-k35 float-left mt-16 mr-8 mb-4" src="https://res.cloudinary.com/yumyo/image/upload/v1640539607/k%20media/about-g.png" alt="A kitten" />
            {/* <img src={'https://res.cloudinary.com/yumyo/image/upload/v1640539607/k%20media/about-g.png'} alt="Nicola Giulia glitchy picture" /> */}
          </div>
          <div className="">
            <div className="bio">
              <h1 className="ml-k4 w-k5">Nicola Giulia Pernice</h1>
              <p className="text-lg mb-4 mb-4  ml-k4 w-k5">I am a passionate, highly motivated, experienced and organised full stack designer currently living in london.</p>
              <p className="mb-4 mt-4 ml-k4 w-k5">The full stack title stands for the sum of the various abilities developed during 20 years of work in the creative field. These cross-disciplinary skills have made me able to take care of the whole process and life cycle of a product, from concept to design to the development of working prototypes and everyday problem solving. It also stands for the ability to speak the native language of every member of the team.</p>
              <div className="mt-4 ml-k4 w-k5">
                <p className="mb-4">I deeply love my job in all of its shades and different aspects, from marketing research to information architecture, branding, print and web design, production processes, data-driven ux, ui, content management systems and front-end development. As a team player i highly value meetings, challenges motivate me, i am meticulous, focused on details, enthusiastic in making relevant contributions with measurable results and i always play to win clients satisfaction and loyalty. Also, in my daily workflow as a digital designer, i regularly use git to maintain and collaborate on code, i am confident with the cli, use preprocessors and common node tools to ease the front-end development process, slack for team communication, moqups for wireframing, invision for design iteration and reviews. I constantly advance myself through learning, to be in the know of the latest trends, technologies, skills, and practices. Thus, i can easily switch to your design software/ tool/workflow of choice.</p>
                <p>Occasionally I also write about my work <GatsbyLink to="/posts/">here</GatsbyLink></p>
              </div>
            </div>
          </div>
        </div>
      </AboutLayout>

  )
}

// AboutPage.Layout = Layout

export default AboutPage