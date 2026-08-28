import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/pages/Home'
import 'animate.css';
import PageNotFound from './common/pages/PageNotFound';
import Login from './common/pages/Login';
import Register from './common/pages/Register';
import LeaderBoard from './common/pages/LeaderBoard';
import TournamentDetails from './user/pages/tournaments/Tournament_Details/TournamentDetails';
import CreateTournament from './user/pages/tournaments/Tournament_Creation/CreateTournament';
import Popular from './user/pages/Popular';
import Tournaments from './user/pages/Tournaments';
import Squads from './user/pages/squads/Squads';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';
import Messages from './user/pages/Messages';
import Clan from './user/pages/Clan';
import { Bounce, ToastContainer } from 'react-toastify';
import { getAuthenticationStatusAPI } from './services/accountMethods';
import { useAuth } from './context/AuthProvider';
import Organization from './organization/Organization';
import OrganizationCreatorWizard from './organization/create Organization/OrganizationCreatorWizard';
import { socket } from './services/webSocket';
import { NoOrgMenu } from './organization/noOrgMenu';
import { OrgContext } from './context/OrgProvider';
import OrgCreatedTournaments from './organization/OrgCreatedTournaments';
import OrganizationSettings from './organization/OrganizationSettings';
import ViewOrganizations from './organization/allOrganizations/ViewOrganizations';
import { HashLoader } from 'react-spinners'
import CreateSquad from './user/pages/squads/CreateSquad';
import { getUserOrganizationAPI } from './services/organizationMethods';



function App() {
  const { login } = useAuth()
  const { loadOrgData } = useContext(OrgContext)
  const [loading, setLoading] = useState(true)

  const getOrgDetails = async (userID) => {
    try {
      const result = await getUserOrganizationAPI(userID)
      console.log("orgdetails-userID", userID);

      if (result.status == 200) {
        loadOrgData(result.data, userID)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    const tryAuth = async () => {
      const result = await getAuthenticationStatusAPI()
      if (result.status == 200) {
        console.log(result);
        login(result.data.details)
        getOrgDetails(result?.data.details?.userID)
        console.log("user ID", result?.data.details?.userID);
        socket.auth = {
          user: result?.data.details?.userID
        }
        socket.connect()
        console.log('Socket connected', socket.auth);

      } else {
        console.log("User not logged in");

      }
    }
    tryAuth()
    
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <>
      {
        loading ?
          <main className='w-full h-screen grid justify-center items-center'>
            <HashLoader color='#BA181B' />
          </main>
          :
          <>
            <Routes>
              {/* Home */}
              <Route path='/' element={<Home />} />
              {/* update Tournament */}
              <Route path='/updateTournament/:TID' element={<CreateTournament />} />
              {/* create Tournament */}
              <Route path='/createTournament' element={<CreateTournament />} />
              {/* login */}
              <Route path='/login' element={<Login getOrgDetails={getOrgDetails} />} />
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
              <Route path='/tournaments/:TID' element={<TournamentDetails />} />
              {/* Leaderboard */}
              <Route path='/leaderboard/:userID' element={<LeaderBoard />} />
              {/* Organization page home */}
              <Route path='/organization/view/:orgID' element={<Organization view />} />
              <Route path='/organization/:userID/home' element={<Organization />} />
              {/* organization Tournaments */}
              <Route path='/organization/:userID/tournaments' element={<OrgCreatedTournaments />} />
              {/* orgSettings */}
              <Route path='/organization/:userID/settings' element={<OrganizationSettings />} />
              {/* users without an org redirected here */}
              <Route path='/organization/none' element={<NoOrgMenu />} />
              {/* create organization */}
              <Route path='/create-organization' element={<OrganizationCreatorWizard />} />
              {/* join existing organizations */}
              <Route path='/view-organization' element={<ViewOrganizations />} />
              {/* create Squad */}
              <Route path='/createSquad' element={<CreateSquad />} />
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
      }


    </>
  )
}

export default App


{/* discover tournament old */ }
{/* <Route path='/user/:id/tournaments/' element={<Tournament/>} /> */ }