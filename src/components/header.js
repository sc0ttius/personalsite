import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { withTheme } from "styled-components"

import Menu from "./menu"
import Icons from "./icons"
import Toggle from "./toggle"

const StyledHeader = styled.header`
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
  text-decoration: none;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = (props) => {
  const { siteTitle, theme } = props;
  return (
    <StyledHeader>
      <Wrapper>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <RightHeader>
          <Menu />
          <Toggle />
          <Icons theme={theme.mode} />
        </RightHeader>
      </Wrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)
