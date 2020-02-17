import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Location } from "@reach/router"

const StyledNav = styled.nav`
  display: flex;
  align-items: middle;
  justify-content: right;
`;

const StyledLink = styled(Link)`
  color: var(--dark-grey);
  text-decoration: none;
  margin-right: 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const getMenuItems = (location) => {
  const menuItems = ['home', 'work'];
  const menuArray = menuItems.map( (item, i) => {
    let style = {};
    const pathname = ( item === 'home' ) ? '/' : `/${ item }/`;
    if ( location.pathname === pathname ) {
      style = {fontWeight: '600'};
    }
    return <StyledLink key={i} to={pathname} style={style}>{item}</StyledLink>
  } )
  return menuArray
}

const Menu = () => {
  return (
    <Location>
       {({ location }) => (
        <StyledNav>
          { getMenuItems(location) }
        </StyledNav>
       )}
    </Location>
  )
}

export default Menu
