import FilledBellIcon from '@/components/ui/filled-bell-icon'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TbMessagesFilled } from 'react-icons/tb'
import NotificationDropdown from '@/common/components/NotificationDropdown'
import { BarChart3, TrophyIcon } from 'lucide-react'
import { MdLeaderboard } from "react-icons/md";
import { FaPeopleGroup, FaUserGroup } from 'react-icons/fa6'

function UserHeader() {
    const [showNotification, setShowNotification] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <main className={`w-full flex justify-center items-center  top-0 z-12 bg-card mb-1 `} >
                {/* <img src="https://images.unsplash.com/photo-1761998066478-821bf52c2849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="inset-0 absolute h-full  object-cover w-full -z-1" /> */}
                <section className={`w-9/10 flex justify-between items-center backdrop-blur-xl  py-1 rounded-3xl px-10  `} >
                    <img onClick={() => navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784392713/FIERZIO.gg_2_-Photoroom_o7mwm8.png" className='h-10 cursor-pointer' alt="" />
                    <ul className="flex font-bold gap-2">
                        <Link to={"/user/1/tournaments"} className='text-2xl cursor-pointer hover:bg-accent-foreground p-3 rounded-2xl duration-500 flex gap-2 items-center' ><TrophyIcon/> Tournaments</Link>
                        <Link to={"/lederboard"} className='text-2xl cursor-pointer hover:bg-accent-foreground p-3 rounded-2xl duration-500 flex gap-2 items-center' ><MdLeaderboard />Leaderboard</Link>
                        <Link to={"/user/1/clans"} className='text-2xl cursor-pointer hover:bg-accent-foreground p-3 rounded-2xl duration-500 flex gap-2 items-center' ><FaPeopleGroup/>Clans</Link>
                        <li className='text-2xl cursor-pointer hover:bg-accent-foreground p-3 rounded-2xl duration-500 flex gap-2 items-center' ><FaUserGroup/>Squads</li>
                    </ul>
                    <>
                        <div className='flex gap-4 items-center justify-center m-1 py-1 px-4 rounded-xl bg-accent-foreground border'>
                            <Link to={"/user/1/dashboard"} className='text-xl cursor-pointer  rounded-2xl duration-500' >User1</Link>
                            <div
                                onMouseEnter={() => setShowNotification(true)}
                                onMouseLeave={() => setShowNotification(false)}
                            >
                                <FilledBellIcon />
                            </div>
                            <TbMessagesFilled className='text-2xl cursor-pointer' />
                            <img onClick={() => navigate("/user/1/dashboard")} className='h-10 rounded-full cursor-pointer' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg" alt="" />
                        </div>
                    </>
                </section>
                {/* notification dropdown */}
                {
                    showNotification && <NotificationDropdown setShowNotification={setShowNotification} />
                }

            </main>
        </>
    )
}

export default UserHeader