import React from "react"
import styled from "styled-components"

import Icons from "./icons"

const StyledFooter = styled.footer`
  background: ${props => props.theme.isDark ? props.theme.inverse : props.theme.primary};
  color: ${props => props.theme.isDark ? props.theme.primary : props.theme.inverse};
`;
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Copyright = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.isDark ? props.theme.primary : props.theme.inverse };
  font-size: 0.8rem;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Wrapper>
        <Copyright>
          &copy; { year } Scott Gustas
        </Copyright>
        <Icons theme='dark' />
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
