import styled from "styled-components";
import { devices } from "../../utils/theme/breakpoints";

export const StyledMainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 10px;
  min-height: 80vh;
`;

export const StyledBox = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.15);
`;

export const StyledPanelDominantLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media ${devices.laptop} {
    grid-template-columns: 9fr 3fr;
  }
`;

export const StyledPanelDominantRight = styled(StyledPanelDominantLeft)`
  @media ${devices.laptop} {
    grid-template-columns: 3fr 9fr;
  }
`;
