import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.scss';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';



function App() {
 
  return (
    <>
    <Router>
      <Routes>
      <Route index element={<Login/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
