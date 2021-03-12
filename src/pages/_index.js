import * as React from "react"

import Layout from "../components/layout"
import Navigation from '../components/nav'
import SEO from "../components/seo"
import SectionRenderer from '../components/sections/_renderer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionRenderer sections={[
      {
        __typename: "One"
      },
      {
        __typename: "Two",
      }
    ]}/>
    <Navigation/>
  </Layout>
)

export default IndexPage
