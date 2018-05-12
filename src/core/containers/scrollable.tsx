import * as React from "react";
import { BoxProps } from "./box";
import Flex from "./flex";

const ScrollableFlex = Flex.extend`
  position: relative;
  overflow-y: scroll;
  flex-direction: column;

  > *:first-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

ScrollableFlex.defaultProps = Object.assign({}, Flex.defaultProps, {
  fullHeight: true,
  fullWidth: true,
  align: "flex-start"
});

const Scrollable = (props: BoxProps) => (
  <ScrollableFlex>
    <Flex flexDirection="column" align="inherit" justify="inherit" {...props}>{props.children}</Flex>
  </ScrollableFlex>
);

export default Scrollable;
