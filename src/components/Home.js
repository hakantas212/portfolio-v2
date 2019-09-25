import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Herotext = styled.h1`
  font-size: 4em;
`;

const Section = styled.section`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3rem;
`;
const Project = styled.div`
  width: 100%;
  height: 240px;
  text-align: center;
  background-color: #97d4f8;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 7px 0px rgba(133, 133, 133, 0.47);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(133, 133, 133, 0.47);
  -moz-box-shadow: 0px 0px 7px 0px rgba(133, 133, 133, 0.47);
`;

const Home = () => (
  <div>
    <Herotext>Hello.</Herotext>
    <h1>I'm Hakan, front end developer and UI designer.</h1>

    <Section id="projects">
      <Project>
        <Link
          to="https://codesandbox.io/s/search-country-rkpee"
          target="_blank"
        >
          <button>DEMO</button>
        </Link>
      </Project>
      <Project>PROJECT 2</Project>
      <Project>PROJECT 3</Project>
      <Project>PROJECT 4</Project>
    </Section>
  </div>
);

export default Home;
