/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const Herotext = styled.h1`
  font-size: 2.6em;
  color: #212121;
  font-weight: 700;
  margin-top: 0;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  flex-grow: 1;

  .home-text {
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 2.2em;
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


    

 
`;
const Project = styled.div`
  position:relative
  width: 100%;
  height: 275px;
  text-align: center;
  border-radius: 0.2rem;
  

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
  background-color: #000;
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
    color: white;
    font-size: 20px;
    position: absolute;
    opacitiy: 1;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <Herotext>
        Hello.
        <span role="img" class="wave">
          👋
        </span>
      </Herotext>

      <h1 className="home-text">
        I'm Hakan, front end developer and UI designer.
      </h1>

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
          <span>zdfdsfdsfdsfds</span>
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
          <span>zdfdsfdsfdsfds</span>
        </Project>
        <Project>
          <a
            href="https://codesandbox.io/s/very-old-css-only-animation-4jdbq"
            target="_blank"
          >
            <img src={"/img/mini.png"} alt="" />
            <Overlay>
              <h1>CSS only banner animation CSS only banner animation</h1>
            </Overlay>
          </a>
          <span>zdfdsfdsfdsfds</span>
        </Project>
        <Project>
          <a
            href="https://codesandbox.io/s/material-ui-todo-list-vanilla-js-295vp"
            target="_blank"
          >
            <img src={"/img/todo-app.png"} alt="" />
            <Overlay>
              <h1>A Simple vanilla JS todo list with Material Design</h1>
            </Overlay>
          </a>
          <span>zdfdsfdsfdsfds</span>
        </Project>
      </Section>
    </Wrapper>
  );
};

export default Home;
