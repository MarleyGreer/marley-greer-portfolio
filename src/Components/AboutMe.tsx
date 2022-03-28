import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, H4, P } from "../Themes/Fonts";
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

const List = styled("ul")`
  list-style-type: circle;
  padding-left: 20px;
`;

const SkillsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const SkillContainer = styled("div")`
justify-content: space-between;
flex: 0 1 33%;
}

`;

const SkillHeader = styled(H4)`
  color: ${colours.tumbleweed};
`;
export const AboutMe = () => {
  return (
    <Background>
      <Container>
        <LightText>ABOUT ME.</LightText>
        <ContentContainer>
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
            <SkillsContainer>
              <SkillContainer>
                <SkillHeader>Languages</SkillHeader>
                <List>
                  <li>
                    <ParagraphText>JavaScript </ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>TypeScript</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>Ruby</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>HTML</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>CSS</ParagraphText>
                  </li>
                </List>
              </SkillContainer>

              <SkillContainer>
                <SkillHeader> Libraries</SkillHeader>
                <List>
                  <li>
                    <ParagraphText>React</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>React Native</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>Node.js</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText> Express.js</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>Ruby On Rails</ParagraphText>
                  </li>
                </List>
              </SkillContainer>

              <SkillContainer>
                <SkillHeader>Testing</SkillHeader>
                <List>
                  <li>
                    <ParagraphText>Jest</ParagraphText>
                  </li>
                  <li>
                    <ParagraphText>Jasmine</ParagraphText>
                  </li>
                </List>
              </SkillContainer>
            </SkillsContainer>
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
