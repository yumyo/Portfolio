import React from "react"
import { Link as GatsbyLink } from "gatsby"
import tw, { styled, css } from 'twin.macro'

const Ctrl = styled(GatsbyLink)([
  css`
  &.active {
    color: red;
  }
    ${tw`transform leading-none text-sm font-medium`}
  `
]);

const NavLink = ({ children, ...props }) => (
  <Ctrl activeClassName='active' {...props}>
    {children}
  </Ctrl>
)

export default NavLink