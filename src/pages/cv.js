import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { gsap } from "gsap"
import TransitionLink from "gatsby-plugin-transition-link"
import ContactForm from "../components/ContactForm"
import { Pinterest } from "@styled-icons/entypo-social/Pinterest"
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Behance } from "@styled-icons/boxicons-logos/Behance"
import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr"
import { ShieldCheckmark } from "@styled-icons/fluentui-system-regular/ShieldCheckmark"
import Contact from '../templates/contact-form-template.js'
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks'
// import tw from "twin.macro"
import {
  Lead,
  Label,
  PageTitle,
  LeftSide,
  LeftContent,
  Job,
} from "../components/theme"



const Cv = () => {
  const {
    twitter,
    github,
    stackoverflow,
    secureEmail,
    behance,
    pinterest,
    tumblrJournal,
  } = useSiteMetadata()

  const transitionState = useTransitionState()
  console.log ('transitionStatus hook', transitionState);
    
  useEffect(() => {
    // console.log ('transitionStatus', transitionStatus);
    gsap.to(".anim-cv", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionState.transitionStatus === "exiting") {
      console.log('banana')
      gsap.to(".anim-cv", {
        autoAlpha: 0,
        duration: 0.25,
        delay: 0,
        onComplete: () => {
          window.scrollTo(0, 0)
        },
      })
    }
  }, [transitionState.transitionStatus])
  // const ref = useRef(null)
  
  return (
    <div className="anim-cv m-auto mt-k5v mb-k3v flex min-h-screen w-k8 flex-row flex-wrap items-baseline opacity-0 xl:ml-k2 xl:w-k7 2xl:ml-k3 2xl:w-k5">
      
      <div className="w-full mb-8">
        <div className={LeftSide}></div>

        <div className={LeftContent}>
          <h1 className={`${PageTitle} mb-2 -mt-16 font-extralight`}>Curriculum Vitae</h1>
        </div>
      </div>
      <div className={LeftSide}>{/* <h2 className={Label}>PROFILE</h2> */}</div>
      <div className={LeftContent}>
        <p className={` ${Lead} 2xl:pr-k25`}>
          I'm a Digital Product Designer and Front-End Developer, passionate
          about the publishing industry and innovative projects spanning a wide
          range of media, platforms and devices. <br />
        </p>
        <p className="2xl:pr-k25">
          From strategic master plans to the finer details, I have a wealth of
          experience across all research, design and development phases.
        </p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>Location</h2>
      </div>
      <div className={LeftContent}>
        <p>I am currently based in London, UK.</p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>
          Strategic
          <br /> Skills
        </h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="mb-6 list-none fluid-text-base">
            <li>Information Architecture</li>
            <li>User Experience</li>
            <li>Agile methodogies</li>
            <li>Project and Resource Management</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>
          Design
          <br /> Skills
        </h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="mb-6 list-none fluid-text-base">
            <li>Web and Mobile Design</li>
            <li>User Interface Design</li>
            <li>Animation and Interactivity</li>
            <li>3D and Digital Art</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>
          Code
          <br />
          Skills
        </h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="mb-6 list-none fluid-text-base">
            <li>Javascript ES6, React.js</li>
            <li>CSS, SASS, PostCSS, Styled Components, NPM, Yarn</li>
            <li>Accessibility and HTML5 Semantics</li>
            <li>DevOps, Wordpress API and PHP templating, Git</li>
            {/* <li>Dev Ops on LAMP, LEMP, MERN stacks</li> */}
          </ul>
        </div>
      </div>
      {/* <div className={LeftSide}>
          <h2 className={Label}>TOOLS of the Trade</h2>
        </div>
        <div className={`${LeftContent} flex flex-row justify-between`}>
          <div className="">
            <h3 className={Label}>STRATEGIC</h3>
            <ul className="list-disc pl-4">
              <li>Click Up</li>
              <li>Asana</li>
              <li>Harvest & Forecast</li>
              <li>Google Apps</li>
              <li>Whimsical</li> 
            </ul>
          </div>
          <div>
            <h3 className={Label}>VISUAL</h3>
            <ul className="list-disc pl-4">
              <li>Figma, Sketch App</li>
              <li>InVision, Flinto, Tumult Hype</li>
              <li>Adobe Photoshop, Illustrator, InDesign</li>
              <li>Adobe Premiere, Adobe Media Encoder, Apple QuickTime</li>
            </ul>   
          </div>
          <div>
            <h3 className={Label}>TECHNICAL</h3>
            <ul className="list-disc pl-4">
              <li>Visual Studio Code, CLI</li>
              <li>Docker, Lando</li>
              <li>Netlify, Surge, Pantheon</li> 
              <li>phpMyAdmin, Sequel Pro</li> 
              <li>Kaleidoscope, Transmit</li>
            </ul>
          </div>
        </div> */}
      {/* <div className={LeftSide}>
        <h2 className={Label}>RECENT PROJECTS</h2>
      </div> */}
      {/* <div className={LeftContent}>
        <p className="">
          In recent years I have been working exclusively for Raconteur Media
          and alan. agency. <br /> I have been ideating, planning and developing
          a diverse range of content experiences and marketing-oriented tools
          integrated with different backend systems, databases and services.
          <br />
          (.NET, Hubspot CMS, EPIserver, ContentStack, Umbraco, WordPress,
          Directus CMS, Contentful, Firebase, Airtabe, Google Sheet to name a
          few). <br />I you would like to know more about it, you can ask for a
          prviate access{" "}
          <TransitionLink
            to="/contact"
            exit={{
              length: 0.5,
            }}
            entry={{ length: 0.5 }}
            className="block"
            activeClassName="active"
            partiallyActive={true}
            preventScrollJump
          >
            here.
          </TransitionLink>{" "}
        </p>
      </div> */}
      <div className="heading mt-16 mb-16 block w-full ">
        <h2 className={`${Label} fluid-text-xl`}>Employment History</h2>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2023 ~ Present</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Lead Design Technologist</h3>
          <p className="job__company">DMI, Digital Management, LLC - London , United Kingdom</p>
          <p>
          Designing and developing comprehensive design systems with a focus on inclusive and human-centered design principles. Exploring web 3D technologies and integrating AI into our practice. Ensuring all designs meet high standards of accessibility, creating digital experiences usable by everyone.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2020 ~ 2022</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Digital Product Engineer</h3>
          <p className="job__company">alan. agency - London , United Kingdom</p>
          <p>
            Conveying modern software development processes with tools and
            frameworks to build, launch, and scale cuttingedge digital solutions
            for our clients.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2016 ~ 2019</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Full Stack Development and Design</h3>
          <p className="job__company">
            Raconteur Media Ltd. - London , United Kingdom
          </p>
          <p>
            I have been hired at Raconteur to completely redesign the main site
            and create a new one for the company’s main branch, the custom
            publishing division. Both products received astonishing feedback
            from readers, clients and whiting the company. I then led a digital
            transformation process to enable the company to develop developing
            and mobile products for their clients.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2011 ~ 2016</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Co-founder, Full-stack Development and Design</h3>
          <p className="job__company">
            thePrintLabs Ltd. - London , United Kingdom
          </p>
          <p>
            I co-founded thePrintLbas in 2011 to serve the Publishing Industry
            with a unique approach to making digital publishing agile and
            future-proof. My roles span from Project Management to Information
            Architecture, Web and Mobile Design, UX/UI, and Front-end
            Development.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2008 ~ 2011</p>  
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Web Designer</h3>
          <p className="job__company">CDB//Agency srl - Catania, Italy</p>
          <p>
            At the CDB//Agency, I had the chance to start following complete
            projects from the early concept to the final deliverables. In
            addition, I also started my training in DevOps (server-side, setup
            and deployment operations) and Front-End Development. As a result, I
            could cover the bridge between creatives and coders for the company
            while also holding the responsibility of remotely managing
            outsourcing partners.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2000 ~ 2007</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Freelance Web Designer</h3>
          <p className="job__company">Self employed - Rome, Italy</p>
          <p>
            In 2000, I saw the opportunity to specialise in the web industry,
            which was rapidly expanding. In the following years on, I
            concentrated on this field. Since the competitive quality of the web
            drives the need for constant innovation, research and daily learning
            of new trends and technologies became one of my most important
            skills. A skill I paired with a firm belief in typography and
            usability and a natural aptitude for maths and code.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label}>1994 ~ 1999</p>
      </div>
      <div className={LeftContent}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Freelance Graphic Designer</h3>
          <p className="job__company">Self employed - Catania, Italy</p>
          <p>
            1994 was the formal year when I realised my vocation for digital
            design. It fitted with my natural talents so perfectly that it
            should have been the job of my life, despite coming from an entirely
            different background.
          </p>
        </div>
      </div>
      <div className="heading mt-16 mb-16 block w-full ">
        <h2 className={`${Label} fluid-text-xl`}>Certifications</h2>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2019</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>  
            <h3 className="fluid-text-lg">Certified ScrumMaster® (CSM®)</h3>
            <p className="edu__place">
              Scrum Alliance, Inc. - London, United Kingdom
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2018</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">React, Redux, GraphQL</h3>
            <p className="edu__place">
              ReactJS Academy - London, United Kingdom
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <p className={Label}>2016</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">User Experience Design</h3>
            <p className="edu__place">
              General Assembly - London, United Kingdom
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <p className={Label}>1997 ~ 1998</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">
              Digital/Multimedia and Information Resources Design
            </h3>
            <p className="edu__place">Cormorano Felix - Catania, Italy</p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <p className={Label}>1992 ~ 1994</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">PPLH, Helicopter Private Pilot License</h3>
            <p className="edu__place">COMAER - Catania, Italy</p>
          </li>
        </ul>
      </div>
      <div className="heading mt-16 mb-16 block w-full ">
        <h2 className={`${Label} fluid-text-xl`}>Education History</h2>
      </div>
      <div className={LeftSide}>
      <p className={Label}>2015 ~ 2016</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">ESOL Level 2 qualification </h3>
            <p className="edu__place">
              Tower Hamlets College - London, United Kingdom
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
      <p className={Label}>1994 ~ 1996</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">
              Foreign Languages and Literatures (English and Spanish)
            </h3>
            <p className="edu__place">University of Catania - Catania, Italy</p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
      <p className={Label}>1988 ~ 1992</p>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <p className="edu__date text-gray-500"></p>
            <h3 className="fluid-text-lg">
              A Level. Aeronautical Expert Technician Diploma
            </h3>
            <p className="edu__place">
              Istituto Tecnico Aeronautico “A. Ferrarin” - Catania, Italy
            </p>
          </li>
        </ul>
      </div>
      <div className="heading mt-16 mb-16 block w-full ">
        <h2 className={`${Label} fluid-text-xl`}>Languages</h2>
      </div>
      <div className="flex flex-row w-full pl-k25 mb-k4">
        <div className={`${LeftContent} mb-0 w-full overflow-hidden lg:w-1/3`}>
          <ul className="flex flex-wrap overflow-hidden">
            <li className="lang">
              <p className="mb-0">Italian</p>
              <div className="block w-full">Native speaker</div>
            </li>
          </ul>
        </div>
        
        <div className={`${LeftContent} mb-0 w-full overflow-hidden lg:w-1/3`}>
          <ul className="flex flex-wrap overflow-hidden">
            <li className="lang">
              <p className="mb-0">English</p>
              <div className="block w-full">Fluent</div>
              </li>
          </ul>
        </div>
        
        <div className={`${LeftContent} mb-0 w-full overflow-hidden lg:w-1/3`}>
          <ul className="flex flex-wrap overflow-hidden">
            <li className="lang">
              <p className="mb-0">Spanish</p>
              <div className="block w-full">Intermidiate</div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={LeftSide}>
      Related interests
      </div>
      <div className={`${LeftContent} mb-16`}>
        <p>
          Math & Geometry, Calligraphy, Photography, Anthropology, Design History, Philosophy.
        </p>
      </div> 
      <div className={LeftSide}>
        <h2 className={Label}></h2>
      </div>
      <div className={`${LeftContent} mb-0`}>
        <p className="mb-0">
          <a
            href="https://short.kdsign.com/cv"
            alt="Download CV"
            targte="_blank"
            className="fluid-text-lg"
          >
            Download this CV as PDF
          </a>
        </p>
      </div>
      */}
      <div
      className={`sm:mb-20 lg:mb-0 mx-auto w-full mt-k2  `}
    >
      <Contact />
    </div>
    </div>
  )
}

// Cv.Layout = Layout

export default Cv
