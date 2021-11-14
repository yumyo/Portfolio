import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import tw from 'twin.macro'
import Layout from "../components/Layout"

const ArchiveTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, template },
      body
    }
  }
}) => {
  const ItemLayout = tw.div`
    mx-auto w-6/12 mt-k3v
  `;
  return (

      <ItemLayout>
        <h1>{`title - ${title}`}</h1>
        <h2>{`template - ${template}`}</h2>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </ItemLayout>

  );
};

// ArchiveTemplate.Layout = Layout

export default ArchiveTemplate;