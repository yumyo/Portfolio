import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
// import ContactForm from './ContactForm'
import tw, { styled, css } from "twin.macro"
import { gsap, Power4, Power2 } from "gsap"

const MenuLink = tw(Link)`
  text-xl leading-loose font-light
`

const SubLink = tw.p`
   text-sm block ml-4 text-black-shade-400
`

const Navigation = styled.div([
  css`
    opacity: 0;
    visibility: hidden;
    nav {
      li {
        transform: translateX(-10px);
        opacity: 0;
      }
    }
  `,
])

export default function Fullnav(props) {
  const menuTL = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const m = gsap.utils.selector(navRef)
    // console.log("props.isActive")
    // console.log(props.isActive)
    // console.log("navRef")
    // console.log(navRef)
    menuTL.current = gsap
      .timeline()
      .to(navRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: Power4.easeInOut,
      })
      .to(m("li"), {
        autoAlpha: 1,
        x: 0,
        duration: 0.3,
        ease: Power4.easeInOut,
        stagger: {
          each: 0.1,
          from: 0,
          ease: Power2.inOut,
        },
      })
      .reverse()
    return () => {
      menuTL.current.kill()
    }
  }, [])

  useEffect(() => {
    menuTL.current.reversed(!props.isActive)
  }, [props.isActive])

  return (
    <Navigation
      ref={navRef}
      className={`2xl:hidden opacity-0 transition-all duration-700 inset-0 absolute w-screen h-screen bg-white dark:bg-black z-40 flex justify-center items-center flex-col  ${props.className}`}
    >
      <div className="flex flex-col items-center w-k7">
        <nav className="md:w-1/2 mb-8 md:mb-0">
          {/* <h2 className="text-xxs leading-none uppercase">Menu</h2> */}
          <ul>
            <li className="transform ">
              <MenuLink to="/cases" className="" activeClassName="">
                Case Histories
              </MenuLink>
              <SubLink className="">
                A selection of large diverse projects
              </SubLink>
            </li>
            <li className="transform ">
              <MenuLink to="/works/" className="" activeClassName="">
                Works Archive
              </MenuLink>
              <SubLink className="">
                A non-exhaustive collection of work created for businesses and
                indiduals
              </SubLink>
            </li>
            <li className="transform ">
              <MenuLink to="/labs/" className="" activeClassName="">
                Creative Labs
              </MenuLink>
              <SubLink className="">
                Side projects, research and experiments in design and
                development
              </SubLink>
            </li>
            <li className="transform ">
              <MenuLink to="/about/" className="" activeClassName="">
                About
              </MenuLink>
              <SubLink className="">All about me )</SubLink>
            </li>
            <li className="transform ">
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
