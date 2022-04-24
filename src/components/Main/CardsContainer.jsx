import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useQuery } from 'react-query';
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

const handleDelete = (cardId) => {
  console.log(cardId);
  fetch('/api/cards', {
    method: 'DELETE',
    body: {
      userId: '6264847b0c004122dd1841f9',
      cardId: cardId,
    },
  });
};

const CardsContainer = (props) => {
  const [allCards, setAllCards] = useState();
  const [filteredCards, setFilteredCards] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchCards = () => {
    setIsLoading(true);
    fetch('/api/cards?id=6264847b0c004122dd1841f9')
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .then(setIsLoading(false));
  };

  useEffect(() => {
    fetchCards();
  }, [isLoading]);

  useEffect(() => {
    const filtered = [];
    if (allCards) {
      for (const card of allCards) {
        if (card.category === props.category) {
          filtered.push(card);
        }
      }
      setFilteredCards(filtered);
    }
  }, [props.category, allCards]);

  return (
    <>
      <CssBaseline />
      <StyledCont maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.category === 'none' && <div>Select a category to begin</div>}
            {filteredCards &&
              filteredCards.map((card, index) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={card._id}
                  onClick={() => handleDelete(card._id)}>
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
