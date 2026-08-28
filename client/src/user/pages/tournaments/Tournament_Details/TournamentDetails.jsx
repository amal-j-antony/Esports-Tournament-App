import SideBar from '@/common/components/SideBar'
import { FaDotCircle } from 'react-icons/fa'
import { FaArrowRight, FaBell, FaDiscord, FaFlag, FaGamepad, FaGlobe, FaPeopleGroup, FaTelegram, FaTrophy, FaWhatsapp, FaWifi, FaXTwitter } from 'react-icons/fa6'
import { getTournamentByIdAPI, updateTournamentStatusAPI } from '@/services/tournamentMethods'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '@/services/axiosInstance'
import { format } from 'date-fns'
import { VscDebugBreakpointLog } from "react-icons/vsc";
import TournamentStageRenderer from './TournamentStageRenderer'
import TournamentDetailStepper from './TournamentDetailStepper'
import { getOrganizationByID_API } from '@/services/organizationMethods'
import TBrackets from './TBrackets'
import TParticipants from './TParticipants'
import TLeaderboard from './TLeaderboard'
import TMatches from './TMatches'
import { catchErrorLog } from '@/common/components/errorLogging'
import { OrgContext } from '@/context/OrgProvider'
import { EditTournamentStatus } from './TDropdowns'
import { toast } from 'react-toastify'
import { HashLoader } from 'react-spinners'
import { tournamentStatus } from '@/data/universalStyles'
import { ClosedCTA, ComingSoonCTA, RegOpenCTA } from './RegCTA'
import { TOURNAMENT_STATUS } from '@/data/constants/tournamentStatus'


