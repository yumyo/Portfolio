import React from "react"
import tw from 'twin.macro'
import Layout from "../../components/Layout"

const SmallCenter = tw.div`
w-k5 aspect-w-16 aspect-h-9 mx-auto bg-green-500
`;

const SGLayout = tw.div`mx-auto w-6/12 mt-k2v`;

const StyleGuide = () => {
  return (
    <SGLayout>
      <h1>Style Guide</h1>
      <SmallCenter></SmallCenter>
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
    </SGLayout>
  )
}

// StyleGuide.Layout = Layout

export default StyleGuide;