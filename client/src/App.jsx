import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/pages/Home'
import 'animate.css';
import PageNotFound from './common/pages/PageNotFound';
import Login from './common/pages/Login';
import Register from './common/pages/Register';
import LeaderBoard from './common/pages/LeaderBoard';
import TournamentDetails from './tournaments/Tournament_Details/TournamentDetails';
import CreateTournament from './tournaments/Tournament_Creation/CreateTournament';
import Popular from './user/pages/Popular';
import Tournaments from './user/pages/Tournaments';
import Squads from './user/pages/Squads';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';
import Messages from './user/pages/Messages';
import Clan from './user/pages/Clan';
import { Bounce, ToastContainer } from 'react-toastify';
import { getAuthenticationStatusAPI } from './services/accountMethods';
import { useAuth } from './context/AuthProvider';



function App() {
  const { login } = useAuth()

  const tryAuth = async () => {
    const result = await getAuthenticationStatusAPI()
      if(result.status == 200){
          console.log(result);
          login(result.data.details)
          
      }else{
        console.log("User not logged in");
        
      }
  }

  useEffect(()=>{
    tryAuth()
  },[])
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
        <Route path='/dashboard/discover/:userID' element={<Popular />} />
        {/* dashboard: tournaments*/}
        <Route path='/dashboard/tournaments/:userID' element={<Tournaments />} />
        {/* dashboard: squads*/}
        <Route path='/dashboard/squads/:userID' element={<Squads />} />
        {/* dashboard: notiications*/}
        <Route path='/dashboard/notifications/:userID' element={<Notifications />} />
        {/* dashboard: profile*/}
        <Route path='/dashboard/profile/:userID' element={<Profile />} />
        {/* dashboard: messages*/}
        <Route path='/dashboard/messages/:userID' element={<Messages />} />
        {/* dashboard: clan*/}
        <Route path='/dashboard/clan/:userID' element={<Clan />} />        
        {/* tournament details */}
        <Route path='/tournaments/:tournamentID' element={<TournamentDetails />} />
        {/* Leaderboard */}
        <Route path='/leaderboard/:userID' element={<LeaderBoard />} />
        {/* Page not found */}
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App


{/* discover tournament old */ }
{/* <Route path='/user/:id/tournaments/' element={<Tournament/>} /> */ }