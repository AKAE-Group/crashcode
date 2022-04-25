import React, { useState } from 'react';
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

// Created separate style object for the Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
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

// Destructuring props passed in from CardsContainer.jsx
const CardsList = ({
  category,
  filteredCards,
  handleDelete,
  fetchCards,
  setAllCards,
  userId,
}) => {
  // State to hold the selected card's id, for the update/delete requests
  const [selectedCardId, setSelectedCardId] = useState();
  // Set of states to store Text values prior to submission
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  // State and close handler to control Modal display
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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

  // PUT request to submit the update text fields
  const updateCard = async (cardId) => {
    const res = await fetch('/api/cards', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        cardId: cardId,
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

  // Handler for when a card is clicked
  const handleClick = (cardId) => {
    setSelectedCardId(cardId);
    setOpen(true);
  };

  // Handler for when Delete confirm button is clicked
  const handleConfirm = () => {
    handleDelete(selectedCardId);
    handleClose();
  };

  // Handler for when Update confirm button is clicked
  const handleSubmit = () => {
    updateCard(selectedCardId);
    handleClose();
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

            {/* Modal displayed only after a card clicked */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off">
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2">
                      Enter new details to update the flashcard
                    </Typography>
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
                  </div>
                </Box>
                <Stack
                  direction="row"
                  marginTop="2rem"
                  display="flex"
                  width="55ch"
                  justifyContent="space-between">
                  <div>
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      style={{ marginRight: '1rem' }}>
                      Update
                    </Button>
                    <Button onClick={handleClose} variant="outlined">
                      Cancel
                    </Button>
                  </div>
                  <Button variant="text" color="error" onClick={handleConfirm}>
                    Delete
                  </Button>
                  {/* <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button> */}
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
