import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, H2 } from "../Themes/Fonts";
import { device } from "../Themes/Devices";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.tumbleweed};
`;

const Container = styled(PaddedContainer)`
  width: 100%;
  @media ${device.laptop} {
    align-items: flex-start;
  }
`;

const LightText = styled(H1)`
  color: ${colours.gainsboro};
`;

const Image = styled("img")`
  width: 64px;
  height: 64px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
  @media ${device.laptop} {
    padding-right: 20px;
  }
`;

const Text = styled(H2)`
  color: ${colours.gainsboro};
`;

const ContactContainer = styled("div")`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    padding: 60px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    padding: 80px 0px;
  }
`;

const Link = styled("a")`
  text-decoration: none;

  &:hover ${Image} {
    box-shadow: inset 100px 0 0 0 ${colours.brownSugar};
  }
`;

export const Contact = () => {
  return (
    <Background>
      <Container>
        <LightText>GET IN TOUCH.</LightText>
        <Link href="mailto: marley.greer93@gmail.com">
          <ContactContainer>
            <Image src={require("./images/email.png")} alt="Email Icon" />
            <Text>marley.greer93@gmail.com</Text>
          </ContactContainer>
        </Link>
        <Link href="tel:+61423889644">
          <ContactContainer>
            <Image src={require("./images/phone.png")} alt="Phone Icon" />
            <Text>0423 889 644</Text>
          </ContactContainer>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/marleygreer">
          <ContactContainer>
            <Image
              src={require("./images/linked-in.png")}
              alt="Linked In Icon"
            />
            <Text>linkedin.com/in/marleygreer</Text>
          </ContactContainer>
        </Link>
      </Container>
    </Background>
  );
};

export default Contact;
