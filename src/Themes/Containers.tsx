import styled from "styled-components";
import { device } from "./Devices";

const FullWidthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: calc(10px + 2vmin);
  box-sizing: border-box;
`;

const PaddedContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media ${device.tablet} {
    padding: 60px;
    justify-content: flex-start;
  }

  @media ${device.laptopL} {
    max-width: 1366px;
    padding: 40px;
  }
`;

export { FullWidthContainer, PaddedContainer };
