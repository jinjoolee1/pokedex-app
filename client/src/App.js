import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <>
    <div>
      <Routes> 
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
       
      </Routes>
    </div>
    </>
  );
}

export default App;
