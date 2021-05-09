import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import { Link } from "gatsby"
import tw, { styled, css } from 'twin.macro'

export default function Home() {

const Title = tw.h2`
  text-3xl
`;

const SubTitle = tw.p`
  text-lg
`;

  return (
  <Layout>
      <Title>
        Hi, I am Nicola Giulia Pernice <br /> a Creative Developer and Product Designer, currently based in London, UK
      </Title>
      <SubTitle>Here you can scroll through my <Link to="/cases">case-histories</Link>, know more about me and get in touch to discuss your awesome idea! </SubTitle>
  </Layout>
  )
}
