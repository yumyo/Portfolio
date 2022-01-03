import React, { useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { gsap } from "gsap"
import ReactHtmlParser from 'react-html-parser'; 
import { PageDefault } from "../components/theme"
import tw from 'twin.macro'

const ProjectTemplate = ({
  transitionStatus,
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { 
        title, 
        template,
        profile,
        description,
        services,
        mission,
        client,
        tags, 
        date, 
        embeddedImagesLocal 
      },
      body
    }
  }
}) => {
  const ProjectLayout = tw.div`
  mx-auto w-6/12 mt-k3v
  `;
  const year =  date.slice(-4);
  useEffect(() => {
    gsap.to('.anim-project', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-project', {
        autoAlpha: 1, 
        duration: .3, 
        delay: 0.6
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-project', { autoAlpha: 0, duration: .3,delay: 0.6 });
    }
  }, [transitionStatus]);
  return (
      // ${PageDefault}
      <div className={`anim-project opacity-0 `}>
        <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-k3v flex flex-row items-baseline">
          <div className="mt-0 w-k25">Project</div>
          <div className=" w-k6">
            <h1 className="leading-none text-2xl">{`${title}`}</h1>
            <p className=" mt-8">{`${mission}`}</p>
          </div>
          <div className="mt-0 w-k25">
            Year
            <p className=" mt-8">{`${year}`}</p>
          </div>
        </div>
        <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-16 flex flex-row items-baseline">
          <div className="mt-0 w-k25">Activities</div>
          <div className=" w-k6">
            <p className="text-base">{`${services}`}</p>
          </div>
        </div>
        <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-16 flex flex-row items-baseline">
          <div className="mt-0 w-k25">Client</div>
          <div className=" w-k6">
            <p className="text-base">{`${client}`}</p>
            <p className="text-base">{ ReactHtmlParser (profile) }</p>
          </div>
        </div>
        <div className="mx-auto w-k7 xs:w-k8 md:w-k5 mt-k3v">
          <MDXProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>

  );
};

// ProjectTemplate.Layout = Layout

export default ProjectTemplate;