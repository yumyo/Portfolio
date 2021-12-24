import React, { useRef, useEffect, useContext } from "react"
import { gsap } from "gsap"
import tw from 'twin.macro'


const CVLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const Cv = ({transitionStatus}) => {

  useEffect(() => {
    // console.log('CV Page', transitionStatus);
    
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-cv', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-cv', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-cv', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  const ref = useRef(null);

  return (
      <CVLayout className="anim-cv opacity-0">
        <h1>CV</h1>
        <h2>PROFILE</h2>
        <p>Digital Designer and Front-End Developer, passionate about publishing and taking part in innovative projects spanning a wide range of media and devices. Research, design and development from master-plan to small details.</p>
        <h2>Location and Contacts</h2>
        <ul>
          <li>London, E13FD, UK</li>
          <li>(+44)7949026708</li>
          <li>k@w2b.it</li>
        </ul>
        <h2>STRATEGIC SKILLS</h2>
        <ul>
          <li>User Experience</li>
          <li>Project and Resource Management</li>
          <li>Information Architecture</li>
          <li>Usability and HTML5 Semantics</li>
          <li>Digital Publishing</li> 
        </ul>
        <h2>VISUAL SKILLS</h2>
        <ul>
          <li>Web and Mobile Design</li>
          <li>Typography</li>
          <li>User Interface Design</li>
          <li>Digital Media Editing</li>
          <li>Print Design</li> 
        </ul>   
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li>Javascript ES6, React.js, Vue.js</li>
          <li>HTML5, SASS, CSS, PostCSS</li>
          <li>Composer, Webpack, Node, Gulp, Grunt, Bower, Yarn</li>
          <li>Headless CMSs, Static Generators</li>
          <li>Wordpress API and PHP templating, Twig, Mustache</li> 
          <li>Git and CLI</li> 
          <li>Docker, Vagrant, LAMP and LEMP stacks</li> 
        </ul>
        <h2>TOOLS</h2>
        <ul>
          <li>Figma & Sketch App</li>
          <li>InVision, Flinto, Rumult Hype, Framer X</li>
          <li>Adobe Photoshop, Illustrator, InDesign</li>
          <li>Adobe Premiere, Adobe Media Encoder, Apple QuickTime</li>
          <li>Digital Publishing</li> 
        </ul>
        <h2>RECENT PROJECTS</h2>
        <ul>
          <li>Litera</li>
          <li>Award</li>
          <li>Schroders</li>
          <li>Raconteur</li>
          <li>il manifesto global</li> 
        </ul>
        <h2>EMPLOYMENT HISTORY</h2>
        <div className="job-history">
          <div className="job">
            <h3>Full Stack Designer</h3>
            <p className="job__date">2016 - Present</p>
            <p className="job__company">Raconteur Media Ltd. - London , United Kingdom</p>
            <p>I have been hired at raconteur to completely redesign the main site and created a new one for the b2b branch of the company, the custom publishing division. Both products received astonishing feedback from readers and clients. I am now designing and developing web and mobile products for raconteurs most prestigious clients, managing internal and outsourced resources.</p>
          </div>
          <div className="job">
            <h3>Co-founder and Full-stack Web Designer</h3>
            <p className="job__date">2011 - 2016</p>
            <p className="job__company">thePrintLabs Ltd. - London , United Kingdom</p>
            <p>I co-founded theprintlbas in 2011 to serve the publishing industry with a unique approach to making digital publishing agile and future-proof. My duties spanned from project management to information architecture, web and mobile design, ux/ui, front-end development, as well as the management of two in-house developers.</p>
          </div>
          <div className="job">
            <h3>Web Designer</h3>
            <p className="job__date">2008 - 2011</p>
            <p className="job__company">CDB//Agency srl - Catania, Italy</p>
            <p>At the cdb//agency i had the chance to start following complete projects from the early concept to the final deliverables. I also started my training in server-side setup and management as well as in front-end development. This mixture of skills as proven to put me in the ideal position of being able to cover the bridge between creatives and coders for the company. Furthermore, i had the responsibility of remotely managing outsourced resources.</p>
          </div>
          <div className="job">
            <h3>Freelance Web Designer</h3>
            <p className="job__date">2000 - 2007</p>
            <p className="job__company">Self employed - Rome, Italy</p>
            <p>In 2000, i saw the opportunity to specialise in the web industry, which at the time was rapidly expanding. From the next years on, i concentrated on this field. Since the competitive quality of the web drives the need for constant innovation, research and learning new trends and technologies on a daily basis became one of my most important skills, together with a firm belief in typography and usability and a natural aptitude for maths and code.</p>
          </div>
          <div className="job">
            <h3>Freelance Graphic Designer</h3>
            <p className="job__date">1994 - 1999</p>
            <p className="job__company">Self employed - Catania, Italy</p>
            <p>1994 was the formal year when i realised that my passion for graphic design so fitted with my natural talents that it should have been the job of my life, despite coming from an entirely different background.</p>
          </div>
        </div>
        <h2>SOCIAL PROFILES</h2>
        <ul>
          <li>Behance: behance.net/kairos</li>
          <li>Twitter: twitter.com/kdsign</li>
          <li>LinkedIn: linkedin.com/in/nico-pernice</li>
          <li>GitHub: github.com/yumyo</li>
          <li>StackOverflow: https://bit.ly/2GHY4We</li> 
        </ul>
        <h2>EDUCATION HISTORY</h2>
        <ul className="edu-history">
          <li className="edu">
            <p className="edu__name">React, Redux, GraphQL</p>
            <p className="edu__date">2018</p>
            <p className="edu__place">ReactJS Academy - London, United Kingdom</p>
          </li>
          <li className="edu">
            <p className="edu__name">User Experience Design</p>
            <p className="edu__date">2016</p>
            <p className="edu__place">General Assembly - London, United Kingdom</p>
          </li>
          <li className="edu">
            <p className="edu__name">ESOL Level 2 qualification </p>
            <p className="edu__date">2015 - 2016</p>
            <p className="edu__place">Tower Hamlets College - London, United Kingdom</p>
          </li>
          <li className="edu">
            <p className="edu__name">Digital/Multimedia and Information Resources Design</p>
            <p className="edu__date">1997 - 1998</p>
            <p className="edu__place">Cormorano Felix - Catania, Italy</p>
          </li>
          <li className="edu">
            <p className="edu__name">Foreign Languages and Literatures (English and Spanish)</p>
            <p className="edu__date">1994 - 1996</p>
            <p className="edu__place">University of Catania - Catania, Italy</p>
          </li>
          <li className="edu">
            <p className="edu__name">PPLH, Helicopter Private Pilot License</p>
            <p className="edu__date">1992 - 1994</p>
            <p className="edu__place">COMAER - Catania, Italy</p>
          </li>
          <li className="edu">
            <p className="edu__name">A Level. Aeronautical Expert Technician Diploma</p>
            <p className="edu__date">1988 - 1992</p>
            <p className="edu__place">Istituto Tecnico Aeronautico “A. Ferrarin” - Catania, Italy</p>
          </li>
        </ul>
        <h2>LANGUAGES</h2>
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
        <h2>PERSONAL INTERESTS</h2>
        <p>Typography, Calligraphy, Music, Photography Art, Theater, Cinema, Novels and Literary Essays, Travelling, Buddhism, Philosophy, Martial Arts, Dance</p>
      </CVLayout>
  )
}

// Cv.Layout = Layout

export default Cv;