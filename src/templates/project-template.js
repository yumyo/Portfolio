import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageDefault } from "../components/theme"
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

      <div className={PageDefault}>
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