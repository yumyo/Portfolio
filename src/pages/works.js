import React from "react"
import Layout from "../components/Layout"
import { graphql, Link as GatsbyLink } from 'gatsby'
import tw, { styled, css } from 'twin.macro'

const ListItem = tw.div`
mb-4
`;

const Title = tw.p`
text-3xl font-medium
`;

const List = tw.ul`
list-none
`;

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4
`;



export default function Works({ data }) {
  console.log(data.allFile.nodes);
  return (
    <Layout>
      {data.allFile.nodes.map(({ childMdx }) => (
      <ListItem key={ childMdx.id }>
        <Title>{ childMdx.frontmatter.title }</Title>
        <p>{ childMdx.frontmatter.description }</p>
        <GatsbyLink to={`${childMdx.slug}`}>Read More</GatsbyLink>
        <List>
        {childMdx.frontmatter.tags
          ? childMdx.frontmatter.tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })
          : null}
      </List>
      </ListItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            title
            description
            tags
          }
        }
      }
    } 
  }
`