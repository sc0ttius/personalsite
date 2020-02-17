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

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <H2>Work.</H2>
    <P>Work page text.</P>
  </Layout>
)

export default Work
