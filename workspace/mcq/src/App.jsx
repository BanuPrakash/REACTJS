
import QuestionContextProvider from './context/QuestionProvider';
import Question from './components/Question';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import Result from './components/Result';

import './App.css';
function App() {

  return (
    <QuestionContextProvider>
      <Header />
      <Question />
      <Footer />
    </QuestionContextProvider>
  );
}

export default App;
