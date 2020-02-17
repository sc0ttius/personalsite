import React from "react"
import styled from "styled-components"

import Icons from "./icons"

const StyledHeader = styled.footer`
  background: var(--dark-grey);
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
  color: var(--white);
  font-size: 0.8rem;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledHeader>
      <Wrapper>
        <Copyright>
          &copy; { year } Scott Gustas
        </Copyright>
        <Icons theme='light' />
      </Wrapper>
    </StyledHeader>
  )
}

export default Footer
