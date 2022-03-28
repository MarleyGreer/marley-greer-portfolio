import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, H2, H3, P } from "../Themes/Fonts";
import { device } from "../Themes/Devices";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.tumbleweed};
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
    align-items: flex-start;
    padding: 40px;
  }
`;

const LightText = styled(H1)`
  color: ${colours.gainsboro};
`;

const Title = styled(H3)`
  color: ${colours.brownSugar};
  text-align: center;
`;

const CompanyName = styled(H2)`
  padding-top: 20px;
  color: ${colours.brownSugar};
  text-align: center;
`;

const JobContainer = styled("div")`
  @media ${device.tablet} {
    padding: 40px;
  }
`;

const ParagraphText = styled(P)`
  color: ${colours.jet};
`;

const List = styled("ul")`
  list-style-type: square;
`;

export const Resume = () => {
  return (
    <Background>
      <Container>
        <LightText>WHERE I'VE WORKED.</LightText>
        <ContentContainer>
          <JobContainer>
            <CompanyName>Exo Digital</CompanyName>
            <Title>Full Stack Web Developer January 2021 - Present</Title>

            <List>
              <li>
                <ParagraphText>
                  Developed software for both desktop and mobile operating
                  systems.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Reviewed code, debugged problems and corrected issues.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Contributed ideas and suggestions in team meetings and
                  delivered updates on deadlines, designs and enhancements.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Discussed project progress with customers, collected feedback
                  on different stages and directly addressed concerns.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Front and back end unit tests with Jest and Jasmine.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Used agile methodologies and development best practices to
                  enhance product development.
                </ParagraphText>
              </li>
            </List>
          </JobContainer>
          <JobContainer>
            <CompanyName>Flight Centre</CompanyName>
            <Title>Store Manager July 2013 - December 2020</Title>
            <List>
              <li>
                <ParagraphText>
                  Coached sales associates in product specifications, sales
                  incentives and selling techniques, significantly increasing
                  customer satisfaction ratings.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Defined clear targets and objectives and communicated to other
                  team members.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Evaluated employee performance and conveyed constructive
                  feedback to improve skills.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Applied performance data to evaluate and improve operations,
                  target current business conditions and forecast needs.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Communicated best practices among on-site and external
                  personnel to align efforts and goals.
                </ParagraphText>
              </li>
            </List>
          </JobContainer>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default Resume;
