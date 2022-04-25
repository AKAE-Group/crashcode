import React, { useState } from 'react';
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

const ActionsContainer = () => {
  const [category, setCategory] = useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
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

        {category && <NewCardModal category={category} />}
      </StyledBox>
      <CardsList category={category} />
    </>
  );
};

export default ActionsContainer;
