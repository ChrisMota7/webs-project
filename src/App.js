import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './app/commonComponents/NavBar/NavBar';
import Competitions from './app/Competitions/Competitions'
import Championships from './app/Championships/Championships'
import Teams from './app/Teams/Teams'
import Home from './app/Home/Home'
import SignIn from './app/commonComponents/SignIn/SignIn';
import CreateUser from './app/Actions/Users/CreateUser';
import UpdateUser from './app/Actions/Users/UpdateUser'
import Users from './app/Users/Users';
import Players from './app/Players/Players';
import CreateChampionship from './app/Actions/Championships/CreateChampionship';
import UpdateChampionship from './app/Actions/Championships/UpdateChampionship';
import CreateTeam from './app/Actions/Teams/CreateTeam'
import UpdateTeam from './app/Actions/Teams/UpdateTeam'
import CreateCompetition from './app/Actions/Competitions/CreateCompetition'
import UpdateCompetition from './app/Actions/Competitions/UpdateCompetition';
import Points from './app/Points/Points';
import { AuthProvider } from './controller/AuthContext';

class App extends Component {
  render() {
    return(
      <AuthProvider>
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
              <Route path='/create-competition' element={<CreateCompetition />} />
              <Route path='/update-competition' element={<UpdateCompetition />} />
              <Route path='/points' element={<Points />} />
              <Route path='/championships' element={<Championships />} />
              <Route path='/teams' element={<Teams />} />
              <Route path='/create-team' element={<CreateTeam />} />
              <Route path='/update-team' element={<UpdateTeam />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/update-user' element={<UpdateUser />} />
              <Route path='/users' element={<Users />} />
              <Route path='/players' element={<Players />} />
              <Route path='/create-championship' element={<CreateChampionship />} />
              <Route path='/update-championship' element={<UpdateChampionship />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      </AuthProvider>
    )
  }
}

export default App;
