import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import tw from 'twin.macro'

const ProjectTemplate = ({
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { title, template, date, embeddedImagesLocal },
      body
    }
  }
}) => {
  const ProjectLayout = tw.div`
  mx-auto w-6/12 mt-k3v
`;
  return (

      <ProjectLayout>
        <h1>{`titles - ${title}`}</h1>
        <h2>{`template - ${template}`}</h2>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </ProjectLayout>

  );
};

// ProjectTemplate.Layout = Layout

export default ProjectTemplate;