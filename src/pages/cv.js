import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Contact from "../templates/contact-form-template.js"
// import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
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


  return (
    <div className="page-trans m-auto mb-k3v mt-k5v flex min-h-screen w-k8 flex-row flex-wrap items-baseline xl:ml-k2 xl:w-k7 2xl:ml-k3 2xl:w-k5">
      <div className="mb-8 w-full">
        <div className={LeftSide}></div>

        <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
          <h1 className={`${PageTitle} -mt-16 mb-2 font-normal sm:font-extralight`}>
            Curriculum Vitae
          </h1>
        </div>
      </div>
      <div className={LeftSide}>
        {/* <h2 className={Label}
        data-sal="fade" 
  data-sal-duration={900}>PROFILE</h2> */}
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <p className={` ${Lead} 2xl:pr-k25`}>
        I’m a Digital Product Designer and Front-End Developer, passionate about creating innovative projects that span a wide range of media, platforms, <br/>and devices.
        </p>
        <p className="2xl:pr-k25">
        From crafting strategic master plans to refining the finer details, I have experience and enjoy contributing across all phases of research, design, and development.
        </p>
      </div>
      <div className={LeftSide}>
        <h2 className={Label} data-sal="fade" data-sal-duration={900}>
          Location
        </h2>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <p>I am currently based in London, UK.</p>
      </div>
      <div className={LeftSide}>
        <h2
          data-sal="fade"
          data-sal-duration={900}
          className={Label}
        >
          Strategic{' '} 
          <br className="hidden md:block" />Skills
        </h2>
      </div>
      <div
        className={`${LeftContent} `}
        data-sal="fade"
        data-sal-duration={900}
      >
        <div className="">
          <ul className="mb-6 list-disc pl-4 md:pl-0 md:list-none fluid-text-base">
            <li>Information Architecture</li>
            <li>User Experience</li>
            <li>Agile methodologies</li>
            <li>Project and Resource Management</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label} data-sal="fade" data-sal-duration={900}>
          Design{' '} 
          <br className="hidden md:block" />Skills
        </h2>
      </div>
      <div
        className={`${LeftContent} `}
        data-sal="fade"
        data-sal-duration={900}
      >
        <div className="">
          <ul className="mb-6 list-disc pl-4 md:pl-0 md:list-none fluid-text-base">
            <li>Web and Mobile Design</li>
            <li>User Interface Design</li>
            <li>Animation and Interactivity</li>
            <li>3D and Digital Art</li>
          </ul>
        </div>
      </div>
      <div className={LeftSide}>
        <h2 className={Label} data-sal="fade" data-sal-duration={900}>
          Code{' '} 
          <br className="hidden md:block" />Skills
        </h2>
      </div>
      <div
        className={`${LeftContent} `}
        data-sal="fade"
        data-sal-duration={900}
      >
        <div className="">
          <ul className="mb-6 list-disc pl-4 md:pl-0 md:list-none fluid-text-base">
            <li>Javascript ES6, React.js</li>
            <li>CSS, SASS, PostCSS, Styled Components, NPM, Yarn</li>
            <li>Accessibility and HTML5 Semantics</li>
            <li>DevOps, WordPress API and PHP templating, Git</li>
            {/* <li>Dev Ops on LAMP, LEMP, MERN stacks</li> */}
          </ul>
        </div>
      </div>
      <div className="heading mb-16 mt-16 block w-full ">
        <h2
          className={`${Label} fluid-text-xl`}
          data-sal="fade"
          data-sal-duration={900}
        >
          Employment History
        </h2>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          Jan 2024 ~ Present
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Lead Design Technologist</h3>
          <p className="job__company">
            DMI, Digital Management, LLC - London , United Kingdom
          </p>
          <p>
            Strategic direction of our design system governance, fostering best
            practices, and orchestrating seamless design-to-development
            handoffs. Figma plugin development and Three.js implementations to
            push the boundaries of interactive digital experiences. R&D efforts
            to integrate AI into customer experiences.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2022 ~ 2023
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Senior Design Technologist</h3>
          <p className="job__company">
            DMI, Digital Management, LLC - London , United Kingdom
          </p>
          <p>
            Designing and developing comprehensive design systems with a focus
            on inclusive and human-centered design principles. Exploring web 3D
            technologies and integrating AI into our practice. Ensuring all
            designs meet high standards of accessibility, creating digital
            experiences usable by everyone.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2020 ~ 2022
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Digital Product Engineer</h3>
          <p className="job__company">alan. agency - London , United Kingdom</p>
          <p>
            Applying modern software development processes to build and scale
            marketer tools, design infographics, create long-form scrollytelling
            content, develop microsites, and architect solutions for data
            visualization and reporting.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2016 ~ 2019
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <div className={Job}>
          <h3 className="fluid-text-lg">Full Stack Development and Design</h3>
          <p className="job__company">
            Raconteur Media Ltd. - London , United Kingdom
          </p>
          <p>
            Led raconteur.net’s redesign, doubling views to 400k and improving client interaction. Designed and developed business-owned and client sites, including multilingual solutions. Trained design team in advanced web technologies and animated content creation, significantly enhancing our B2B digital offerings.
          </p>
        </div>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2011 ~ 2016
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <div className={Job}>
          <h3 className="fluid-text-lg">
            Co-founder, Full-stack Development and Design
          </h3>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2008 ~ 2011
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2000 ~ 2007
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          1994 ~ 1999
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
      <div className="heading mb-16 mt-16 block w-full ">
        <h2
          className={`${Label} fluid-text-xl`}
          data-sal="fade"
          data-sal-duration={900}
        >
          Certifications
        </h2>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2019
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2018
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2016
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          1997 ~ 1998
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          1992 ~ 1994
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
        <ul className="edu-history">
          <li className={Job}>
            <h3 className="fluid-text-lg">
              PPLH, Helicopter Private Pilot License
            </h3>
            <p className="edu__place">COMAER - Catania, Italy</p>
          </li>
        </ul>
      </div>
      <div className="heading mb-16 mt-16 block w-full ">
        <h2
          className={`${Label} fluid-text-xl`}
          data-sal="fade"
          data-sal-duration={900}
        >
          Education History
        </h2>
      </div>
      <div className={LeftSide}>
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          2015 ~ 2016
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          1994 ~ 1996
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
        <p className={Label} data-sal="fade" data-sal-duration={900}>
          1988 ~ 1992
        </p>
      </div>
      <div className={LeftContent} data-sal="fade" data-sal-duration={900}>
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
      <div className="heading mb-16 mt-16 block w-full ">
        <h2
          className={`${Label} fluid-text-xl`}
          data-sal="fade"
          data-sal-duration={900}
        >
          Languages
        </h2>
      </div>
      <div className="mb-k4 flex w-full flex-row pl-k25"
      data-sal="fade" 
      data-sal-duration={900}>
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
        <h2 className={Label}
          data-sal="fade" 
  data-sal-duration={900}></h2>
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
      <div className={`mx-auto mt-k2 w-full sm:mb-20 lg:mb-0  `}
      data-sal="fade" 
      data-sal-duration={900}>
        <Contact />
      </div>
    </div>
  )
}

export default Cv
