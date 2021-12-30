import React, { useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { gsap } from "gsap"
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
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-project', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (
    
      <div className={`anim-project opacity-0 ${PageDefault}`}>
        <h1>{`titles - ${title}`}</h1>
        <h2>{`template - ${template}`}</h2>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>

  );
};

// ProjectTemplate.Layout = Layout

export default ProjectTemplate;