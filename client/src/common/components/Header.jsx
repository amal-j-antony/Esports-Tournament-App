import FilledBellIcon from '@/components/ui/filled-bell-icon'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NotificationDropdown from './NotificationDropdown'
import { TbMessagesFilled } from 'react-icons/tb'


function Header({ login,headerRef }) {
    const [showNotification, setShowNotification] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <main ref={headerRef} className={`w-full flex justify-center items-center absolute top-0 z-12  mb-1"} `} >
                {/* <img src="https://images.unsplash.com/photo-1761998066478-821bf52c2849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="inset-0 absolute h-full  object-cover w-full -z-1" /> */}
                <section className={`w-full flex justify-between items-center backdrop-blur-xl py-3 px-10 ${!login && " bg-card/10"} `} >
                    <img onClick={() => navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784392713/FIERZIO.gg_2_-Photoroom_o7mwm8.png" className='h-15 cursor-pointer' alt="" />
                    <ul className="flex font-bold ">
                        <Link to={"/tournaments"} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Tournaments</Link>
                        <Link to={"/lederboard"} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Leaderboard</Link>
                        <Link to={"/user/1/clans"} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Clans</Link>
                        <li className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Squads</li>
                        {
                            login ?
                                <>
                                    <div className='flex gap-4 items-center justify-center m-2 p-2 rounded-xl bg-accent-foreground border'>
                                        <Link to={"/user/1/dashboard"} className='text-xl cursor-pointer  rounded-2xl duration-500' >User1</Link>
                                        <div
                                            onMouseEnter={() => setShowNotification(true)}
                                            onMouseLeave={() => setShowNotification(false)}
                                        >
                                            <FilledBellIcon />
                                        </div>
                                        <TbMessagesFilled className='text-2xl cursor-pointer'/>
                                        <img onClick={()=>navigate("/user/1/dashboard")} className='h-10 rounded-full cursor-pointer' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg" alt="" />
                                    </div>
                                </>
                                :
                                <>
                                    <Link to={"/login"} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Login</Link>
                                    <Link to={"/register"} className='text-xl cursor-pointer border border-accent-foreground bg-accent-foreground hover:bg-accent p-3 rounded-2xl duration-500' >Sign Up</Link>

                                </>
                        }
                    </ul>
                </section>
                {/* notification dropdown */}
                {
                    showNotification && <NotificationDropdown setShowNotification={setShowNotification}/>
                }

            </main>
           
        </>
    )
}

export default Header