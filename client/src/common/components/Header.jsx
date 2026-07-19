import FilledBellIcon from '@/components/ui/filled-bell-icon'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header({ login }) {
    const navigate = useNavigate()
    return (
        <>
            <main className={`w-full flex justify-center items-center fixed top-0 z-12 ${login && "bg-[rgba(0,0,0,0.9)]"} `} >
                {/* <img src="https://images.unsplash.com/photo-1761998066478-821bf52c2849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="inset-0 absolute h-full  object-cover w-full -z-1" /> */}
                <section className={`w-9/10 flex justify-between items-center backdrop-blur-xl  py-3 rounded-3xl px-10 ${!login && "my-5 bg-[rgba(0,0,0,0.5)]" } `} >
                    <img onClick={()=>navigate("/")} src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784392713/FIERZIO.gg_2_-Photoroom_o7mwm8.png" className='h-15 cursor-pointer' alt="" />
                    <ul className="flex font-bold ">
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Tournaments</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Leaderboard</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Clans</li>
                        <li className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Community</li>
                        {
                            login ?
                                <>
                                    <div className='flex gap-4 items-center justify-center m-2 p-2 rounded-xl bg-accent-foreground border'>
                                        <li className='text-xl cursor-pointer hover:bg-accent  rounded-2xl duration-500' >User1</li>
                                        <FilledBellIcon/>
                                        <img className='h-10 rounded-full' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg" alt="" />                                        
                                    </div>
                                </>
                                :
                                <>
                                    <Link to={"/login"} className='text-xl cursor-pointer hover:bg-accent p-5 rounded-2xl duration-500' >Login</Link>
                                    <Link to={"/register"} className='text-xl cursor-pointer border border-accent-foreground hover:bg-accent p-5 rounded-2xl duration-500' >Sign Up</Link>
                                    
                                </>
                        }
                    </ul>
                </section>

            </main>
        </>
    )
}

export default Header