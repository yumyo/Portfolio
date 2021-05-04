import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
// import { Link as GatsbyLink } from "gatsby"
// import tw, { styled, css } from 'twin.macro'

export default function Home() {

  return (
  <Layout>
      <Header headerText="About Giulia" />
      <p>Hello Giulia</p>
      <pre>{`
      spacing: {
        'k0' : '3.125%',
        'k1' : '6.25%',
        'k2' : '12.5%',
        'k3' : '25%',
        'k4' : '33.3333%',
        'k5' : '50%',
        'k6' : '66.6666%',
        'k7' : '75%',
        'k8' : '87.5%',
        'k9' : '93.75%',
        'k10' : '96.875%',
        'k100' : '100%',
      }`}
      </pre>
  </Layout>
  )
}
