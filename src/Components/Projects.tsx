import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, H2, P } from "../Themes/Fonts";
import { device } from "../Themes/Devices";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.gainsboro};
`;

const Container = styled(PaddedContainer)``;

const LightText = styled(H1)`
  color: ${colours.tumbleweed};
`;

const ProjectHeader = styled(H2)`
  color: ${colours.brownSugar};
`;

const ProjectContainer = styled("div")`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  @media ${device.tablet} {
    flex: 0 1 50%;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;

const ProjectsContainer = styled("div")`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled("img")`
  width: 100%;
  height: 290px;
  object-fit: cover;
  border-radius: 80px;
  padding-top: 8px;
  @media ${device.tablet} {
    height: 290px;
    object-fit: cover;
  }
  @media ${device.laptop} {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;
export const Projects = () => {
  return (
    <Background>
      <Container>
        <LightText>PROJECTS.</LightText>
        <ProjectsContainer>
          <ProjectContainer>
            <ProjectHeader>Let's Go Community</ProjectHeader>
            <Image
              src={require("./images/lets-go-community-display.png")}
              alt="Let's Go Community Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <ProjectHeader>Streamgear</ProjectHeader>
            <Image
              src={require("./images/streamgear.png")}
              alt="Streamgear Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <ProjectHeader>Blended</ProjectHeader>
            <Image
              src={require("./images/blended.png")}
              alt="Blended Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <ProjectHeader>Book The Look</ProjectHeader>
            <Image
              src={require("./images/book-the-look.png")}
              alt="Book The Look Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <ProjectHeader>Mister Cocktail</ProjectHeader>
            <Image
              src={require("./images/mister-cocktail.png")}
              alt="Mister Cocktail Project"
            />
          </ProjectContainer>
        </ProjectsContainer>
      </Container>
    </Background>
  );
};

export default Projects;
