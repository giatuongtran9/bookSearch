import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Main from './components/Main/Main';
import BookDetail from './components/BookDetail/BookDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/book" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;