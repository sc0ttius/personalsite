import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Icons from "./icons"

const StyledHeader = styled.header`
  background: var(--white);
  marginBottom: 1.45rem;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
`;
const StyledLink = styled(Link)`
  color: var(--dark-grey);
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <Icons />
    </Wrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
