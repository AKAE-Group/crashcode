import * as React from 'react';
import styled from 'styled-components';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Button,
} from '@mui/material';

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

const dummyData = [
  { question: 'What is a variable?', answer: 'it is a variable, duh' },
  { question: '' },
];

const ActionsContainer = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
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
        Start Quiz!
      </Button>
    </StyledBox>
  );
};

export default ActionsContainer;
