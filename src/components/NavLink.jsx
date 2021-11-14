import React from "react"
import { Link as GatsbyLink } from "gatsby"
import tw, { styled, css } from 'twin.macro'

const Ctrl = styled(GatsbyLink)([
  css`
  &.active {
    ${tw`text-purple-900`}
  }
    
  `
]);

const NavLink = ({ children, ...props }) => (
  <Ctrl className="nav-link leading-none font-medium transition-colors text-base duration-500 hover:text-purple-900" activeClassName='active' {...props}>
    {children}
  </Ctrl>
)

export default NavLink