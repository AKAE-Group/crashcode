import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid,
  CssBaseline,
  Container,
  Modal,
  Typography,
  Button,
  Stack,
  TextField,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const StyledCont = styled(Container)`
  margin-top: 2rem;
`;

const CardsList = ({
  category,
  filteredCards,
  handleDelete,
  fetchCards,
  setAllCards,
}) => {
  const [selectedCard, setSelectedCard] = useState();
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQuestionChange = (event) => {
    setQuestionText(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  };

  const updateCard = async (cardId) => {
    const res = await fetch('/api/cards', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '6264847b0c004122dd1841f9',
        cardId: cardId,
        category: category,
        question: questionText,
        description: descriptionText,
        answer: answerText,
      }),
    }).then(fetchCards());
    const cardsList = await res.json();
    setAllCards(cardsList);
  };

  const handleClick = (cardId) => {
    setSelectedCard(cardId);
    // handleDelete(cardId);
    handleOpen();
  };

  const handleConfirm = () => {
    handleDelete(selectedCard);
    handleClose();
  };

  const handleSubmit = () => {
    // insert POST request here, passing in selectedCard
    updateCard(selectedCard);
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <StyledCont maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {category === 'none' && <div>Select a category to begin</div>}
            {filteredCards &&
              filteredCards.map((card) => (
                <>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={card._id}
                    onClick={() => handleClick(card._id)}>
                    <Item>{card.question}</Item>
                  </Grid>
                </>
              ))}

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
                    <Button onClick={handleSubmit}>Update</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                  </div>
                </Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Delete this flashcard?
                </Typography>
                <Stack spacing={2} direction="row" marginTop="2rem">
                  <Button variant="text" onClick={handleConfirm}>
                    {/* <Button variant="outlined" onClick={handleClose}> */}
                    Confirm
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </Grid>
        </Box>
      </StyledCont>
    </>
  );
};
export default CardsList;
