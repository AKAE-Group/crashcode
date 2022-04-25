import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams, useLocation} from 'react-router-dom';

import CodeMirror, { fromCodePoint } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


function QuizPage({ flashcards }) {
  // added for carrying state from main route to quiz route 
  const { category } = useParams();
  //console.log('passed category: ', category);

  const [flip, setFlip] = useState(false);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState();
  
  //fetch card
  const [notes, setNotes] = useState([{
    category: '',
  }])
  const [filteredCards, setFilteredCards] = useState();

  useEffect(() => {
    const filtered = [];
    fetch('/api/cards?id=6264847b0c004122dd1841f9')
    .then(res => res.json())
    .then(data => data.filter(card => card.category === category))
    .then(data => {
      setNotes(data)
      setLimit(data.length)});
  });

  //
  function displayQuestion() {
    setFlip(false);
    if (count === limit - 1) setCount(0);
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
            {flip ? notes[count].answer : notes[count].question}
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
