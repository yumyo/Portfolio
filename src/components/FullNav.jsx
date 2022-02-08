import React from "react"
import { Link } from "gatsby"
// import ContactForm from './ContactForm'
import tw, { styled, css } from "twin.macro"

const MenuLink = tw(Link)`
  text-xl leading-loose font-light
`

const SubLink = tw.p`
   text-sm block ml-4 text-black-shade-400
`

const Navigation = styled.div([
  css`
    /* display:none; */
    opacity: 0;
    visibility: hidden;
    nav {
      li {
        transform: translateX(-10px);
        opacity: 0;
      }
    }
    &.is-active {
      /* display: flex; */
      opacity: 1;
      visibility: visible;
      transition-duration: 500ms;
      nav {
        li {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  `,
])

export default function Fullnav(props) {
  return (
    <Navigation
      className={`2xl:hidden transition-all duration-700 inset-0 absolute w-screen h-screen bg-white dark:bg-black z-40 flex justify-center items-center flex-col  ${props.className}`}
    >
      <div className="flex flex-col items-center w-k7">
        <nav className="md:w-1/2 mb-8 md:mb-0">
          {/* <h2 className="text-xxs leading-none uppercase">Menu</h2> */}
          <ul>
            <li className="transition-all transform-gpu duration-500 delay-500">
              <MenuLink to="/cases" className="" activeClassName="">
                Case Histories
              </MenuLink>
              <SubLink className="">
                A selection of large diverse projects
              </SubLink>
            </li>
            <li className="transition-all transform-gpu duration-500 delay-700">
              <MenuLink to="/works/" className="" activeClassName="">
                Works Archive
              </MenuLink>
              <SubLink className="">
                A non-exhaustive collection of work created for businesses and
                indiduals
              </SubLink>
            </li>
            <li className="transition-all transform-gpu duration-500 delay-[900ms]">
              <MenuLink to="/labs/" className="" activeClassName="">
                Creative Labs
              </MenuLink>
              <SubLink className="">
                Side projects, research and experiments in design and
                development
              </SubLink>
            </li>
            <li className="transition-all transform-gpu duration-500 delay-[1100ms]">
              <MenuLink to="/about/" className="" activeClassName="">
                About
              </MenuLink>
              <SubLink className="">All about me )</SubLink>
            </li>
            <li className="transition-all transform-gpu duration-500 delay-[1300ms]">
              <MenuLink to="/cv/" className="" activeClassName="">
                Curriculum Vitae
              </MenuLink>
              <SubLink className="">The interactive versiob of my CV</SubLink>
            </li>
          </ul>
        </nav>
        {/* <ContactForm className="flex flex-col w-full md:w-1/2"/> */}
      </div>
    </Navigation>
  )
}
