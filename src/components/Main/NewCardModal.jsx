import React, { useState } from 'react';
import { TextField, Box, Button, Modal } from '@mui/material';
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';

// Created separate style object for the Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Using styled-components to style the wrapper div
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewCardModal = ({ category, fetchCards, setAllCards, userId }) => {
  // State and handler functions to control Modal display
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Set of states to store Text values prior to submission
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  // Set of state mutators to store Text values in state prior to submission
  const handleQuestionChange = (event) => {
    setQuestionText(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  };

  // POST request to submit the creation text fields
  const addCard = async () => {
    const res = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        category: category,
        question: questionText,
        description: descriptionText,
        answer: answerText,
      }),
    }).then(fetchCards());
    const cardsList = await res.json();
    // Updates the allCards state to allow for re-render
    setAllCards(cardsList);
  };

  // Handler for when confirm button is clicked
  const handleSubmit = () => {
    addCard();
    setOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={handleOpen}>Add a Flashcard</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                id="question"
                label="Question"
                multiline
                required
                maxRows={4}
                value={questionText}
                onChange={handleQuestionChange}
              />

              <TextField
                id="answer"
                label="Answer"
                multiline
                required
                rows={6}
                value={answerText}
                onChange={handleAnswerChange}
              />
              <TextField
                id="description"
                label="Notes"
                multiline
                rows={3}
                value={descriptionText}
                onChange={handleDescriptionChange}
              />
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default NewCardModal;
