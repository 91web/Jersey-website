// src/components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      py={2}
      bgcolor="black" // Set background color to black
      color="white" // Set text color to white
      textAlign="center"
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Application. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
