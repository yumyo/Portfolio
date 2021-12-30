import React, { useRef, useEffect } from "react"
import { graphql, Link as GatsbyLink } from 'gatsby'
import { gsap } from "gsap"
import tw from 'twin.macro'
import { PageDefault, Lead } from "../components/theme" 

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

const CasesLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const Cases = ({ data, transitionStatus  }) => {
  let nodes = data.allFile.nodes;
  nodes.sort((d1, d2) => new Date(d2.childMdx.frontmatter.date).getTime() - new Date(d1.childMdx.frontmatter.date).getTime());
  useEffect(() => {
    console.log('Cases Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-case', {
      autoAlpha: 1,
      duration: .6,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-case', {
        autoAlpha: 1, 
        duration: .6, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-case', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (

      <CasesLayout className={`anim-case opacity-0 ${PageDefault}`}>
        {nodes.map(({ childMdx }) => (
        <ListItem key={ childMdx.id }>
          <Title>{ childMdx.frontmatter.title }</Title>
          <p>{ childMdx.frontmatter.description }</p>
          <GatsbyLink 
            partiallyActive={true} 
            activeClassName="active"
            to={`${childMdx.slug}`}>Read More</GatsbyLink>
          <List>
          {childMdx.frontmatter.tags
            ? childMdx.frontmatter.tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>;
              })
            : null}
        </List>
        </ListItem>
        ))}
      </CasesLayout>

  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "cases" } }) {
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

// Cases.Layout = Layout

export default Cases;