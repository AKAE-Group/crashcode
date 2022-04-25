import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
} from '@mui/material';
import NewCardModal from './NewCardModal.jsx';
import CardsList from './CardsList.jsx';

const StyledBox = styled(Box)`
  width: 500;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const CardsContainer = () => {
  const [category, setCategory] = useState();
  const [allCards, setAllCards] = useState();
  const [filteredCards, setFilteredCards] = useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDelete = (cardId) => {
    // userId is hard-coded in for now. Need to change after auth is set up
    console.log(cardId);
    fetch(`/api/cards/6264847b0c004122dd1841f9/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(fetchCards());
  };

  const fetchCards = () => {
    fetch('/api/cards?id=6264847b0c004122dd1841f9')
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    const filtered = [];
    if (allCards) {
      for (const card of allCards) {
        if (card.category === category) {
          filtered.push(card);
        }
      }
      setFilteredCards(filtered);
    }
  }, [category, allCards]);

  return (
    <>
      <StyledBox sx={{ width: 300 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          alignSelf="center">
          Select a category to begin:
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category"
            value={category}
            label="category"
            onChange={handleChange}>
            <MenuItem value={'javascript'}>JavaScript Basics</MenuItem>
            <MenuItem value={'react'}>React</MenuItem>
            <MenuItem value={'express'}>Express</MenuItem>
          </Select>
        </FormControl>
        {category && (
          <Button variant="contained" color="success" size="large">
            <Link to="/quiz" style={{ textDecoration: 'none', color: 'white' }}>
              Start Quiz!
            </Link>
          </Button>
        )}

        {category && (
          <NewCardModal category={category} fetchCards={fetchCards} />
        )}
      </StyledBox>
      <CardsList
        category={category}
        filteredCards={filteredCards}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default CardsContainer;
