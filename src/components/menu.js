import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

const Menu = ({ path }) => {
  const getMenuItems = () => {
    const menuItems = ['home', 'work'];
    const menuArray = menuItems.map( (item, i) => {
      let style = {};
      const pathname = ( item === 'home' ) ? '/' : `/${ item }`;
      if ( path === pathname ) {
        style = {fontWeight: '600'};
      }
      return <StyledLink key={i} to={pathname} style={style}>{item}</StyledLink>
    } )
    return menuArray
  }

  return (
    <StyledNav>
      { getMenuItems() }
    </StyledNav>
  )
}

Menu.propTypes = {
  path: PropTypes.string
}

export default Menu
