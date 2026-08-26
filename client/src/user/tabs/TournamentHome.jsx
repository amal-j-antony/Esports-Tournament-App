
import { useContext, useEffect, useState } from 'react'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { FaCalendar, FaGamepad, FaPlus, FaTrophy } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { esportsTitles } from '@/data/gameList'
import { OrgContext } from '@/context/OrgProvider'
import { OrganiationRoles } from '@/data/constants/roles'
import { toast } from 'react-toastify'
import { useAuth } from '@/context/AuthProvider'
import { getAllTournamentsAPI } from '@/services/tournamentMethods'
import { axiosInstance } from '@/services/axiosInstance'
import { format } from 'date-fns'
import { getAllOrganizationsAPI } from '@/services/organizationMethods'
import { catchErrorLog } from '@/common/components/errorLogging'

function TournamentHome() {
    const [tournamentData, setTournamentData] = useState([])
    const [organizationData, setOrganizationData] = useState([])
    const gameList = esportsTitles.map(item => item.name)
    const navigate = useNavigate()
    const status = ["open", "coming soon", "live"]
    const { userOrgData } = useContext(OrgContext)
    const { user } = useAuth()
    const handleCreateTournament = () => {
        if (!userOrgData) {
            toast('Please create or join an organization to host tournaments')
            return
        }

        if (userOrgData.role == OrganiationRoles.LEADER || userOrgData.role == OrganiationRoles.CO_LEADER) {
            navigate(`/organization/${user.userID}/tournaments`)
        } else {
            toast('You do not have permission to create tournaments')
        }
    }

    const tournamentStatus = {
        Draft: {
            text: "Draft",
            style: "bg-gray-700 text-gray-400 px-2 rounded-2xl"
        },
        Open: {
            text: "Open",
            style: "bg-green-700 text-green-400 px-2 rounded-2xl"
        },
        Closed: {
            text: "Closed",
            style: "bg-red-700 text-red-400 px-2 rounded-2xl"
        },
        Coming_Soon: {
            text: "Coming soon",
            style: "bg-slate-50 px-2 rounded-2xl"
        },
        Loading: {
            text: "Loading...",
            style: "bg-slate-50 px-2 rounded-2xl"
        }
    }


    useEffect(() => {
        const getTournaments = async () => {
            try {
                const result = await getAllTournamentsAPI()
                if (result.status == 200) {
                    setTournamentData(result.data)
                }
            } catch (error) {
                console.log({
                    location: "getTournaments",
                    error
                });
            }
        }

        const getOrganizations = async () => {
            try {
                const result = await getAllOrganizationsAPI()
                if (result.status == 200) {
                    setOrganizationData(result.data)
                }
            } catch (error) {
                catchErrorLog('tournamentHome/getOrganizations', error)
            }
        }
        getTournaments()
        getOrganizations()
    }, [])
    return (
        <>
            <section className='col-span-5 h-full min-h-screen flex flex-col bg-card'>

                {/* search bar */}
                <div className="flex justify-center items-center relative gap-4 pt-10 pb-5">
                    <button onClick={() => handleCreateTournament()} className='py-3 px-5 cursor-pointer bg-accent rounded-3xl flex items-center gap-2 hover:bg-accent-foreground duration-500 text-sm'><FaPlus /> Create Tournament</button>
                    {/* <input type="text" placeholder='Search for a game' className='bg-accent text-center p-3 w-1/2 rounded-3xl' /> */}
                    <Combobox items={gameList}>
                        <ComboboxInput className="h-11 w-1/2 text-center rounded-3xl" placeholder="Select Game" />
                        <ComboboxContent className="">
                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                        {item}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>

                    {/* <button className="p-2 bg-[#3f3f3f] rounded-3xl"><SearchIcon /></button> */}
                    <Combobox items={status}>
                        <ComboboxInput className="h-11 rounded-3xl" placeholder="Tournament Status" />
                        <ComboboxContent className="">
                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                        {item}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                </div>
                {/* view games */}
                <div className="flex gap-10 p-10">
                    <div onClick={() => navigate("/tournaments/1")} className="p-5 bg-accent flex flex-col gap-5 cursor-pointer hover:bg-[#5a5a5a] duration-500">
                        <img className='w-75 h-75 object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784263441/Ep8a1_Defiance_Youtube_Cover__a9tu1h.png" alt="" />
                        <h1 className='text-xl font-bold text-nowrap' >Title</h1>
                        <h1 className="flex items-center gap-2 text-lg"><FaTrophy />Prize Pool</h1>
                        <h1 className='flex items-center gap-2 text-lg'><FaCalendar />Start Date</h1>
                        <h1 className='flex items-center gap-2 text-lg'><FaGamepad />Game</h1>
                    </div>
                    {
                        tournamentData.filter(tournament => tournament.status != 'Draf').map((item, index) => {
                            const currentOrgData = organizationData?.find(organizatoin => organizatoin._id == item.orgID)
                            return (

                                <div key={'tournament' + index} onClick={() => navigate(`/tournaments/${item._id}`)} className="p-5 bg-accent flex flex-col gap-5 cursor-pointer hover:bg-[#5a5a5a] duration-500">
                                    <img className='w-75 h-75 object-cover' src={`${axiosInstance.defaults.baseURL}/${item.image}`} alt="" />
                                    <div className='flex'>
                                        <h1 className={tournamentStatus[item.status].style}>{tournamentStatus[item.status].text}</h1>
                                    </div>
                                    <h1 className='text-xl font-bold text-nowrap' >{item.name}</h1>
                                    <h1 className="flex items-center gap-2 text-lg"><FaTrophy />Podium rewards</h1>
                                    <h1 className='flex items-center gap-2 text-lg'><FaCalendar />
                                        {format(Date(item.schedule?.startDate), "PP")} {item.schedule?.startTime}
                                    </h1>
                                    <h1 className='flex items-center gap-2 text-lg'><FaGamepad />{item.game}</h1>
                                    <div className="flex gap-5 items-center">
                                        <img src={`${axiosInstance.defaults.baseURL}/${currentOrgData?.oLogo}`} className='w-10 h-10 rounded-full' alt="" />
                                        <h1>{currentOrgData?.oName}</h1>
                                    </div>
                                    <button onClick={()=>navigate(`/tournaments/${item._id}`)} className="bg-[#3a3a3a] p-3 cursor-pointer">View</button>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default TournamentHome