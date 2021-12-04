import styled from "styled-components";
import {
  backgroundColor,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

export const Box = styled("div")(
  compose(
    border,
    space,
    layout,
    typography,
    color,
    backgroundColor,
    position,
    shadow,
    flexbox
  )
);

export const Flex = styled(Box)`
  display: flex;
`;

export const Button = styled("button")(
  compose(border, space, layout, typography, color, position, flexbox)
);
