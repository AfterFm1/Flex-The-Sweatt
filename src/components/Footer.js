import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
const date=new Date();
const year=date.getFullYear();
const Footer = () => (
  <Box mt="80px" bgcolor="#8EAC50">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '101px',objectFit:'contain' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">© Flex The Sweat {year}. All rights reserved.</Typography>
  </Box>
);

export default Footer;