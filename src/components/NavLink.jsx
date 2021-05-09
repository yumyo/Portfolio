import React from "react"
import { Link as GatsbyLink } from "gatsby"
import tw, { styled, css } from 'twin.macro'

const Ctrl = styled(GatsbyLink)([
  css`
  &.active {
    color: red;
  }
    ${tw`transform leading-none text-base font-medium`}
  `
]);

const NavLink = ({ children, ...props }) => (
  <Ctrl className="nav-link" activeClassName='active' {...props}>
    {children}
  </Ctrl>
)

export default NavLink