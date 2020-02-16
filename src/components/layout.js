/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
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

const Layout = ({ children }) => {
  const title = 'Scott Gustas';
  return (
    <>
      <Header siteTitle={title} />
      <StyledWrapper>
        <main>{children}</main>
      </StyledWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
