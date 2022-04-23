import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import CodeMirror, { fromCodePoint } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function QuizPage({ flashcards }) {
  const [flip, setFlip] = useState(false);
  const [count, setCount] = useState(0);

  function displayQuestion() {
    setFlip(false);
    if (count === flashcards.length - 1) setCount(0);
    else setCount(count + 1);
  }

  return (
    <div className="QuizDisplay">
      <Button variant="contained" color="success" size="large">
        <Link to="/main">Back to Main Page</Link>
      </Button>
      <Card className="Questionbox">
        <CardContent>
          <Typography>
            {flip ? flashcards[count].answer : flashcards[count].question}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setFlip(!flip)} size="small">
            Check Answer
          </Button>
          <Button
            onClick={displayQuestion}
            size="small"
            style={{ color: 'black' }}>
            Next Question
          </Button>
        </CardActions>
      </Card>

      {/* import code mirror ide */}
      <CodeMirror
        className="inputIDE"
        value="Type your answer here!"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
        }}
      />
    </div>
  );
}

export default QuizPage;
