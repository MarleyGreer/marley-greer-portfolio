import React from "react";
import styled from "styled-components";
import { FullWidthContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1 } from "../Themes/Fonts";
import { device } from "../Themes/Devices";

const Container = styled(FullWidthContainer)`
  background-color: ${colours.tumbleweed};
  justify-content: center;
`;

const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DarkText = styled(H1)`
  color: ${colours.jet};
`;
const LightText = styled(H1)`
  padding-right: 8px;
  color: ${colours.cultured};
  @media ${device.tablet} {
    padding-right: 20px;
  }
`;

export const WelcomeScreen = () => {
  return (
    <Container>
      <TextContainer>
        <LightText>Hello, I'm </LightText>
        <DarkText>Marley Greer</DarkText>
      </TextContainer>
      <TextContainer>
        <LightText>a Full Stack Developer</LightText>
      </TextContainer>

      <TextContainer>
        <LightText>located in</LightText>
        <DarkText>Melbourne.</DarkText>
      </TextContainer>
    </Container>
  );
};

export default WelcomeScreen;
