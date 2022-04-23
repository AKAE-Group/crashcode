import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import QuizPage from './components/Quiz/QuizPage.jsx';
import MainContainer from './components/Main/MainContainer.jsx';

import App from './App.jsx';
import './index.css';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="quiz"
        element={<QuizPage flashcards={SAMPLE_FLASHCARDS} />}
      />
      <Route path="main" element={<MainContainer />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);
