import * as React from "react"

import Layout from "../components/layout"
import Navigation from '../components/nav'
import SEO from "../components/seo"
import SectionRenderer from '../components/sections/_renderer'

const Page = ({ pageContext: { title, sections }}) => (
  <Layout>
    <SEO title={title} />
    <SectionRenderer sections={sections}/>
    <Navigation/>
  </Layout>
)

export default Page
