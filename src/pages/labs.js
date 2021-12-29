import React, { useRef, useEffect } from "react"
import { graphql, Link as GatsbyLink } from 'gatsby'
import { gsap } from "gsap"
import tw from 'twin.macro'

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

const LabsLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const Labs = ({ data, transitionStatus }) => {
  let nodes = data.allFile.nodes;
  // console.log('nodes before');
  // console.log(nodes);
  // [0].childMdx.frontmatter.date
  nodes.sort((d1, d2) => new Date(d2.childMdx.frontmatter.date).getTime() - new Date(d1.childMdx.frontmatter.date).getTime());
  // console.log('bananas after');
  // console.log(bananas);
  useEffect(() => {
    console.log('Labs Page', transitionStatus);
  }, [transitionStatus]);
  // console.log(data.allFile.nodes);
  useEffect(() => {
    gsap.to('.anim-labs', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-labs', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-labs', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (

      <LabsLayout className="anim-labs opacity-0">
        {nodes.map(({ childMdx }) => (
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
      </LabsLayout>

  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "labs" } }) {
      nodes {
        childMdx {
          id
          slug
          frontmatter {
            title
            description
            tags
            date(formatString: "YYYY MM DD")
          }
        }
      }
    } 
  }
`

// Works.Layout = Layout

export default Labs;