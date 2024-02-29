import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "40px", xs: "28px" } }}
        color={"red"}
        fontWeight={"700"}
      >
        @Got Me Fit
      </Typography>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by YASH
    </Typography>
  </Box>
);

export default Footer;
