import * as React from 'react';
import { TextField, Box, Button, Modal } from '@mui/material';
import { useQuery, useMutation } from 'react-query';
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewCardModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [questionText, setQuestionText] = React.useState('');
  const [answerText, setAnswerText] = React.useState('');
  const [descriptionText, setDescriptionText] = React.useState('');
  const [allCards, setAllCards] = React.useState();

  const handleQuestionChange = (event) => {
    setQuestionText(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  };

  const addCard = async () => {
    const res = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '6264847b0c004122dd1841f9',
        category: props.category,
        question: questionText,
        description: descriptionText,
        answer: answerText,
      }),
    });
    const cardsList = await res.json();
    setAllCards(cardsList);
  };

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
                maxRows={4}
                value={questionText}
                onChange={handleQuestionChange}
              />

              <TextField
                id="answer"
                label="Answer"
                multiline
                rows={4}
                value={answerText}
                onChange={handleAnswerChange}
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
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
