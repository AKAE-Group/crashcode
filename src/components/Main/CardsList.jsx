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
} from '@mui/material';

import { useQuery } from 'react-query';

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
  width: 400,
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

const CardsList = ({ category, filteredCards, handleDelete }) => {
  // const [allCards, setAllCards] = useState();
  // const [filteredCards, setFilteredCards] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleDelete = (cardId) => {
  //   // userId is hard-coded in for now. Need to change after auth is set up
  //   console.log(cardId);
  //   fetch(`/api/cards/6264847b0c004122dd1841f9/${cardId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   }).then(fetchCards());
  //   handleOpen();
  // };

  // const fetchCards = () => {
  //   fetch('/api/cards?id=6264847b0c004122dd1841f9')
  //     .then((res) => res.json())
  //     .then((data) => setAllCards(data));
  // };

  // useEffect(() => {
  //   fetchCards();
  // }, []);

  // useEffect(() => {
  //   const filtered = [];
  //   if (allCards) {
  //     for (const card of allCards) {
  //       if (card.category === props.category) {
  //         filtered.push(card);
  //       }
  //     }
  //     setFilteredCards(filtered);
  //   }
  // }, [props.category, allCards]);

  const handleClick = (cardId) => {
    handleDelete(cardId);
    handleOpen();
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

                  {/* Modal Popup When Flashcard is Clicked */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        The flashcard has been deleted
                      </Typography>
                      <Stack spacing={2} direction="row" marginTop="2rem">
                        <Button variant="outlined" onClick={handleClose}>
                          Confirm
                        </Button>
                      </Stack>
                    </Box>
                  </Modal>
                </>
              ))}
          </Grid>
        </Box>
      </StyledCont>
    </>
  );
};
export default CardsList;
