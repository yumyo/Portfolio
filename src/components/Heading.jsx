/**
 * @name Heading Component
 * @param {string} label
 * @param {string} content
 */

import React from "react"

const Heading =  ({ level, children, ...props }) => {
  // Ensure the level is within the h1-h6 range h
  const Tag = `h${level}`
  return <Tag {...props}>{children}</Tag>
}

export default Heading
