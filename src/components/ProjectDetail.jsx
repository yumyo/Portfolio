/**
 * @name ProjectDetail Component
 * @param {string} label
 * @param {string} content
 */

import React from "react"
import ReactHtmlParser from "react-html-parser"
// import {
//   Project_Detail,
//   Project_Detail_Label,
//   Project_Detail_Content,
// } from "../components/theme"

const ProjectDetail = (props) => {
  return (
    <div {...props} className={`mx-auto w-k100 mt-k0v project-detail`}>
      {props.label && <div className={`mt-0 w-k100`}>{props.label}</div>}
      <div className={`w-k100`}>
        <div className="text-base mt-8">
          {ReactHtmlParser(props.content)}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
