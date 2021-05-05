import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from "../components/Layout"

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
      <h1>{`title - ${title}`}</h1>
      <h2>{`variant - ${template}`}</h2>
      <ul>
        tags
        {tags
          ? tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })
          : null}
      </ul>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;