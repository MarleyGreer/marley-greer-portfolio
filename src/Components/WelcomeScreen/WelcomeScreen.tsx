import React from "react";
import styled from "styled-components";
import { FullWidthContainer } from "../../Themes/Containers";
import { colours } from "../../Themes/Colours";
import { MarleyGreer, Melbourne, BlurAnimatedText } from ".";

const Container = styled(FullWidthContainer)`
  background-color: ${colours.tumbleweed};
  justify-content: center;
`;

const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeScreen = () => {
  return (
    <Container>
      <TextContainer>
        <BlurAnimatedText text={`Hello,  I'm`} />
        <MarleyGreer />
      </TextContainer>
      <TextContainer>
        <BlurAnimatedText text={`a Software Engineer`} />
      </TextContainer>
      <TextContainer>
        <BlurAnimatedText text={`located in`} />
        <Melbourne />
      </TextContainer>
    </Container>
  );
};

export default WelcomeScreen;
