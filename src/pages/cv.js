import React, { useEffect } from "react"
import { gsap } from "gsap"
import TransitionLink from "gatsby-plugin-transition-link"
// import tw from "twin.macro"
import {
  Lead,
  Label,
  PageTitle,
  LeftSide,
  LeftContent,
  Job,
} from "../components/theme"

const Cv = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to(".anim-cv", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 0.5,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === "exiting") {
      gsap.to(".anim-cv", { autoAlpha: 0, duration: 0.25, delay: 0 })
    }
  }, [transitionStatus])
  // const ref = useRef(null)

  return (
    <div className="anim-cv m-auto md:ml-k2 2xl:ml-k3  w-k75 xl:w-k7 2xl:w-k5 mt-k2v  opacity-0 flex min-h-screen flex-row flex-wrap items-baseline mb-k2v">
      <div className={LeftSide}></div>
      <div className={LeftContent}>
        <h1 className={`${PageTitle} mb-2 pt-16`}>Curriculum Vitae</h1>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>PROFILE</h2>
      </div>
      <div className={LeftContent}>
        <p className={` ${Lead}`}>
          I'm a Digital Product Designer and Front-End Developer, passionate
          about the publishing industry and innovative projects spanning a wide
          range of media, platforms and devices. <br />
          From strategic master plans to the finer details, I have a wealth of
          experience across all research, design and development phases.
        </p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>Location</h2>
      </div>
      <div className={LeftContent}>
        <p>
          I love to travel around the world, but I spend most of my time between
          the UK, Spain and Italy.
        </p>
        <p>I am currently based in London.</p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>STRATEGIC Skills</h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="list-disc pl-4">
            <li>Agile methodogies</li>
            <li>Project and Resource Management</li>
            <li>User Experience</li>
            <li>Information Architecture</li>
            <li>Digital Publishing Consultant</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>VISUAL Skills</h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="list-disc pl-4">
            <li>Web and Mobile Design</li>
            <li>Animation and Interactivity</li>
            <li>User Interface Design</li>
            <li>Digital Media Editing</li>
            <li>Print Design</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>TECHNICAL Skills</h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <ul className="list-disc pl-4">
            <li>Javascript ES6, React.js</li>
            <li>CSS, SASS, PostCSS, Styled Components</li>
            <li>Usability and HTML5 Semantics</li>
            <li>Git, Composer, Webpack, Node, NPM, Yarn</li>
            <li>Wordpress API and PHP templating</li>
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
      <div className={LeftSide}>
        <h2 className={Label}>RECENT PROJECTS</h2>
      </div>
      <div className={LeftContent}>
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
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>EMPLOYMENT HISTORY</h2>
      </div>
      <div className={LeftContent}>
        <div className="job-history">
          <div className={Job}>
            <h3>Digital Product Engineer</h3>
            <p className="job__company">
              alan. agency - London , United Kingdom
            </p>
            <p className="job__date text-gray-500">2020 - Present</p>
            <p>
              Conveying modern software development processes with tools and
              frameworks to build, launch, and scale cuttingedge digital
              solutions for our clients.
            </p>
          </div>
          <div className={Job}>
            <h3>Full Stack Development and Design</h3>
            <p className="job__company">
              Raconteur Media Ltd. - London , United Kingdom
            </p>
            <p className="job__date text-gray-500">2016 - 2019</p>
            <p>
              I have been hired at Raconteur to completely redesign the main
              site and create a new one for the company’s main branch, the
              custom publishing division. Both products received astonishing
              feedback from readers, clients and whiting the company. I then led
              a digital transformation process to enable the company to develop
              developing and mobile products for their clients.
            </p>
          </div>
          <div className={Job}>
            <h3>Co-founder, Full-stack Development and Design</h3>
            <p className="job__company">
              thePrintLabs Ltd. - London , United Kingdom
            </p>
            <p className="job__date text-gray-500">2011 - 2016</p>
            <p>
              I co-founded thePrintLbas in 2011 to serve the Publishing Industry
              with a unique approach to making digital publishing agile and
              future-proof. My roles span from Project Management to Information
              Architecture, Web and Mobile Design, UX/UI, and Front-end
              Development.
            </p>
          </div>
          <div className={Job}>
            <h3>Web Designer</h3>
            <p className="job__company">CDB//Agency srl - Catania, Italy</p>
            <p className="job__date text-gray-500">2008 - 2011</p>{" "}
            <p>
              At the CDB//Agency, I had the chance to start following complete
              projects from the early concept to the final deliverables. In
              addition, I also started my training in DevOps (server-side, setup
              and deployment operations) and Front-End Development. As a result,
              I could cover the bridge between creatives and coders for the
              company while also holding the responsibility of remotely managing
              outsourcing partners.
            </p>
          </div>
          <div className={Job}>
            <h3>Freelance Web Designer</h3>
            <p className="job__company">Self employed - Rome, Italy</p>
            <p className="job__date text-gray-500">2000 - 2007</p>{" "}
            <p>
              In 2000, I saw the opportunity to specialise in the web industry,
              which was rapidly expanding. In the following years on, I
              concentrated on this field. Since the competitive quality of the
              web drives the need for constant innovation, research and daily
              learning of new trends and technologies became one of my most
              important skills. A skill I paired with a firm belief in
              typography and usability and a natural aptitude for maths and
              code.
            </p>
          </div>
          <div className={Job}>
            <h3>Freelance Graphic Designer</h3>
            <p className="job__company">Self employed - Catania, Italy</p>
            <p className="job__date text-gray-500">1994 - 1999</p>{" "}
            <p>
              1994 was the formal year when I realised my vocation for digital
              design. It fitted with my natural talents so perfectly that it
              should have been the job of my life, despite coming from an
              entirely different background.
            </p>
          </div>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>SOCIAL PROFILES</h2>
      </div>
      <div className={LeftContent}>
        <ul>
          <li>
            Behance:{" "}
            <a href="https://behance.net/kairos" alt="">
              behance.net/kairos
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/kdsign" alt="">
              twitter.com/kdsign
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/nicola-pernice" alt="">
              linkedin.com/in/nico-pernice
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/yumyo" alt="">
              github.com/yumyo
            </a>
          </li>
          <li>
            StackOverflow:{" "}
            <a
              href="https://stackoverflow.com/story/nicola-giulia-pernice"
              alt=""
            >
              stackoverflow.com/story/nicola-giulia-pernice
            </a>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>CERTIFICATIONS</h2>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <p className="edu__date text-gray-500">2019</p>
            <p className="edu__name">Certified ScrumMaster® (CSM®)</p>
            <p className="edu__place">
              Scrum Alliance, Inc. - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">2018</p>
            <p className="edu__name">React, Redux, GraphQL</p>
            <p className="edu__place">
              ReactJS Academy - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">2016</p>
            <p className="edu__name">User Experience Design</p>
            <p className="edu__place">
              General Assembly - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">1997 - 1998</p>
            <p className="edu__name">
              Digital/Multimedia and Information Resources Design
            </p>
            <p className="edu__place">Cormorano Felix - Catania, Italy</p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">1992 - 1994</p>
            <p className="edu__name">PPLH, Helicopter Private Pilot License</p>
            <p className="edu__place">COMAER - Catania, Italy</p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>EDUCATION HISTORY</h2>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <p className="edu__date text-gray-500">2015 - 2016</p>
            <p className="edu__name">ESOL Level 2 qualification </p>
            <p className="edu__place">
              Tower Hamlets College - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">1994 - 1996</p>
            <p className="edu__name">
              Foreign Languages and Literatures (English and Spanish)
            </p>
            <p className="edu__place">University of Catania - Catania, Italy</p>
          </li>
          <li className={Job}>
            <p className="edu__date text-gray-500">1988 - 1992</p>
            <p className="edu__name">
              A Level. Aeronautical Expert Technician Diploma
            </p>
            <p className="edu__place">
              Istituto Tecnico Aeronautico “A. Ferrarin” - Catania, Italy
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>LANGUAGES</h2>
      </div>
      <div className={`${LeftContent} mb-16`}>
        <ul className="flex flex-wrap overflow-hidden">
          <li className="lang w-full overflow-hidden lg:w-1/3">
            <p className="lang__name text-gray-500">Italian</p>
            <p className="lang__level">Native speaker</p>
          </li>
          <li className="lang w-full overflow-hidden lg:w-1/3">
            <p className="lang__name text-gray-500">English</p>
            <p className="lang__level">Fluent</p>
          </li>
          <li className="lang w-full overflow-hidden lg:w-1/3">
            <p className="lang__name text-gray-500">Spanish</p>
            <p className="lang__level">Basic to Intermidiate</p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>SOME PERSONAL INTERESTS</h2>
      </div>
      <div className={`${LeftContent} mb-16`}>
        <p>
          Geometry, Interactivity, Animations, 3D, Typography, Calligraphy,
          Photography, Art, Theater, Opera, Novels and Literary Essays
          <br />
          Travels, Music, Dance, Spirituality, Yoga, Tantra, Buddhism,
          Philosophy.
        </p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>Other Links</h2>
      </div>
      <div className={`${LeftContent} mb-0`}>
        <p>
          <a
            href="https://short.kdsign.com/cv"
            alt="Download CV"
            targte="_blank"
          >
            Download this CV as PDF
          </a>
        </p>
      </div>
    </div>
  )
}

// Cv.Layout = Layout

export default Cv
