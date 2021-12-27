import React from "react"
// import TransitionLink from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import tw, { styled, css } from "twin.macro"

// const MenuLink = tw(TransitionLink)`
// leading-none font-medium text-lg
// `

export default function Fullnav( props ) {

  return (
    <div className={`2xl:hidden inset-0 absolute w-screen  h-screen bg-black z-40 flex justify-center items-center ${props.className}}`}>
      <nav>
        <ul>
          <li>
            <Link
              to="/cases"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Case Histories
            </Link>
          </li>
          <li>
            <Link
              to="/works/"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/cv/"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/archive/"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Archive
            </Link>
          </li>
          <li>
            <Link
              className="leading-none font-medium text-base"
              to="/style-guide/"
              className="nav-link hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Style Guide
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
