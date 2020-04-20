import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import { Route, Link } from "react-router-dom"
import Login from './components/Login'
import SlModal from './components/SignupLoginModal'

function App() {
  return (
    <body>
      <Link to='/feed'>
        <h4>Chirper</h4>
      </Link>
      <Feed />
      {/* <SlModal /> */}

    </body>
  );
}

export default App;
