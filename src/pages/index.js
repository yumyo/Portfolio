import React from "react"

import { Link } from "gatsby"
import tw from 'twin.macro'

import Layout from "../components/Layout"

const IndexPage = () => {
// { data, path }
const Title = tw.h2`
  text-3xl
`;

const SubTitle = tw.p`
  text-lg
`;

const Intro = tw.div`
  mx-auto w-6/12 mt-k3v
`;

  return (
      <Intro>
        <Title>
          Hi, I am Nicola Giulia Pernice <br /> a Creative Developer and Product Designer.
        </Title>
        <SubTitle>Here you can scroll through my <Link to="/cases">case-histories</Link>, know more <Link to="/about">about me</Link> and get in touch to discuss your awesome idea! </SubTitle>
      </Intro>
  )
}

// IndexPage.Layout = Layout

export default IndexPage
