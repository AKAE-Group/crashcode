import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import styled from 'styled-components';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledCont = styled(Container)`
  margin-top: 2rem;
`;

const CardsContainer = (props) => {
  return (
    <>
      <CssBaseline />
      <StyledCont maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.data.map((card, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>{card.question}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </StyledCont>
    </>
  );
};
export default CardsContainer;
