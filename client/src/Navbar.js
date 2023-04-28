import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import home from './imgs/nav/home.png';
import clock from './imgs/nav/clock.png';
import hammer from './imgs/nav/hammer.png';
import gradcap from './imgs/nav/mortarboard.png';
import gear from './imgs/nav/settings.png';
import brain from './imgs/nav/brain.png';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  background-color: #000;
  box-shadow: 0 -8px 16px rgba(255, 255, 255, 0.25);
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const NavLogo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFF;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-inline-start: 0;
  width: 100%;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-size: 1.25rem;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NavIcon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  filter: invert(1);
`;

function Navbar() {
    // <NavLogo className="font-del-hand" to="/">Travacka</NavLogo>
  return (
    <Nav>
      <NavLinks>
        <NavLink to="/"><NavIcon src={home} />Home</NavLink>
        <NavLink to="/timeline"><NavIcon src={clock} />Timeline</NavLink>
        <NavLink to="/education"><NavIcon src={gradcap} />Education</NavLink>
        <NavLink to="/projects"><NavIcon src={gear} />Projects</NavLink>
        <NavLink to="/skills"><NavIcon src={hammer} />Skills</NavLink>
        <NavLink to="/interests"><NavIcon src={brain} />Interests</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
