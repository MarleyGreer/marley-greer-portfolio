import React from "react";
import styled, { keyframes } from "styled-components";
import { colours } from "../../Themes/Colours";
import { H1 } from "../../Themes/Fonts";

const animation = keyframes`
0% {opacity: 0; transform: translateY(300px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
`;
const Container = styled("span")`
  display: inline-block;
  span {
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.2s;
  }
  span:nth-child(2) {
    animation-delay: 0.4s;
  }
  span:nth-child(3) {
    animation-delay: 0.6s;
  }
  span:nth-child(4) {
    animation-delay: 0.8s;
  }
  span:nth-child(5) {
    animation-delay: 1s;
  }
  span:nth-child(6) {
    animation-delay: 1.2s;
  }
  span:nth-child(7) {
    animation-delay: 1.4s;
  }
  span:nth-child(8) {
    animation-delay: 1.6s;
  }
  span:nth-child(9) {
    animation-delay: 1.8s;
  }
  span:nth-child(10) {
    animation-delay: 2s;
  }
`;
const DarkText = styled(H1)`
  color: ${colours.jet};
`;

export const Melbourne = () => {
  const singleLetterArray = "Melbourne.".split("");
  return (
    <Container>
      <DarkText>
        {singleLetterArray.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </DarkText>
    </Container>
  );
};

export default Melbourne;
