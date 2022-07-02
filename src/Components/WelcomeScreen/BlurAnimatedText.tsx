import React from "react";
import styled, { keyframes } from "styled-components";
import { colours } from "../../Themes/Colours";
import { H1 } from "../../Themes/Fonts";
import { device } from "../../Themes/Devices";

const animation = keyframes`
0% {opacity: 0;   filter: blur(10px)}
75% {opacity: 1; filter: blur(0px)}
100% {opacity: 1;  filter: blur(0px)}
`;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const LightText = styled(H1)`
  padding-right: 8px;
  color: ${colours.cultured};
  @media ${device.tablet} {
    padding-right: 20px;
  }
`;

export const BlurAnimatedText = (props: { text: string }) => {
  return (
    <Container>
      <LightText>{props.text}</LightText>
    </Container>
  );
};

export default BlurAnimatedText;
