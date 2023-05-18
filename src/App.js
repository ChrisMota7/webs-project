import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './app/commonComponents/NavBar/NavBar';
import Competitions from './app/Competitions/Competitions'
import Championships from './app/Championships/Championships'
import Teams from './app/Team/Team'
import Home from './app/Home/Home'
import SignIn from './app/commonComponents/SignIn/SignIn';
import CreateUser from './app/Actions/Users/CreateUser';
import Users from './app/Users/Users';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <NavBar />
          </div>
          <div style={{ flex: 3, marginRight: '10px', marginLeft: '10px' }}>
            <Routes>
              <Route exact path='/' element={<SignIn />} />
              <Route path='/home' element={<Home />} />
              <Route path='/competitions' element={<Competitions />} />
              <Route path='/championships' element={<Championships />} />
              <Route path='/teams' element={<Teams />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/users' element={<Users />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
