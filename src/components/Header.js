import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

const NavBar = styled.header`
  & > a {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.4em;
  }
  width: 100%;
  display: flex;
  margin-bottom: 2em;
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  padding-inline-start: 0px;
  li:nth-child(3) {
    padding-right: 0px;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5em;
    padding: 0.5em 0.5em;
  }

  a:hover {
    background-color: #93def7;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  @media (max-width: 46rem) {
    a {
      color: #000;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9em;
      padding: 6px;
    }

    a:focus {
      background-color: #93def7;
    }

    li {
      padding: 4px;
    }

    ul {
      padding-inline-start: 0px;
    }
  }
`;

const LiItems = styled.li`
  padding: 10px;
  color: white;
  position: relative;
  list-style-type: none;
`;

const LogoLogo = styled.div`
  width: 40px;
  height: 40px;
`;

const Header = () => {
  return (
    <NavBar>
      <Link to="/">
        {" "}
        <LogoLogo>
          <Logo />
        </LogoLogo>
      </Link>
      <Nav>
        <LiItems>
          <Link to="/#projects">Work</Link>
        </LiItems>
        <LiItems>
          <Link to="/photos/">Photography</Link>
        </LiItems>
        <LiItems>
          <Link to="/contact/">About</Link>
        </LiItems>
      </Nav>
    </NavBar>
  );
};

export default Header;
