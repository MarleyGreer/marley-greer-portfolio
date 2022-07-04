import React from "react";
import styled from "styled-components";
import { FullWidthContainer, PaddedContainer } from "../../Themes/Containers";
import { colours } from "../../Themes/Colours";
import { H1 } from "../../Themes/Fonts";
import { device } from "../../Themes/Devices";
import { ProjectFlipCard } from ".";

const Background = styled(FullWidthContainer)`
  background-color: ${colours.gainsboro};
`;

const Container = styled(PaddedContainer)`
  width: 100%;
`;

const LightText = styled(H1)`
  color: ${colours.tumbleweed};
  padding-bottom: 20px;
`;

const ProjectsContainer = styled("div")`
  width: 100%;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  @media ${device.laptop} {
  }
`;

const projects = [
  {
    name: `Let's Go`,
    image: {
      href: "https://exodigital.com.au/case-studies/lets-go",
      src: require("../images/lets-go-community-display.png"),
      alt: "Let's Go  Project",
    },
    techUsed:
      "React Native | React | Typescript | Next.js | Node.js | Express.js | PostgreSQL",
    descriptionParagraphs: [
      `An IOS application built with the goal to support local
      businesses by driving users through challenges that direct their
      attention to supporting the community.`,
      `Businesses customize their profile and set up challenges for
      their customers to complete such as reviewing the business,
      checking in or completing a small quiz. Once the challenge is
      completed, the user will receive a reward which has been
      predefined by the business such as a discount to use in store.`,
      `Features include custom built CMS for businesses to manage
      challenges and their business details, a news feed displaying
      recently completed challenges in the area and a challenge
      leaderboard.`,
    ],
  },

  {
    name: `Streamgear`,
    image: {
      href: "https://www.streamgear.com/",
      src: require("../images/streamgear.png"),
      alt: "Streamgear Project",
    },
    techUsed:
      "React | Node.js | Express.js | Shopify APIs | Liquid | PostgreSQL",
    descriptionParagraphs: [
      `Streamgear's vision is to support, celebrate and nurture gamers,
       elevating their unique culture into the mainstream.`,
      ` The company is looking to disrupt the extremely competitive
       market of cheap tech from IT retailers.`,
      ` Features include add to cart functionality, search, responsive
       design, headless shopify integration, social media logins and a
       gamified points system.`,
    ],
  },
  {
    name: `Blended`,
    image: {
      href: "https://youtu.be/sQaHzGYhg28?t=86",
      src: require("../images/blended.png"),
      alt: "Blended Project",
    },
    techUsed: "Ruby On Rails | Javascript ES6 | CSS | HTML",
    descriptionParagraphs: [
      `Blended is a platform for make-up artists, hairdressers and
      beauticians to showcase their work, make bookings and keep in
      touch with their customers all in one place.`,
      `Features include personalised profiles, an inspiration board
      which links back to the artist's profile, live chat, reviews and
      a built in live booking system.`,
      `Artists can add their regular working hours along with any
      annual leave days to ensure all bookings fit in with their
      schedule.`,
    ],
  },
  {
    name: `Book The Look`,
    image: {
      href: "https://bookthelook.herokuapp.com",
      src: require("../images/book-the-look.png"),
      alt: "Book The Look Project",
    },
    techUsed: "Ruby On Rails | Javascript ES6 | CSS | HTML",
    descriptionParagraphs: [
      `A peer to peer garment rental marketplace. This web app gives
      users the ability to search for garments nearby or filter by
      category, size, colour or price.`,
      `A built in calendar reservation system calculates the total
      cost, sends the booking request and blocks the dates out to
      ensure availability status remains accurate.`,
      `The owner then has the ability to accept or decline the booking
      request. All bookings are displayed on private dashboards for
      users to keep track of upcoming events.`,
    ],
  },
  {
    name: `Mister Cocktail`,
    image: {
      href: "https://mister-cocktail-marley.herokuapp.com/",
      src: require("../images/mister-cocktail.png"),
      alt: "Mister Cocktail Project",
    },
    techUsed: "Ruby On Rails | Javascript ES6 | CSS | HTML",
    descriptionParagraphs: [
      `A simple web app dedicated to cocktail recipies. Create and
      share your own recipe's with other users or search and review
      your favourite recipies.`,
    ],
  },
];

export const Projects = () => {
  return (
    <Background>
      <Container>
        <LightText>PROJECTS.</LightText>

        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectFlipCard project={project} key={index} />
          ))}
        </ProjectsContainer>
      </Container>
    </Background>
  );
};

export default Projects;
