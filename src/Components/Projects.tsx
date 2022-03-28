import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../Themes/Containers";
import { colours } from "../Themes/Colours";
import { H1, H2, H4, P } from "../Themes/Fonts";
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
    min-width: 330px;
    width: 330px;
    height: 330px;
    object-fit: cover;
  }
`;

const TextContainer = styled("div")`
  @media ${device.laptop} {
    padding: 40px;
  }
`;

const Description = styled(P)``;

const TechHeader = styled(H4)`
  padding-bottom: 16px;
`;

export const Projects = () => {
  return (
    <Background>
      <Container>
        <LightText>PROJECTS.</LightText>
        <ProjectsContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Let's Go Community</ProjectHeader>
              <Description>
                An IOS application built with the goal to support local
                businesses by driving users through challenges that direct their
                attention to supporting the community.
              </Description>
              <Description>
                Businesses customize their profile and set up challenges for
                their customers to complete such as reviewing the business,
                checking in or completing a small quiz. Once the challenge is
                completed, the user will receive a reward which has been
                predefined by the business such as a discount to use in store.
              </Description>
              <Description>
                Features include custom built CMS for businesses to manage
                challenges and their business details, a news feed displaying
                recently completed challenges in the area and a challenge
                leaderboard.
              </Description>
              <TechHeader>
                React Native | React | Typescript | Next.js | Node.js |
                Express.js | PostgreSQL
              </TechHeader>
            </TextContainer>
            <a
              target="_blank"
              href="https://exodigital.com.au/case-studies/lets-go"
            >
              <Image
                src={require("./images/lets-go-community-display.png")}
                alt="Let's Go Community Project"
              />
            </a>
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Streamgear</ProjectHeader>
              <Description>
                Streamgear's vision is to support, celebrate and nurture gamers,
                elevating their unique culture into the mainstream.
              </Description>
              <Description>
                The company is looking to disrupt the extremely competitive
                market of cheap tech from IT retailers.
              </Description>
              <Description>
                Features include add to cart functionality, search, responsive
                design, headless shopify integration, social media logins and a
                gamified points system.
              </Description>
              <TechHeader>
                React | Node.js | Express.js | Shopify APIs | Liquid |
                PostgreSQL
              </TechHeader>
            </TextContainer>
            <a target="_blank" href="https://www.streamgear.com/">
              <Image
                src={require("./images/streamgear.png")}
                alt="Streamgear Project"
              />
            </a>
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Blended</ProjectHeader>
              <Description>
                Blended is a platform for make-up artists, hairdressers and
                beauticians to showcase their work, make bookings and keep in
                touch with their customers all in one place.
              </Description>
              <Description>
                Features include personalised profiles, an inspiration board
                which links back to the artist's profile, live chat, reviews and
                a built in live booking system.
              </Description>
              <Description>
                Artists can add their regular working hours along with any
                annual leave days to ensure all bookings fit in with their
                schedule.
              </Description>
              <TechHeader>
                Ruby On Rails | Javascript ES6 | CSS | HTML
              </TechHeader>
            </TextContainer>
            <a target="_blank" href="https://youtu.be/sQaHzGYhg28?t=86">
              <Image
                src={require("./images/blended.png")}
                alt="Blended Project"
              />
            </a>
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Book The Look</ProjectHeader>
              <Description>
                A peer to peer garment rental marketplace. This web app gives
                users the ability to search for garments nearby or filter by
                category, size, colour or price.
              </Description>
              <Description>
                A built in calendar reservation system calculates the total
                cost, sends the booking request and blocks the dates out to
                ensure availability status remains accurate.
              </Description>
              <Description>
                The owner then has the ability to accept or decline the booking
                request. All bookings are displayed on private dashboards for
                users to keep track of upcoming events.
              </Description>
              <TechHeader>
                Ruby On Rails | Javascript ES6 | CSS | HTML
              </TechHeader>
            </TextContainer>
            <a target="_blank" href="https://bookthelook.herokuapp.com">
              <Image
                src={require("./images/book-the-look.png")}
                alt="Book The Look Project"
              />
            </a>
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Mister Cocktail</ProjectHeader>
              <Description>
                A simple web app dedicated to cocktail recipies. Create and
                share your own recipe's with other users or search and review
                your favourite recipies.
              </Description>
              <TechHeader>
                Ruby On Rails | Javascript ES6 | CSS | HTML{" "}
              </TechHeader>
            </TextContainer>
            <a
              target="_blank"
              href="https://mister-cocktail-marley.herokuapp.com/"
            >
              <Image
                src={require("./images/mister-cocktail.png")}
                alt="Mister Cocktail Project"
              />
            </a>
          </ProjectContainer>
        </ProjectsContainer>
      </Container>
    </Background>
  );
};

export default Projects;
