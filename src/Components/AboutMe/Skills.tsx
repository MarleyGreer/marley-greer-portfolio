import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { colours } from "../../Themes/Colours";
import { H4, P } from "../../Themes/Fonts";
import { device } from "../../Themes/Devices";

const Container = styled("div")`
  justify-content: space-between;
`;

const SkillsButtonsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  flex: 1 1 0px;
  align-items: flex-start;
`;

const shakeAnimation = keyframes`
    0% {transform: translate(1px, 1px) rotate(0deg);}
    10% {transform: translate(-1px, -2px) rotate(-1deg);}
    20% {transform: translate(-3px, 0px) rotate(1deg);}
    30% {transform: translate(3px, 2px) rotate(0deg);}
    40% {transform: translate(1px, -1px) rotate(1deg);}
    50% {transform: translate(-1px, 2px) rotate(-1deg);}
    60% {transform: translate(-3px, 1px) rotate(0deg);}
    70% {transform: translate(3px, 1px) rotate(-1deg);}
    80% {transform: translate(-1px, -1px) rotate(1deg);}
    90% {transform: translate(1px, 2px) rotate(0deg);}
    100% {transform: translate(1px, -2px) rotate(-1deg);}
`;

const SkillButtonContainer = styled("div")`
  display: flex;
  background-color: ${colours.cultured};
  flex-direction: column;
  padding: 20px;
  width: 100%;
  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }
  &:last-child {
    border-radius: 0px 20px 20px 00px;
  }
  @media ${device.tablet} {
    margin: 8px;
    box-shadow: 2px 2px 11px 3px rgb(0 0 0 / 20%);
    &:hover {
      cursor: pointer;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-name: ${shakeAnimation};
    }
  }
`;

const Icon = styled("img")`
  max-width: 64px;
  max-height: auto;
  width: 64px;
  padding-bottom: 3px;
`;

const SkillHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillHeader = styled(H4)`
  color: ${colours.tumbleweed};
`;

const ParagraphText = styled(P)`
  color: ${colours.jet};
`;

const List = styled("ul")`
  list-style-type: none;
  padding: 0px;
  text-align: left;
  margin: 0px;
`;

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string>("");

  const skillLists = [
    {
      heading: "Languages",
      imagePath: require("../images/languages.png"),
      skills: ["JavaScript", "TypeScript", "Ruby", "HTML", "CSS"],
    },
    {
      heading: "Libraries",
      imagePath: require("../images/libraries.png"),
      skills: [
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "Ruby On Rails",
        "Gatsby",
      ],
    },
    {
      heading: "Testing",
      imagePath: require("../images/tests.png"),
      skills: ["Jest", "RTL", "Storybook", "Loki", "RSpec", "Jasmine"],
    },
  ];

  return (
    <Container>
      <SkillsButtonsContainer>
        {skillLists.map((skillList, index) => (
          <SkillButtonContainer
            key={index}
            onClick={() => {
              skillList.heading === activeSkill
                ? setActiveSkill("")
                : setActiveSkill(skillList.heading);
            }}
          >
            <SkillHeaderContainer>
              <SkillHeader>{skillList.heading}</SkillHeader>
              <Icon
                src={skillList.imagePath}
                alt={`${skillList.heading} icon`}
              />
              {skillList.heading === activeSkill && (
                <List>
                  {skillList.skills.map((skill, index) => (
                    <li key={index}>
                      <ParagraphText>{skill}</ParagraphText>
                    </li>
                  ))}
                </List>
              )}
            </SkillHeaderContainer>
          </SkillButtonContainer>
        ))}
      </SkillsButtonsContainer>
    </Container>
  );
};

export default Skills;
