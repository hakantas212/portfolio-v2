/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const Herotext = styled.h1`
  font-size: 2.4em;
  color: #212121;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0px;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  flex-grow: 1;

  .home-text {
    font-weight: 400;
    text-rendering: optimizeLegibility;
    font-size: 2em;
    margin-block-start: 0.3em;
    margin-block-end: 0.67em;
  }

  h2 {
    margin-top: 50px;
  }
`;

const Section = styled.section`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2em;
  margin-bottom: 100px;

  @media (max-width: 46rem) {
    grid-template-columns: repeat(auto-fit, minmax(1fr, auto-fot));
    grid-gap: 3em;
    height: 100%;
  }
  span {
    font-size: 0.9em;
    font-weight: 500;
  }
`;
const Project = styled.div`
  position:relative
  width: 100%;
  height: 275px;
  border-radius: 0.2rem;
  border-top: 3em;

  img {
    width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: cover;
  }
  

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #92def7;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0px 0px 7px 0px rgba(133, 133, 133, 0.3);
  -webkit-transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    opacity: 1;
  }

  h1 {
    vertical-align: middle;
    text-align: center;
    color: #212121;
    margin: 4em 1em;
    font-weight: 500;
    font-size: 1.4em;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <Herotext>
        Hello.
        <span role="img" className="wave">
          👋
        </span>
      </Herotext>

      <h1 className="home-text">
        I'm Hakan, front end developer and UI designer.
      </h1>
      <h2>Projects</h2>
      <Section id="projects">
        <Project>
          <a
            href="https://codesandbox.io/s/search-country-rkpee"
            target="_blank"
          >
            <img src={"/img/search-country.png"} alt="" />
            <Overlay>
              <h1>Restcountries API + Exchangerates API </h1>
            </Overlay>
          </a>
          <span>ReactJS, REST API, Material-UI</span>
        </Project>
        <Project>
          <a
            href="https://codesandbox.io/s/personal-unsplash-api-fetch-2j6q4"
            target="_blank"
          >
            <img src={"/img/unsplash-logo.png"} alt="" />
            <Overlay>
              <h1>My personal Unsplash API with CSS grid</h1>
            </Overlay>
          </a>
          <span>ReactJS, REST API, CSS Grid</span>
        </Project>
        <Project>
          <a
            href="https://codesandbox.io/s/very-old-css-only-animation-4jdbq"
            target="_blank"
          >
            <img src={"/img/mini.png"} alt="" />
            <Overlay>
              <h1>CSS only banner animation </h1>
            </Overlay>
          </a>
          <span>HTML, CSS</span>
        </Project>
        <Project>
          <a
            href="https://codesandbox.io/s/material-ui-todo-list-vanilla-js-295vp"
            target="_blank"
          >
            <img src={"/img/todo-app.png"} alt="" />
            <Overlay>
              <h1>A Simple vanilla JavaScript todo app with Material Design</h1>
            </Overlay>
          </a>
          <span>JavaScript, Material Design</span>
        </Project>
      </Section>
    </Wrapper>
  );
};

export default Home;
