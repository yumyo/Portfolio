import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import tw from 'twin.macro'

const ArchiveTemplate = ({
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { title, template, date, embeddedImagesLocal },
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