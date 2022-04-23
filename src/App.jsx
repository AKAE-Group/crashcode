import React, { useState } from 'react';
import './index.css';
import  QuizPage  from './quizPage.jsx';


function App() {
  const[flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div className="App">
      <QuizPage flashcards = {flashcards}/>
    </div>
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1, 
    question: 'What is Andrew\'s last name?',
    answer: 'Widjaja'
  },
  {
    id: 2, 
    question: 'What is Em\'s last name?',
    answer: 'Podhorcer'
  },
  {
    id: 3, 
    question: 'What is Kevin\'s last name?',
    answer: 'Le'
  },
  {
    id: 4, 
    question: 'What is Anna\'s last name?',
    answer: 'Shen'
  }
]



export default App;
