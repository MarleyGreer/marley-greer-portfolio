import React from "react";
import styled from "styled-components";
import { colours } from "../../Themes/Colours";
import { device } from "../../Themes/Devices";
import { H3, H4, P } from "../../Themes/Fonts";

const Card = styled("div")`
  background: ${colours.tumbleweed};
  cursor: default;
  height: 260px;
  transform-style: preserve-3d;
  transition: transform 0.4s ease 0s;
  width: 100%;
  -webkit-animation: giro 1s 1;
  animation: giro 1s 1;
  border-radius: 40px;
  box-shadow: 2px 2px 11px 3px rgb(0 0 0 / 20%);

  @media ${device.laptop} {
    height: 360px;
  }
`;

const Container = styled("div")`
  float: left;
  font-size: 1.2em;
  margin: 2%;
  perspective: 800px;
  transition: all 0.3s ease 0s;
  @media ${device.tablet} {
    width: 46%;
  }
  width: 100%;

  &:hover ${Card} {
    transform: rotateY(180deg);
  }
`;

const Front = styled("div")`
  position: relative;
  backface-visibility: hidden;
  box-sizing: border-box;

  display: block;
  font-size: 1.2em;
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
`;

const Back = styled("div")`
  backface-visibility: hidden;
  box-sizing: border-box;

  display: block;
  font-size: 1.2em;
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;
  transform: rotateY(180deg);
  overflow: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled("img")`
  width: 100%;
  object-fit: cover;
  height: 260px;

  @media ${device.laptop} {
    height: 360px;
  }
`;

const ProjectHeader = styled(H3)`
  color: ${colours.cultured};
  text-shadow: 0px 1px rgb(0 0 0 / 20%);
`;

const TechHeader = styled(H4)`
  padding-bottom: 12px;
  color: ${colours.jet};
`;

const TextContainer = styled("div")`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: ${colours.tumbleweed};
  width: 100%;
  padding: 16px;

  box-shadow: 2px 2px 11px 3px rgb(0 0 0 / 20%);
`;

const Description = styled(P)`
  color: ${colours.jet};
`;

type ProjectImage = {
  href: string;
  src: string;
  alt: string;
};
type Project = {
  name: string;
  image: ProjectImage;
  techUsed: string;
  descriptionParagraphs: string[];
};

export const ProjectFlipCard = (props: { project: Project }) => {
  const { project } = props;
  return (
    <Container>
      <Card>
        <Front>
          <Image src={project.image.src} alt={project.image.alt} />
          <TextContainer>
            <ProjectHeader>{project.name.toUpperCase()}</ProjectHeader>
          </TextContainer>
        </Front>
        <Back>
          <ProjectHeader>{project.name}</ProjectHeader>
          <TechHeader>{project.techUsed}</TechHeader>
          {project.descriptionParagraphs.map((paragraph, index) => (
            <Description key={index}>{paragraph}</Description>
          ))}
        </Back>
      </Card>
    </Container>
  );
};

export default ProjectFlipCard;
