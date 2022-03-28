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
                Suspendisse feugiat quis libero eu ultricies. Quisque sagittis a
                turpis ac iaculis. Sed tempus in ante dapibus elementum. Aenean
                nisi dolor, lobortis congue lorem sit amet, imperdiet pretium
                nulla. In varius nisi ut tellus dapibus, id tincidunt turpis
                pulvinar. Morbi fringilla pellentesque mi cursus volutpat.
                Aliquam mauris arcu, blandit et eros sit amet, molestie volutpat
                massa. Cras et posuere justo. Proin quis eros ut purus lobortis
                ultricies vel et turpis. Nam nec blandit tortor. Curabitur
                sapien leo, suscipit at faucibus viverra, mollis eget massa.
                Integer nisl diam, fermentum sed arcu at, fringilla tempor ex.
                In aliquam ex urna, et viverra sapien ullamcorper at. Phasellus
                consequat, ex sed posuere pretium, magna eros ultricies arcu, eu
                lacinia odio orci et mauris. Pellentesque porta lectus quis
                lorem fermentum, eget tincidunt urna lacinia. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </Description>
            </TextContainer>
            <Image
              src={require("./images/lets-go-community-display.png")}
              alt="Let's Go Community Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Streamgear</ProjectHeader>
              <Description>
                Phasellus ex nunc, tempus at nibh a, porttitor suscipit tortor.
                Quisque mattis aliquet dui, vel facilisis ex scelerisque in.
                Aenean pellentesque, risus eget pellentesque laoreet, arcu
                tellus tempus tortor, id vestibulum nibh erat vitae nulla.
                Integer eu tortor non metus iaculis tempus. Praesent vestibulum
                dolor a ipsum egestas pellentesque. Maecenas malesuada risus a
                leo cursus tincidunt. In a felis ipsum. Mauris ac rhoncus dolor,
                non vulputate neque. Proin tempor dui sed diam vehicula cursus.
                Etiam a turpis rhoncus, finibus eros in, finibus lectus.
                Vestibulum malesuada pretium libero ac placerat. Morbi ultrices
                dui porttitor scelerisque malesuada.
              </Description>
            </TextContainer>
            <Image
              src={require("./images/streamgear.png")}
              alt="Streamgear Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Blended</ProjectHeader>
              <Description>
                Proin pellentesque rutrum erat ut viverra. Donec ornare lectus
                ultricies urna venenatis viverra. Nunc nec leo at magna accumsan
                dapibus. Quisque eget aliquet libero. Duis a mattis mauris.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus eget maximus urna. Fusce et
                nunc varius, pretium arcu ut, porta est. Quisque bibendum est
                risus, ut finibus odio euismod ut. Pellentesque vulputate
                euismod tristique. Aliquam congue lobortis accumsan.
              </Description>
            </TextContainer>

            <Image
              src={require("./images/blended.png")}
              alt="Blended Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Book The Look</ProjectHeader>
              <Description>
                A peer to peer garmet rental market place. This web app gives
                users the ability to search for garments nearby or filter by
                category, size colour or price.
              </Description>
              <Description>
                A built in calendar reservation system calculates the total
                cost, sends the booking request and blocks the dates out to
                ensure the garment doesn't get double booked.
              </Description>
              <Description>
                The owner then has the ability to accept or decline the booking
                request. All bookings are displayed on private dashboards for
                users to keep track of upcoming events.
              </Description>
            </TextContainer>

            <Image
              src={require("./images/book-the-look.png")}
              alt="Book The Look Project"
            />
          </ProjectContainer>
          <ProjectContainer>
            <TextContainer>
              <ProjectHeader>Mister Cocktail</ProjectHeader>
              <Description>
                A simple web app dedicated to cocktail recipies. Create and
                share your own recipe's with other users or search and review
                your favourite recipies.
              </Description>
            </TextContainer>

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
