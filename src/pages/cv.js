import React, { useRef, useEffect, useContext } from "react"
import { gsap } from "gsap"
import tw from "twin.macro"
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
  const ref = useRef(null)

  return (
    <div className="ml-k2 2xl:ml-k3 w-k7 xl:w-k7 2xl:w-k6 mt-k2v anim-cv opacity-0 flex min-h-screen flex-row flex-wrap items-baseline mb-14">
      <h1 className={`${PageTitle} w-full pl-k25 mb-7`}>Curriculum Vitae</h1>
      <div className={LeftSide}>
        <h2 className={Label}>PROFILE</h2>
      </div>
      <div className={LeftContent}>
        <p className={Lead}>
          Digital Designer and Front-End Developer, passionate about publishing
          and taking part in innovative projects spanning a wide range of media
          and devices. Research, design and development from master-plan to
          small details.
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
        <h2 className={Label}>Skills</h2>
      </div>
      <div className={`${LeftContent} `}>
        <div className="">
          <h3 className={Label}>STRATEGIC</h3>
          <ul className="list-disc pl-4 mb-8">
            <li>Agile methodogies</li>
            <li>Project and Resource Management</li>
            <li>User Experience</li>
            <li>Information Architecture</li>
            <li>Digital Publishing Consultant</li>
          </ul>
        </div>
        <div>
          <h3 className={Label}>VISUAL</h3>
          <ul className="list-disc pl-4 mb-8">
            <li>Web and Mobile Design</li>
            <li>Animation and Interactivity</li>
            <li>User Interface Design</li>
            <li>Digital Media Editing</li>
            <li>Print Design</li>
          </ul>
        </div>
        <div>
          <h3 className={Label}>TECHNICAL</h3>
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
        <p>
          In recent years I have been working exclusively for Raconteur Media
          and alan. agency. I have been mainly developing Here you can see a
          selection of case histories or browse through my works archive.
        </p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>EMPLOYMENT HISTORY</h2>
      </div>
      <div className={LeftContent}>
        <div className="job-history">
          <div className={Job}>
            <h3>Product Designer and Front-end Developer</h3>
            <p className="job__date">2022 - Present</p>
            <p className="job__company">
              alan. agency - London , United Kingdom
            </p>
            <p>...</p>
          </div>
          <div className={Job}>
            <h3>Full Stack Designer</h3>
            <p className="job__date">2016 - Present</p>
            <p className="job__company">
              Raconteur Media Ltd. - London , United Kingdom
            </p>
            <p>
              I have been hired at raconteur to completely redesign the main
              site and created a new one for the b2b branch of the company, the
              custom publishing division. Both products received astonishing
              feedback from readers and clients. I am now designing and
              developing web and mobile products for raconteurs most prestigious
              clients, managing internal and outsourced resources.
            </p>
          </div>
          <div className={Job}>
            <h3>Co-founder and Full-stack Web Designer</h3>
            <p className="job__date">2011 - 2016</p>
            <p className="job__company">
              thePrintLabs Ltd. - London , United Kingdom
            </p>
            <p>
              I co-founded theprintlbas in 2011 to serve the publishing industry
              with a unique approach to making digital publishing agile and
              future-proof. My duties spanned from project management to
              information architecture, web and mobile design, ux/ui, front-end
              development, as well as the management of two in-house developers.
            </p>
          </div>
          <div className={Job}>
            <h3>Web Designer</h3>
            <p className="job__date">2008 - 2011</p>
            <p className="job__company">CDB//Agency srl - Catania, Italy</p>
            <p>
              At the cdb//agency i had the chance to start following complete
              projects from the early concept to the final deliverables. I also
              started my training in server-side setup and management as well as
              in front-end development. This mixture of skills as proven to put
              me in the ideal position of being able to cover the bridge between
              creatives and coders for the company. Furthermore, i had the
              responsibility of remotely managing outsourced resources.
            </p>
          </div>
          <div className={Job}>
            <h3>Freelance Web Designer</h3>
            <p className="job__date">2000 - 2007</p>
            <p className="job__company">Self employed - Rome, Italy</p>
            <p>
              In 2000, i saw the opportunity to specialise in the web industry,
              which at the time was rapidly expanding. From the next years on, i
              concentrated on this field. Since the competitive quality of the
              web drives the need for constant innovation, research and learning
              new trends and technologies on a daily basis became one of my most
              important skills, together with a firm belief in typography and
              usability and a natural aptitude for maths and code.
            </p>
          </div>
          <div className={Job}>
            <h3>Freelance Graphic Designer</h3>
            <p className="job__date">1994 - 1999</p>
            <p className="job__company">Self employed - Catania, Italy</p>
            <p>
              1994 was the formal year when i realised that my passion for
              graphic design so fitted with my natural talents that it should
              have been the job of my life, despite coming from an entirely
              different background.
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
            <a href="https://linkedin.com/in/nico-pernice" alt="">
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
        <h2 className={Label}>EDUCATION HISTORY</h2>
      </div>
      <div className={LeftContent}>
        <ul className="edu-history">
          <li className={Job}>
            <p className="edu__name">Certified ScrumMaster® (CSM®)</p>
            <p className="edu__date">2019</p>
            <p className="edu__place">
              Scrum Alliance, Inc. - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__name">React, Redux, GraphQL</p>
            <p className="edu__date">2018</p>
            <p className="edu__place">
              ReactJS Academy - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__name">User Experience Design</p>
            <p className="edu__date">2016</p>
            <p className="edu__place">
              General Assembly - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__name">ESOL Level 2 qualification </p>
            <p className="edu__date">2015 - 2016</p>
            <p className="edu__place">
              Tower Hamlets College - London, United Kingdom
            </p>
          </li>
          <li className={Job}>
            <p className="edu__name">
              Digital/Multimedia and Information Resources Design
            </p>
            <p className="edu__date">1997 - 1998</p>
            <p className="edu__place">Cormorano Felix - Catania, Italy</p>
          </li>
          <li className={Job}>
            <p className="edu__name">
              Foreign Languages and Literatures (English and Spanish)
            </p>
            <p className="edu__date">1994 - 1996</p>
            <p className="edu__place">University of Catania - Catania, Italy</p>
          </li>
          <li className={Job}>
            <p className="edu__name">PPLH, Helicopter Private Pilot License</p>
            <p className="edu__date">1992 - 1994</p>
            <p className="edu__place">COMAER - Catania, Italy</p>
          </li>
          <li className={Job}>
            <p className="edu__name">
              A Level. Aeronautical Expert Technician Diploma
            </p>
            <p className="edu__date">1988 - 1992</p>
            <p className="edu__place">
              Istituto Tecnico Aeronautico “A. Ferrarin” - Catania, Italy
            </p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>LANGUAGES</h2>
      </div>
      <div className={LeftContent}>
        <ul>
          <li className="lang">
            <p className="lang__name">Italian</p>
            <p className="lang__level">Native speaker</p>
          </li>
          <li className="lang">
            <p className="lang__name">English</p>
            <p className="lang__level">Fluent</p>
          </li>
          <li className="lang">
            <p className="lang__name">Spanish</p>
            <p className="lang__level">Basic to Intermidiate</p>
          </li>
        </ul>
      </div>
      <div className={LeftSide}>
        <h2 className={Label}>PERSONAL INTERESTS</h2>
      </div>
      <div className={LeftContent}>
        <p>
          Typography, Calligraphy, Music, Photography Art, Theater, Cinema,
          Novels and Literary Essays, Travelling, Buddhism, Philosophy, Martial
          Arts, Dance
        </p>
      </div>
    </div>
  )
}

// Cv.Layout = Layout

export default Cv
