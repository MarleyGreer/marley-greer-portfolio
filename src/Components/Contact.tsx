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
  transition: 0.8s;
  border-radius: 20px;
  padding: 12px;
  @media ${device.tablet} {
    margin: 10px 0px;
    padding: 20px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    margin: 20px 0px;
    padding: 20px;
    &:hover ${Text} {
      color: ${colours.tumbleweed};
    }
    &:hover {
      background-color: ${colours.gainsboro};
    }
  }
`;

const Link = styled("a")`
  text-decoration: none;
`;

export const Contact = () => {
  const links = [
    {
      href: "https://github.com/MarleyGreer",
      text: "github.com/marleygreer",
      icon: require("./images/github.png"),
      alt: "Github Icon",
      target: true,
    },
    {
      href: "https://www.linkedin.com/in/marleygreer",
      text: "linkedin.com/in/marleygreer",
      icon: require("./images/linked-in.png"),
      alt: "Linked In Icon",
      target: true,
    },
    {
      href: "mailto: marley.greer93@gmail.com",
      text: "marley.greer93@gmail.com",
      icon: require("./images/email.png"),
      alt: "Email Icon",
    },

    {
      href: "tel:+61423889644",
      text: "0423 889 644",
      icon: require("./images/mobile.png"),
      alt: "Mobile Icon",
    },
  ];

  return (
    <Background>
      <Container>
        <LightText>GET IN TOUCH.</LightText>
        {links.map((link, index) => (
          <Link
            href={link.href}
            target={link.target ? "_blank" : ""}
            key={index}
          >
            <ContactContainer>
              <Image src={link.icon} alt={link.alt} />
              <Text>{link.text}</Text>
            </ContactContainer>
          </Link>
        ))}
      </Container>
    </Background>
  );
};

export default Contact;
