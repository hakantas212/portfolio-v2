import React from "react";
import styled from "styled-components";

const Parag = styled.p`
  font-size: 1.1em;
  line-height: 1.55;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  min-height: 100%;
  flex-grow: 1;
  margin: 0px auto;

  h1 {
    font-weight: 900;
    font-size: 2.6em;
  }

  img {
    width: 200px;
    height: 200px;
    margin-top: 49px;
    border-radius: 50%;
    object-fit: cover;
    border-color: #93def7;
    border-width: 0.17rem;
    border-style: solid;
    -webkit-box-shadow: 10px 7px 32px -21px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 10px 7px 32px -21px rgba(0, 0, 0, 0.58);
    box-shadow: 10px 7px 32px -21px rgba(0, 0, 0, 0.58);
  }
`;
const AboutSection = styled.section`
  display: grid;
  margin: 0px auto;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 10px;
  grid-gap: 1em 1em;

  @media (max-width: 46rem) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media (max-width: 70rem) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

const ProfilePic = styled.div`
  align-self: center;
`;

const AboutMe = styled.div`
  align-self: center;
  grid-column: span 3 / auto;
  display: inline-block;
  width: 90%;

  span {
    font-weight: 700;
  }

  @media (max-width: 46rem) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <AboutSection>
        <ProfilePic>
          <img src={"/img/profile-pic.png"} alt="" />
        </ProfilePic>
        <AboutMe>
          <h1>About Me</h1>
          <Parag>
            My name is Hakan Tas, Stockholm based Frontend Developer and UI
            Designer who is infinitely curious about web technologies and
            enthusiastic about photography.
          </Parag>
          <Parag>
            I have always loved learning new skills, crafting stuff on the web
            and experiment with the new tools. I really enjoy working with {""}
            <span>ReactJS</span>, <span>CSS Grid Layout</span> and{" "}
            <span>Styled Components</span>.
          </Parag>

          <Parag>
            In my spare time while I'm not coding, I like spending time in
            nature, watching movies(also 90s TV shows) and photographing.
          </Parag>
          <Parag></Parag>
        </AboutMe>
      </AboutSection>
    </Wrapper>
  );
};

export default Contact;
