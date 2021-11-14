import React from "react"
import { graphql, Link as GatsbyLink } from 'gatsby'
import tw from 'twin.macro'
import Layout from "../components/Layout"

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

const WorksLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const Works = ({ data }) => {
  console.log(data.allFile.nodes);
  return (

      <WorksLayout>
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
      </WorksLayout>

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

// Works.Layout = Layout

export default Works;