import FilledBellIcon from '@/components/ui/filled-bell-icon'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NotificationDropdown from './NotificationDropdown'
import { TbMessagesFilled } from 'react-icons/tb'
import { useAuth } from '@/context/AuthProvider'


function Header({ login,headerRef }) {
    const [showNotification, setShowNotification] = useState(false)
    const navigate = useNavigate()
    const { user } = useAuth()

    const handleNav = (value) => {
        if(!user.userID){
            navigate('/login')
        }else{
            if(value == "tournaments"){
                navigate(`/dashboard/${value}/${user.userID}`)
            }else if(value == 'organization'){
                navigate(`/${value}/${user.userID}/home`)
            }
        }
    }
    
   
    return (
        <>
            <main ref={headerRef} className={`w-full flex justify-center items-center absolute top-0 z-12  mb-1"} `} >
                {/* <img src="https://images.unsplash.com/photo-1761998066478-821bf52c2849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="inset-0 absolute h-full  object-cover w-full -z-1" /> */}
                <section className={`w-full flex justify-between items-center backdrop-blur-xl py-2 px-10 bg-card/10 `} >
                    <img onClick={() => navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784392713/FIERZIO.gg_2_-Photoroom_o7mwm8.png" className='h-15 cursor-pointer' alt="" />
                    <ul className="flex items-center font-bold ">
                        <button onClick={()=>handleNav('tournaments')} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Tournaments</button>
                        <Link to={"/"} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Leaderboard</Link>
                        <button onClick={()=>handleNav('organization')} className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Organization</button>
                        <li className='text-xl cursor-pointer hover:bg-accent p-3 rounded-2xl duration-500' >Squads</li>
                        {
                            user ?
                                <>
                                    <div className='flex gap-4 items-center justify-center py-1 px-4 rounded-xl bg-accent-foreground border'>
                                        <Link to={`/dashboard/profile/${user?.userID}`} className='text-xl cursor-pointer  rounded-2xl duration-500' >{user.username}</Link>
                                        <div
                                            onMouseEnter={() => setShowNotification(true)}
                                            onMouseLeave={() => setShowNotification(false)}
                                        >
                                            <FilledBellIcon />
                                        </div>
                                        <TbMessagesFilled className='text-2xl cursor-pointer'/>
                                        <img onClick={()=>navigate(`/dashboard/profile/${user?.userID}`)} className='h-10 rounded-full cursor-pointer' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg" alt="" />
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