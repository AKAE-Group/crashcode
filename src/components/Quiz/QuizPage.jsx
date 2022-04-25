import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams, useLocation } from 'react-router-dom';

import CodeMirror, { fromCodePoint } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { AppBar, Toolbar, Container } from '@mui/material';
import NavBar from '../Main/NavBar.jsx';

import '../../index.css';
const cardStyle = { padding: 20, height: 300, width: 500, margin: '0 auto' };
const cardActionsStyle = {
  padding: 20,
  height: 300,
  width: 500,
  margin: '0 auto',
};

function QuizPage({ flashcards }) {
  // added for carrying state from main route to quiz route
  const { category } = useParams();
  //console.log('passed category: ', category);

  const [flip, setFlip] = useState(false);
  const [count, setCount] = useState(0);

  const location = useLocation();

  console.log('props being passed: ', location.state.cards);

  function displayQuestion() {
    setFlip(false);
    if (count === location.state.cards.length - 1) setCount(0);
    else setCount(count + 1);
  }

  let userId = location.state.userId;
  console.log('userId', location.state.userId);

  return (
    <div>
      <NavBar />

      <div className="QuizDisplay">
        <Button
          variant="contained"
          color="primary"
          size="large"
          position="center">
          <Link
            to="/main"
            state={{ isLoggedIn: true, userId: userId }}
            style={{ textDecoration: 'none' }}>
            <Typography color="common.white"> Back to Main Page </Typography>
          </Link>
        </Button>

        <div
          className={`card ${flip ? 'flip' : ''}`}
          onClick={() => setFlip(!flip)}>
          <div className="front"> {location.state.cards[count].question} </div>
          <div className="back"> {location.state.cards[count].answer} </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={displayQuestion}
          size="large"
          textColor
          position="center"
          style={{ color: 'black' }}>
          <Typography color="common.white">Next Question</Typography>
        </Button>

        {/* import code mirror ide */}
        <CodeMirror
          className="inputIDE"
          value="Type your answer here!"
          height="300px"
          width="540px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
      </div>
    </div>
  );
}

export default QuizPage;
