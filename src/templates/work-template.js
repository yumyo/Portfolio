import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from "../components/Layout"
import tw, { styled, css } from 'twin.macro'

const List = tw.ul`
list-none
`;

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`;

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, template, tags },
      body
    }
  }
}) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default PostTemplate;