function TournamentDetails() {
  const [loading, setLoading] = useState(false)
  const { orgData, userOrgData } = useContext(OrgContext)
  const [tab, setTab] = useState('overview')
  const navigate = useNavigate()
  const [tournamentData, setTournamentData] = useState({
    status: "Loading"
  })
  const [organizationData, setOrganizationData] = useState({})
  const [stageIndex, setStageIndex] = useState(0)
  const { TID } = useParams()
  const tournamentDates = {
    registrationOpen: Date(tournamentData?.schedule?.registrationDate),
    start: Date(tournamentData?.schedule?.startDate)
  }
  console.log('regOPen:', tournamentDates);


  const registrationStatus = {
    Draft: "This tournament is unpublished and only visble to organization members",
    Open: "Open for registration",
    Closed: "Registration closed",
    Cancelled: "This tournament has been cancelled",
    Coming_Soon: "Registration opens soon"
  }

  const registrationStyle = {
    Draft: "text-gray-500 bg-gray-300/15 p-2 rounded-xl flex gap-2 items-center",
    Open: "text-green-500 bg-green-300/15 flex gap-2 p-2 rounded-xl items-center",
    Closed: "text-red-500 bg-red-300/15 flex gap-2 p-2 rounded-xl items-center",
    Coming_Soon: "bg-slate-50/30 flex gap-2 p-2 rounded-xl items-center"
  }

  const tabStyle = (tabName) => {
    if (tab == tabName) {
      return 'p-5 cursor-pointer border-b border-b-red-500 text-xl'
    } else return 'p-5 cursor-pointer border-b border-b-[#2f2f2f] text-xl'
  }

  const checkUserAccess = () => {
    const authorizedRoles = ['Leader', "CoLeader", 'Organizer']
    if (!orgData) {
      return false
    }
    if (orgData._id == tournamentData.orgID) {
      if (authorizedRoles.includes(userOrgData.role)) {
        return true
      }
    } else return false
  }

  const updateTournamentStatus = async (status) => {
    setLoading(true)
    try {
      const result = await updateTournamentStatusAPI({
        status,
        tID: TID
      })
      if (result.status == 200) {
        toast('Tournament status updated')
        getTournament()
      }
    } catch (error) {
      catchErrorLog('updateTournamentStatus', error)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const getOrgdata = async (orgID) => {
    try {
      const result = await getOrganizationByID_API(orgID)
      if (result.status == 200) {
        setOrganizationData(result.data)
      } else {
        console.log('Org data load failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getTournament = async () => {
    try {
      const result = await getTournamentByIdAPI(TID)
      console.log(result);
      if (result.status == 200) {
        setTournamentData(result.data)
        getOrgdata(result.data.orgID)
      }
    } catch (error) {
      catchErrorLog('getTournament', error)
    }
  }

  useEffect(() => {
    TID && getTournament()
  }, [TID])

  return (
    <main className='grid grid-cols-7 gap-1'>
      <SideBar currentTab={'tournaments'} />
      {
        loading ?
          <main className='w-full col-span-6 bg-card h-screen grid justify-center items-center'>
            <HashLoader color='#BA181B' />
          </main>
          :
          <section className="col-span-6 bg-card grid grid-cols-3  p-10 gap-5 relative" >

            <div className='col-span-3 row-span-1 w-full z-5 ' style={{
              backgroundImage: `${tournamentData.banner ? 'url(`${axiosInstance.defaults.baseURL}/${tournamentData?.banner}`)' : 'url(/pexels-slendyalex-3648850.jpg)'}`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <div className="grid grid-cols-9 bg-black/60 h-full items-center p-10 gap-10" >

                <img className='h-60 col-span-2 rounded-full w-60' src={`${axiosInstance.defaults.baseURL}/${tournamentData.image}`} alt="image" />
                <div className="col-span-7 flex flex-col justify-center gap-3">

                  <div className='flex'>
                    <h3 className={registrationStyle[tournamentData.status]}><FaDotCircle />{registrationStatus[tournamentData.status]}</h3>
                  </div>
                  <h1 className='text-2xl font-bold'>{tournamentData.name}</h1>
                  <div className="flex items-center gap-2">
                    <span className='flex items-center gap-2'><FaTrophy /> Podium Rewards </span>
                    <span className='flex items-center gap-2'><FaPeopleGroup /> {tournamentData?.settings?.maxTeamCount} </span>
                  </div>
                  <div className="flex gap-3">
                    <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                      <FaGamepad /> {tournamentData.game}
                    </span>

                    <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                      <FaGlobe />Worldwide
                    </span>

                    <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                      <FaWifi />{tournamentData?.settings?.hostMode}
                    </span>

                    <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl cursor-pointer'>
                      <FaBell />Get Notified
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {
              checkUserAccess() &&
              <div className="col-span-3 grid grid-cols-3 gap-x-10 gap-y-5 justify-center items-center bg-accent p-10">
                <h1 className="col-span-3 text-center text-xl font-bold">Update Tournament Settings</h1>
                {
                  tournamentData.status == 'Draft' &&
                  <>
                    <div className="col-span-3 grid justify-center gap-5">
                      <h1>Your tournament is not visible to other players until it is published</h1>
                      <button onClick={()=>updateTournamentStatus('Coming_Soon')} className="p-4 rounded-xl bg-[#5a5a5a] cursor-pointer hover:bg-[#6a6a6a] duration-500">Publish Now</button>
                    </div>
                    <hr className="col-span-3" />
                  </>
                }
                <EditTournamentStatus currentStatus={tournamentData?.status} updateTournamentStatus={updateTournamentStatus} />
                <button onClick={() => navigate(`/updateTournament/${tournamentData?._id}`)} className='bg-[#4B4B4B] p-4 rounded-2xl cursor-pointer' >Tournament Configuration</button>
                <button className='bg-[#4B4B4B] p-4 rounded-2xl cursor-pointer' >Seeding and Matchmaking</button>
                <p>Set registration and visibility of your tournament</p>
                <p>Update core tournament settings.Some settings cannot be changed after tournament starts</p>
                <p>Seed teams and set matchmaking preferences</p>
              </div>
            }
            <div className="col-span-2 row-span-3">
              <div className="flex gap-2">
                <button onClick={() => setTab('overview')} className={tabStyle('overview')} >Overview</button>
                <button onClick={() => setTab('bracket')} className={tabStyle('bracket')} >Bracket</button>
                <button onClick={() => setTab('participants')} className={tabStyle('participants')} >Participants</button>
                <button onClick={() => setTab('leaderboard')} className={tabStyle('leaderboard')} >Leaderboard</button>
                <button onClick={() => setTab('matches')} className={tabStyle("matches")} >Matches</button>
              </div>

              {/* tabs */}
              {
                tab == 'overview' &&
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 flex flex-col gap-3 p-10 mt-5 bg-accent rounded-2xl">
                    <h1 className='text-xl font-bold'>Tournament Announcements</h1>
                    <p className='flex items-center gap-2'><VscDebugBreakpointLog /> Registrations opening on {format(tournamentDates.registrationOpen, "PP")}</p>
                  </div>
                  <div className=" col-span-1 row-span-2 flex flex-col bg-accent rounded-2xl p-5 mt-5">
                    <h1 className='pb-3 text-xl font-bold'>Tournament Info</h1>
                    <div className='flex p-3 rounded-xl gap-2 bg-[#2a2a2a]'>
                      {
                        TID && tournamentData?.stageInfo?.map((item, index) => (
                          <button onClick={() => setStageIndex(index)} key={item.stageName} className="py-2 px-3 rounded-xl bg-[#4a4a4a]">{item.stageName}</button>
                        ))
                      }
                    </div>
                    <TournamentStageRenderer
                      tournamentData={tournamentData}
                      index={stageIndex} />

                  </div>
                  {
                    tournamentData?.enableRewards &&
                    <div className="col-span-2 p-5 bg-accent rounded-2xl">
                      <h1 className='text-xl font-bold'>Prize Pool</h1>
                      <div className="p-5 grid grid-cols-3 gap-3">
                        {
                          tournamentData.rewards.map((item, index) => (
                            <div className="border rounded-xl p-5" key={"poiiy" + index}>
                              <h1 className='text-xl font-bold'>{item.position}</h1>
                              <h2 className=''>{item.reward}</h2>
                              <h2 className=''>{item.description}</h2>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  }

                  <div className="col-span-3 bg-accent flex flex-col gap-5 p-10 rounded-2xl">
                    <h1 className='text-2xl font-bold'> Tournament schedule</h1>
                    {/* <Stepper steps={tournamentDetailsteps} schedule={tournamentData?.schedule}  /> */}
                    <TournamentDetailStepper schedule={tournamentData?.schedule} />
                  </div>

                  {
                    tournamentData?.rules?.length > 0 &&
                    <div className="col-span-3 bg-accent rounded-2xl p-10">
                      <h1 className='text-xl font-bold'>Rules</h1>
                      {
                        tournamentData.rules.map((item, index) => (
                          <React.Fragment key={'rule' + index}>

                          </React.Fragment>
                        ))
                      }
                    </div>}
                </div>}

              {
                tab == 'bracket' &&
                <TBrackets />
              }

              {
                tab == 'participants' &&
                <TParticipants />
              }

              {
                tab == 'leaderboard' &&
                <TLeaderboard />
              }

              {
                tab == 'matches' &&
                <TMatches />
              }

            </div>
            <div className="row-span-3 flex flex-col gap-5">
              <div className="flex flex-col gap-5 bg-[#1f1f1f] p-10 rounded-2xl">
                <h1 className='text-2xl font-bold'>Tournament Status</h1>
                <div className="flex justify-between">
                  <span>Registration</span>
                  <span className={tournamentStatus[tournamentData?.status].style}>{tournamentStatus[tournamentData?.status].text}</span>
                </div>
                <div className="flex justify-between">
                  <span>Teams registered:</span>
                  <span className=''>0/{tournamentData?.settings?.maxTeamCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Starts in</span>
                  <span className=' text-green-400 '>20d</span>
                </div>
              </div>

              {/* registration CTA */}
              { tournamentData.status == TOURNAMENT_STATUS.OPEN && <RegOpenCTA schedule={tournamentData.schedule} /> }

              { tournamentData.status == TOURNAMENT_STATUS.CLOSED && <ClosedCTA schedule={tournamentData.schedule} /> }

              { tournamentData.status == TOURNAMENT_STATUS.COMING_SOON && <ComingSoonCTA schedule={tournamentData.schedule} /> }

              <div className="flex flex-col gap-5 bg-[#1f1f1f] p-10 rounded-2xl">
                <h1 className='text-2xl font-bold'>Tournament Organizer</h1>
                <div className="flex gap-5 items-center ">
                  <img src={`${axiosInstance.defaults.baseURL}/${organizationData.oLogo}`} className='h-30 w-30 rounded-full' alt="" />
                  <h1 className='text-xl'>{organizationData.oName}</h1>
                </div>
                <button onClick={() => navigate(`/organization/view/${organizationData._id}`)} className='bg-accent py-3 rounded-2xl text-xl cursor-pointer'>View profile</button>
              </div>
              <div className=" p-10 rounded-2xl bg-[#1f1f1f]">
                <h1>Share Tournament</h1>
                <div className="flex items-center gap-5">
                  <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                    <FaWhatsapp className='text-green-500 text-5xl' />
                  </div>
                  <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                    <FaDiscord className='text-blue-500 text-5xl' />
                  </div>
                  <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                    <FaXTwitter className=' text-5xl' />
                  </div>
                  <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                    <FaTelegram className='text-blue-500 text-5xl' />
                  </div>
                </div>
              </div>
              <div className="p-10 rounded-2xl bg-[#1f1f1f]">
                <h1 className='text-2xl font-bold'>Report Tournament</h1>
                <p className='my-5'>Found an issue with this tournament?</p>
                <button className='rounded-2xl px-5 py-3 flex items-center gap-2 bg-card  '><FaFlag className='text-red-500' />Report</button>
              </div>
            </div>
          </section>}
    </main>
  )
}

export default TournamentDetails

{/* <span className='flex items-center gap-2 text-2xl font-bold'><img src="/trophy-award.png" className='h-5 ' alt="" />10,000$</span>
                  <hr />
                  <div className="flex gap-5 px-5">
                    <div className="">
                      <h1>1st place</h1>
                      <span>$5000</span>
                    </div>
                    <Separator orientation='vertical' />
                    <div className="">
                      <h1>2nd place</h1>
                      <span>$3000</span>
                    </div>

                    <Separator orientation='vertical' />
                    <div className="">
                      <h1>3rd place</h1>
                      <span>$1000</span>
                    </div>

                    <Separator orientation='vertical' />
                    <div className="">
                      <h1>4th place</h1>
                      <span>$1000</span>
                    </div>
                  </div> */}