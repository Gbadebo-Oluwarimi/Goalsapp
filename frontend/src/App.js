import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import './App.scss';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';


function App() {
  let history = useNavigate()
  function goBack(){
      history(-1)
  }
  return (
    <>
      <Routes>
      <Route index element={<Login back={goBack}/>}/>
      <Route path='/register' element={<Register back={goBack}/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
