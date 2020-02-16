import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const H2 =styled.h2`
  font-size: 1.3rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H2>Index title</H2>
    <p>Index page text.</p>
  </Layout>
)

export default IndexPage
