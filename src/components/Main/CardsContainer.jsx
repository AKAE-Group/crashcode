import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

// Using styled-components to style the Box
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
  // State to hold the selected category from the drop-down menu
  const [category, setCategory] = useState();
  // State to hold all cards fetched from the database
  const [allCards, setAllCards] = useState();
  // State to hold only the cards that match the selected category
  const [filteredCards, setFilteredCards] = useState();

  // Handler to change category state based on drop-down menu selection
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // GET request to fetch all cards from the database
  const fetchCards = () => {
    fetch('/api/cards?id=6264847b0c004122dd1841f9')
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  };

  // Invoke fetchCards only once upon render
  useEffect(() => {
    fetchCards();
  }, []);

  // Filter out the cards for selected category. Invoked everytime category or allCards states change.
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

  // Delete handler which takes in the cardId, sends DELETE request to server
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
          <NewCardModal
            category={category}
            fetchCards={fetchCards}
            setAllCards={setAllCards}
          />
        )}
      </StyledBox>

      <CardsList
        category={category}
        filteredCards={filteredCards}
        handleDelete={handleDelete}
        fetchCards={fetchCards}
        setAllCards={setAllCards}
      />
    </>
  );
};

export default CardsContainer;
