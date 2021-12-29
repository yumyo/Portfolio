import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import tw from 'twin.macro'

const List = tw.ul`
list-none
`;

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`;

const ItemLayout = tw.div`
mx-auto w-6/12 mt-k3v
`;

const LabsTemplate = ({
  data: {
    mdx: {
      excerpt,
      embeddedImagesRemote,
      frontmatter: { title, template, tags, date, embeddedImagesLocal },
      body
    }
  }
}) => {
  return (
      <ItemLayout>
        <h1>{`${title}`}</h1>
        <h2>{`variant: ${template}`}</h2>
        <List>
          {tags
            ? tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>;
              })
            : null}
        </List>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </ItemLayout>
  );
};

// PostTemplate.Layout = Layout

export default LabsTemplate;