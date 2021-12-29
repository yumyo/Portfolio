import React from "react"
// import TransitionLink from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import ContactForm from './ContactForm'
import tw, { styled, css } from "twin.macro"

const MenuLink = tw(Link)`
  text-lg leading-loose
`

const SubLink = tw.p`
  italic text-xs block 
`

export default function Fullnav( props ) {

  return (
    <div className={`2xl:hidden inset-0 absolute w-screen h-screen bg-white dark:bg-black z-40 flex justify-center items-center flex-col  ${props.className}}`}>
      <div className="flex flex-col md:flex-row gap-k1 w-k7 xs:w-k8">
        <nav className="md:w-1/2 mb-8 md:mb-0">
          {/* <h2 className="text-xxs leading-none uppercase">Menu</h2> */}
          <ul>
            <li>
              <MenuLink
                to="/cases"
                className=""
                activeClassName=""
              >
                Case Histories
              </MenuLink>
              <SubLink className="">A selection of large diverse projects</SubLink>
            </li>
            <li>
              <MenuLink
                to="/works/"
                className=""
                activeClassName=""
              >
                Works Archive
              </MenuLink>
              <SubLink className="">A non-exhaustive collection of work created for businesses and indiduals</SubLink>
            </li>
            <li>
              <MenuLink
                to="/labs/"
                className=""
                activeClassName=""
              >
                Creative Labs
              </MenuLink>
              <SubLink className="">Side projects, research and experiments in design and development</SubLink>
            </li>
            <li>
              <MenuLink
                to="/about/"
                className=""
                activeClassName=""
              >
                About
              </MenuLink>
              <SubLink className="">All about me )</SubLink>
            </li>
            <li>
              <MenuLink
                to="/cv/"
                className=""
                activeClassName=""
              >
                Curriculum Vitae
              </MenuLink>
              <SubLink className="">The interactive versiob of my CV</SubLink>
            </li>
            {/* <li>
              <MenuLink
                to="/archive/"
                className=""
                activeClassName=""
              >
                Social Signals
              </MenuLink>
            </li>
            <li>
              <MenuLink
                className="leading-none font-medium text-base"
                to="/style-guide/"
                className=""
                activeClassName=""
              >
                Style Guide
              </MenuLink>
            </li> */}
          </ul>
        </nav>
        <ContactForm className="flex flex-col w-full md:w-1/2"/>
      </div>
    </div>
  )
}
