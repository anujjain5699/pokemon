import React, { Component } from 'react';
import Pokegame from './Pokegame';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user}/>
        {/* <Pokegame/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
