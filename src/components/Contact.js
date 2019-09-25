import React from "react";
import styled from "styled-components";

const Span = styled.p`
  font-size: 1em;
  line-height: 1.65;
  font-weight: 600;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Contact = () => (
  <div>
    <h1>Hi there.</h1>
    <Span>
      Since earning my degree in Mobile Creative from Hyper Island and
      Changemaker Education Front-end Development, I have been working as a
      creative designer/developer in a dynamic fast paced digital marketing
      environment. My background includes designing and developing user
      friendly, responsive websites, apps and HTML5 banners - along with skills
      and ability to collaborate effectively with clients and team members I
      believe that the result will be to produce high quality deliverables.
    </Span>
    <br></br>
    <Span>
      Practical innovation, group dynamics and productive team collaboration are
      fundamentals of team success for me. I’m passionate about remaining
      up-to-date with web technologies, usability and UI design while I also
      enjoy hiking, traveling and being photography enthusiast.
    </Span>
    <br></br>

    <Span>
      My background includes designing and developing user friendly, responsive
      websites, apps and HTML5 banners - along with skills and ability to
      collaborate effectively with clients and team members I believe that the
      result will be to produce high quality deliverables.
    </Span>
  </div>
);

export default Contact;
