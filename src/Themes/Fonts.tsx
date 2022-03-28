import styled from "styled-components";
import { device } from "./Devices";

const H1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 22px;
  font-weight: 300;
  margin: 0px;
  letter-spacing: -0.08em;
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
`;

const H2 = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin: 0px;
  letter-spacing: -0.08em;
  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 50px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
`;

const H3 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0px;
  letter-spacing: -0.08em;
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
`;

const H4 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0px;
  letter-spacing: -0.08em;
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
`;

const P = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  font-weight: 300;
  @media ${device.mobileS} {
    font-size: 16px;
  }
`;

export { H1, H2, H3, H4, P };
