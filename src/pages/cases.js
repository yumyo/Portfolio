import React, { useRef, useEffect } from "react"
import { graphql, Link as GatsbyLink } from 'gatsby'
import { gsap } from "gsap"
import tw from 'twin.macro'
import { PageDefault, GhostButton, Lead } from "../components/theme" 

const ListItem = tw.div`
mb-4
`;

const Title = tw.p`
text-4xl font-medium
`;

const List = tw.ul`
list-none
`;

const Tag = tw.li`
text-sm font-medium uppercase inline-block mr-4 text-black-shade-500
`;

const CasesLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const Cases = ({ data, transitionStatus  }) => {
  let nodes = data.allFile.nodes;
  nodes.sort((d1, d2) => new Date(d2.childMdx.frontmatter.date).getTime() - new Date(d1.childMdx.frontmatter.date).getTime());
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

      <div className={`anim-case opacity-0 ${PageDefault}`}>
        {nodes.map(({ childMdx }) => (
        <ListItem key={ childMdx.id }>
          <Title>{ childMdx.frontmatter.title }</Title>
          <p className="mb-2">{ childMdx.frontmatter.description }</p>
          <List>
          {childMdx.frontmatter.tags
            ? childMdx.frontmatter.tags.map((tag, index) => {
                return <Tag key={index}><span className="text-black-shade-500">#</span>{tag}</Tag>;
              })
            : null}
          </List>
          <GatsbyLink 
            className={`mt-4 inline-block ${GhostButton}`}
            partiallyActive={true} 
            activeClassName="active"
            to={`${childMdx.slug}`}>View Case</GatsbyLink>
        </ListItem>
        ))}
      </div>

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