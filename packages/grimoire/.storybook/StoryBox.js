import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@phobon/tokens";
import { Normalize, Box } from "@phobon/base";

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

export default StoryBox;
