/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "../styles/colors.css"
import "../styles/base.css"

const StyledWrapper = styled.div`
  margin: 0 auto;
  maxWidth: 1440px;
  padding: 0 2rem 1.45rem;
`;

const Layout = ({ children, path }) => {
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
      <Header siteTitle={site.siteMetadata.title} path={path} />
      <StyledWrapper>
        <main>{children}</main>
      </StyledWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string
}

export default Layout
