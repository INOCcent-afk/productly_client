import styled from "styled-components";

interface PanelDominantLeftProps {
  gridGap?: number;
  gridColumnsDesktop?: string;
}

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
  box-shadow: ${(props) => props.theme.boxShadows.fullBoxShadow};
  overflow: hidden;
`;

export const StyledPanelDominantLeft = styled.div<PanelDominantLeftProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.gridGap || 0}px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    grid-template-columns: ${(props) => props.gridColumnsDesktop || "9fr 3fr"};
  }
`;

export const StyledPanelDominantRight = styled(StyledPanelDominantLeft)`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    grid-template-columns: ${(props) => props.gridColumnsDesktop || "3fr 9fr"};
  }
`;
