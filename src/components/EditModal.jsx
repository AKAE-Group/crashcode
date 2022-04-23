import * as React from 'react';
import { TextField, Box, Button, Modal } from '@mui/material';

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

const EditModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [questionText, setQuestionText] = React.useState('');
  const [answerText, setAnswerText] = React.useState('');

  const handleQuestionChange = (event) => {
    setQuestionText(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleSubmit = (event) => {};

  return (
    <div>
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
                // defaultValue="Default Value"
              />
              <Button>Submit</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
