import styled from "styled-components";
import { devices } from "../../utils/theme/breakpoints";

export const StyledMainContainer = styled.div`
  width: calc(100% - 15px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  min-height: 100vh;
`;

export const StyledBox = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow.fullBoxShadow};
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
