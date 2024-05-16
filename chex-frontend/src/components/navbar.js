import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  width: 100%;
  background-color: #2d9cdb;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* Ensure padding is included in the width */
`;

const Logo = styled.a`
  font-size: 1.5em;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.a`
  background-color: white;
  color: #2d9cdb;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo href="#">Chex</Logo>
      <NavLinks>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <Button href="#get-started">Get Started</Button>
    </NavBarContainer>
  );
};

export default NavBar;
