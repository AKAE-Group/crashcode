import MainContainer from './components/Main/MainContainer.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './index.css';
import SignInOutContainer from './components/Authentication/SignInOutContainer.jsx';
import QuizPage from './components/Quiz/QuizPage.jsx';

const queryClient = new QueryClient();

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Link to="/main">Main Page</Link>
        <SignInOutContainer />
        {/* <MainContainer /> */}
        {/* <QuizPage flashcards={flashcards} /> */}
      </div>

      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="quiz" element={<QuizPage flashcards={flashcards}/>} />
      <Route path="main" element={<MainContainer />} />
    </Routes>
    <App />
  </BrowserRouter> */}
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
