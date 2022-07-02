import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../../Themes/Containers";
import { colours } from "../../Themes/Colours";
import { H1, P } from "../../Themes/Fonts";
import { device } from "../../Themes/Devices";
import { Skills } from ".";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.gainsboro};
`;

const Container = styled(PaddedContainer)``;

const ContentContainer = styled("div")`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
  }
`;

const LightText = styled(H1)`
  color: ${colours.tumbleweed};
`;

const ParagraphContainer = styled("div")`
  padding-bottom: 20px;
  @media ${device.tablet} {
    padding-left: 40px;
  }
`;

const ParagraphText = styled(P)`
  color: ${colours.jet};
`;

const Image = styled("img")`
  max-width: 70%;
  max-height: auto;
  border-radius: 50%;
  box-shadow: 2px 2px 11px 3px rgb(0 0 0 / 20%);
  margin-top: 8px;
  @media ${device.tablet} {
    max-width: 50%;
    margin-top: 0px;
  }
  @media ${device.laptop} {
    max-width: 400px;
  }
`;

export const AboutMe = () => {
  return (
    <Background>
      <Container>
        <LightText>ABOUT ME.</LightText>
        <ContentContainer>
          <Image
            src={require("../images/about-me.png")}
            alt="Image of Marley Greer"
          />
          <ParagraphContainer>
            <ParagraphText>
              Hello, my name is Marley. I've always been extremely interested in
              technology and the way things worked, which drove me to choose web
              development as my ideal career of choice.
            </ParagraphText>
            <ParagraphText>
              After doing some online courses I enrolled in a Full Stack
              Development Course with Le Wagon. Throughout my studies I worked
              with Git/Github, HTML, CSS, Javascript, APIs, Active Record, SQL
              Queries and Ruby On Rails, building and deploying web
              applications.
            </ParagraphText>
            <ParagraphText>
              Prior to studying, I worked at Flight Centre Travel Group for over
              7 years. Throughout my time I worked within various roles
              including 5 years in the leadership team where I have developed a
              broad set of transferable soft skills.
            </ParagraphText>
            <ParagraphText>
              Since leaving Flight Centre Travel Group, I have been fortunate
              enough to join the wonderful team at Exo Digital, a Melbourne
              based web design and development agency.
            </ParagraphText>
            <ParagraphText>
              Here are a few technologies I’ve worked with in the past:
            </ParagraphText>
            <Skills />
          </ParagraphContainer>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default AboutMe;
