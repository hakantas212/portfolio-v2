/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  flex-shrink: 0;
  margin: auto 0;
  margin-bottom: 0;
  margin-top: 0;
  bottom: 0;
  text-align: center;
`;

const Wrapper = styled.div``;

const ContactIcons = styled.ul`
  position: relative;
  list-style-type: none;
  flex-wrap: wrap;
  padding-inline-start: 0px;

  a {
    display: inline-block;
    padding: 1.2em 1.25em;
    margin: 0 0.2%;
    border: 0;
  }
  a:hover {
    -webkit-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  a:hover:nth-child(1) {
    position: relative;
    background: #38a1f3;
  }
  a:hover:nth-child(2) {
    background-color: #0077b5;
    position: relative;
  }
  a:hover:nth-child(3) {
    background-color: #c9510c;
    position: relative;
  }
  a:hover:nth-child(4) {
    background-color: lightgray;
    position: relative;
  }
  a:hover:nth-child(5) {
    background-color: #41a9f3;
    position: relative;
  }
  a:hover:nth-child(6) {
    background-color: #cb5350;
    position: relative;
  }

  svg {
    position: relative;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContactIcons>
          <a href="https://twitter.com/hakantas212" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/hakantas/" target="_blank">
            <svg
              version="1.1"
              id="_1"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 430.117 430.117"
            >
              <g>
                <path
                  id="LinkedIn"
                  d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
		c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
		v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
		C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
		c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
		 M5.477,420.56h92.184v-277.32H5.477V420.56z"
                />
              </g>
            </svg>
          </a>
          <a href="https://github.com/hakantas212" target="_blank">
            <svg
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120.78 117.79"
            >
              <defs>
                <style>
                  .cls-1,.cls-2{`fill:#191717;`}.cls-1{`fill-rule:evenodd;`}
                </style>
              </defs>
              <title>logo</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                  />
                  <path
                    className="cls-2"
                    d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                  />
                  <path
                    className="cls-2"
                    d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                  />
                  <path
                    className="cls-2"
                    d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                  />
                  <path
                    className="cls-2"
                    d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                  />
                  <path
                    className="cls-2"
                    d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                  />
                  <path
                    className="cls-2"
                    d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                  />
                  <path
                    className="cls-2"
                    d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href="https://unsplash.com/@hakantas212" target="_blank">
            <svg
              className="_2m4hn"
              version="1.1"
              viewBox="0 0 32 32"
              width="50"
              height="50"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <title id="unsplash-home"></title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </a>
          <a href="https://codesandbox.io/u/hakantas212" target="_blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 296"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </a>
          <a href="mailto:hakan.tas@hyperisland.se" target="_top">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="52"
              height="52"
              viewBox="0 0 612 612"
            >
              <g>
                <path
                  d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
		l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
		C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
		V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
		l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
		L337.431,361.585z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </ContactIcons>
      </Wrapper>
    </Container>
  );
};

export default Footer;
