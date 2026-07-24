import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/pages/Home'
import 'animate.css';
import PageNotFound from './common/pages/PageNotFound';
import Login from './common/pages/Login';
import Register from './common/pages/Register';
import LeaderBoard from './common/pages/LeaderBoard';
import TournamentDetails from './tournaments/TournamentDetails';
import CreateTournament from './tournaments/CreateTournament';
import Popular from './user/pages/Popular';
import Tournaments from './user/pages/Tournaments';
import Squads from './user/pages/Squads';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';
import Messages from './user/pages/Messages';
import Clan from './user/pages/Clan';
import { Bounce, ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />
        <Route path='/createTournament' element={<CreateTournament />} />
        {/* login */}
        <Route path='/login' element={<Login />} />
        {/* register */}
        <Route path='/register' element={<Register />} />
        {/* dashboard: popular */}
        <Route path='/dashboard/popular' element={<Popular />} />
        {/* dashboard: tournaments*/}
        <Route path='/dashboard/tournaments' element={<Tournaments />} />
        {/* dashboard: squads*/}
        <Route path='/dashboard/squads' element={<Squads />} />
        {/* dashboard: notiications*/}
        <Route path='/dashboard/notifications' element={<Notifications />} />
        {/* dashboard: profile*/}
        <Route path='/dashboard/profile' element={<Profile />} />
        {/* dashboard: messages*/}
        <Route path='/dashboard/messages' element={<Messages />} />
        {/* dashboard: clan*/}
        <Route path='/dashboard/clan' element={<Clan />} />
        {/* game page */}
        <Route path='/user/:id/tournaments/:game' />
        {/* tournament details */}
        <Route path='/tournaments/:tournamentID' element={<TournamentDetails />} />
        {/* Leaderboard */}
        <Route path='/user/:id/leaderboard/' element={<LeaderBoard />} />
        {/* Page not found */}
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App


{/* discover tournament old */ }
{/* <Route path='/user/:id/tournaments/' element={<Tournament/>} /> */ }