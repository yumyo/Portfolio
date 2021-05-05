import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from "../components/Layout"

const ProjectTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, template },
      body
    }
  }
}) => {
  return (
    <Layout>
      <h1>{`title - ${title}`}</h1>
      <h2>{`template - ${template}`}</h2>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default ProjectTemplate;