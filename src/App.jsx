import MainContainer from './components/Containers/MainContainer.jsx';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import React, { useState } from 'react';
import './index.css';
import SignInOutContainer from './components/SignInOutContainer.jsx';
import QuizPage from './quizPage.jsx';

const queryClient = new QueryClient();

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainContainer />
        <SignInOutContainer />
        <QuizPage flashcards={flashcards} />
      </div>
    </QueryClientProvider>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is Andrew's last name?",
    answer: 'Widjaja',
  },
  {
    id: 2,
    question: "What is Em's last name?",
    answer: 'Podhorcer',
  },
  {
    id: 3,
    question: "What is Kevin's last name?",
    answer: 'Le',
  },
  {
    id: 4,
    question: "What is Anna's last name?",
    answer: 'Shen',
  },
];

export default App;
