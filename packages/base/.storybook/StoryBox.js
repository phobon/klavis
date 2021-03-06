import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@phobon/tokens";

import { Normalize, Box } from "../src";

const StoryBox = ({ children, ...props }) => (
  <ThemeProvider theme={theme}>
    <>
      <Box
        p={5}
        className="storybox"
        justifyContent="flex-start"
        alignItems="flex-start"
        {...props}
        fullWidth
      >
        {children}
      </Box>
      <Normalize />
    </>
  </ThemeProvider>
);

StoryBox.propTypes = {
  ...Box.propTypes,

  children: PropTypes.node,
};

StoryBox.defaultProps = {
  children: null,
};

export default StoryBox;
