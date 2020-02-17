import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const H2 =styled.h2`
  font-size: 1.3rem;
`;

const P = styled.p`
  color: var(--grey);
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H2>Index title</H2>
    <P>Index page text.</P>
  </Layout>
)

export default IndexPage
