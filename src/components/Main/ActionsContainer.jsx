import * as React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';
import NewCardModal from './NewCardModal.jsx';
import CardsContainer from './CardsContainer.jsx';

const StyledBox = styled(Box)`
  /* min-width: 120;
  max-width: 500; */
  width: 500;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const DUMMY_DATA = [
  {
    question: 'what is the meaning of life?',
    answer: 'idk',
    category: 'javascript',
  },
  {
    question: 'what is a variable',
    answer: 'something that is variable',
    category: 'react',
  },
  {
    question: 'Create a React functional component named Box',
    answer: 'Some code here',
    category: 'react',
  },
  {
    question: 'Write a function that fetches data from the database',
    answer: 'something that is variable',
    category: 'express',
  },
];

// *** Uncomment when authentication is set up
// const fetchCards = () => {
//   fetch('/api/cards')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

const ActionsContainer = () => {
  // *** Uncomment when authentication is set up
  //   const { data, status } = useQuery('cards', fetchCards); // Using useQuery hook from React Query to handle fetched data
  const [category, setCategory] = React.useState('');

  const filter = () => {
    const filteredCards = [];
    if (DUMMY_DATA.length) {
      for (const card in DUMMY_DATA) {
        if (card.category === category) filteredCards.push(card);
      }
    }
    return filteredCards;
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <StyledBox sx={{ minWidth: 120, maxWidth: 300 }}>
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
        <Button variant="contained" color="success" size="large">
          <Link to="/quiz" style={{ textDecoration: 'none', color: 'white' }}>
            Start Quiz
          </Link>
        </Button>

        <NewCardModal />
      </StyledBox>
      <CardsContainer data={DUMMY_DATA} category={category} />
    </>
  );
};

export default ActionsContainer;
