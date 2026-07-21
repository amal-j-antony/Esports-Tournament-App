import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/pages/Home'
import 'animate.css';
import PageNotFound from './common/pages/PageNotFound';
import Login from './common/pages/Login';
import Register from './common/pages/Register';
import UserDashboard from './user/pages/UserDashboard';
import LeaderBoard from './common/pages/LeaderBoard';
import UserTournaments from './user/tabs/UserTournaments';
import Tournament from './tournaments/Tournament';
import TournamentDetails from './tournaments/TournamentDetails';
import CreateTournament from './tournaments/CreateTournament';

function App() {


  return (
    <>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />
        <Route path='/createTournament' element={<CreateTournament/>} />
        {/* login */}
        <Route path='/login' element={<Login/>} />
        {/* register */}
        <Route path='/register' element={<Register/>} />
        {/* user dashboard */}
        <Route path='/user/:id/dashboard/' element={<UserDashboard/>} />
        {/* discover tournaments*/}
        <Route path='/tournaments' element={<Tournament/>} />
        {/* game page */}
        <Route path='/user/:id/tournaments/:game' />
        {/* tournament details */}
        <Route path='/tournaments/:tournamentID' element={<TournamentDetails/>} />
        {/* Leaderboard */}
        <Route path='/user/:id/leaderboard/' element={<LeaderBoard/>} />
        {/* Page not found */}
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App


 {/* discover tournament old */}
        {/* <Route path='/user/:id/tournaments/' element={<Tournament/>} /> */}