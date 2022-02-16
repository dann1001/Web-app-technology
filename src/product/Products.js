import React from 'react';

//material ui components
import { Box, Paper, Typography } from '@mui/material';

//imports
import apple from '../asset/apple.jpg';
import './Products.css';

const Products = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 192,
          height: 256,
        },
      }}>
      <Paper elevation={3}>
        <img src={apple} alt='mac' className='img' />
        <Typography
          variant='body1'
          component='h2'
          sx={{
            textAlign: 'center',
          }}>
          apple macbook
        </Typography>
        <Typography
          variant='body2'
          component='p'
          sx={{
            textAlign: 'center',
          }}>
          1999$
        </Typography>
        <Typography
          variant='body2'
          component='p'
          sx={{
            textAlign: 'center',
          }}>
          Fast One
        </Typography>
      </Paper>
    </Box>
  );
};

export default Products;
