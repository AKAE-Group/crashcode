import React, { useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams, useLocation} from 'react-router-dom';

import CodeMirror, { fromCodePoint } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


import { AppBar, Toolbar, Container } from '@mui/material';
import NavBar from '../Main/NavBar.jsx';

import '../../index.css'

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


  return (
    <>
    <NavBar/>
  
    <Button variant="contained" color="success" size="large">
        <Link to="/main">Back to Main Page</Link>
      </Button>
    <div className="QuizDisplay">
      <Card className="Questionbox">

        <div className={`card ${flip? 'flip' : ''}`} onClick = {() => setFlip(!flip)}>
          <div className="front"> {location.state.cards[count].question} </div>
          <div className="back"> {location.state.cards[count].answer} </div>
        </div>



{/*       
        <CardContent>
          <Typography>
            {flip ? location.state.cards[count].answer : location.state.cards[count].question}
          </Typography>
        </CardContent> */}
        


        <CardActions>
          {/* <Button onClick={() => setFlip(!flip)} size="small">
            Check Answer
          </Button> */}
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
    </>
  );
}

export default QuizPage;
