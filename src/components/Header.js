import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.ul`
  display: flex;
  list-style: none;

  a {
    color: #333333;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.4em;
    padding: 1em 1em;
  }
`;

const LiItems = styled.li`
  &:nth-child(1) {
    margin-right: auto;
  }

  &:nth-child(3) {
    padding-right: 0;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <Nav>
      <LiItems>
        <Link to="/">Home</Link>
      </LiItems>
      <LiItems>
        <Link to="/#projects">Work</Link>
      </LiItems>
      <LiItems>
        <Link to="/photos/">Photography</Link>
      </LiItems>
      <LiItems>
        <Link to="/contact/">Contact</Link>
      </LiItems>
    </Nav>
  );
};

export default Header;
