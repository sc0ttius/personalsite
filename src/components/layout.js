/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { withTheme } from "styled-components"
import { GlobalStyle } from "../styles/global"

import Header from "./header"
import Footer from "./footer"

const StyledWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: absolute;
  width: 100%;
  background-color: ${props => props.theme.inverse};
  color: ${props => props.theme.primary}
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 2rem 1.45rem;
`;

const Layout = (props) => {
  const { children } = props;
  const { site } = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Header siteTitle={site.siteMetadata.title} />
        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
        <Footer />
      </StyledWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default withTheme(Layout)
