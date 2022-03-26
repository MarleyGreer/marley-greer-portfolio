import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, P } from "../Themes/Fonts";
import { device } from "../Themes/Devices";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.gainsboro};
`;

const Container = styled(PaddedContainer)``;

const ContentContainer = styled("div")`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px;
  }
`;

const LightText = styled(H1)`
  color: ${colours.tumbleweed};
`;

const ParagraphContainer = styled("div")`
  padding-bottom: 20px;
  @media ${device.tablet} {
    padding: 40px;
  }
`;

const ParagraphText = styled(P)`
  color: ${colours.jet};
`;

const Image = styled("img")`
  max-width: 100%;
  max-height: auto;
  border-radius: 50%;
  box-shadow: 2px 2px 11px 3px rgb(0 0 0 / 20%);
  @media ${device.tablet} {
    max-width: 50%;
  }
  @media ${device.laptop} {
    max-width: 500px;
  }
`;

export const AboutMe = () => {
  return (
    <Background>
      <Container>
        <LightText>ABOUT ME.</LightText>
        <ContentContainer>
          <ParagraphContainer>
            <ParagraphText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sagittis sapien eget tortor volutpat ultrices. Ut eget massa
              consectetur, ultrices est non, interdum neque. Praesent nisi mi,
              hendrerit eget lectus eu, aliquam dapibus odio. Donec eleifend
              blandit eros in tristique. Maecenas ac ante condimentum, semper
              odio non, condimentum sem. Etiam porta dignissim ipsum at
              vestibulum. Aenean lobortis urna quis mollis porta.
            </ParagraphText>
            <ParagraphText>
              Nulla lacinia, justo a tincidunt vestibulum, purus turpis accumsan
              lectus, euismod interdum dui metus at ante. Donec vitae consequat
              felis. Donec vel nibh hendrerit, semper urna aliquam, lobortis
              ipsum. Phasellus rhoncus leo at augue convallis, eu cursus justo
              vehicula. Duis faucibus lobortis odio, nec fermentum odio molestie
              eu. Nullam ultricies dui urna, eget congue quam posuere id.
              Phasellus blandit orci vitae placerat pellentesque.
            </ParagraphText>
          </ParagraphContainer>
          <Image
            src={require("./images/about-me.png")}
            alt="Image of Marley Greer"
          />
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default AboutMe;
