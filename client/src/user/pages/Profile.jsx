
import SideBar from '@/common/components/SideBar'
import { popularGames } from '@/data/popularGames'
import React from 'react'
import { FaInstagram, FaMessage, FaPlus, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'



function Profile() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"profile"} />
                </div>
                <section className="col-span-6 bg-card p-10">
                    <div className="mb-20 relative">
                        <img className='h-70 w-full object-cover' src="https://res.cloudinary.com/dwaaoyztz/image/upload/q_auto/v1784802149/Untitled_design_4_arqh59.png" alt="" />
                        <img className=' w-50 h-50 rounded-full my-10 absolute left-20 inset-y-0' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783662948/copy_of_vecteezy_profile-icon-stock-vector-illustration_35112749_sw84ny.jpg" alt="" />
                    </div>

                    <div className="grid grid-cols-2  gap-10">
                        <div className=" grid grid-cols-1 col-span-2 gap-1">
                            <div className='flex justify-between'>
                                <div className='flex gap-3'>
                                    <h1 className='text-2xl font-bold'>Player Name</h1>
                                    <button className='bg-slate-200 px-5 py-2 rounded-2xl text-black cursor-pointer hover:bg-accent-foreground duration-500 flex gap-2 items-center'><FaMessage />Message</button>
                                    <button className='bg-slate-200 px-5 py-2 rounded-2xl text-black cursor-pointer hover:bg-accent-foreground duration-500 flex gap-2 items-center'><FaPlus />  Invite</button>
                                </div>
                                <div className="justify-self-end">
                                    <button className='bg-accent-foreground px-5 py-2 rounded-2xl'>Edit profile</button>
                                </div>
                            </div>
                            <h1 className='text-xl'>@username</h1>
                            <div className='flex gap-2' >
                                <span className="">Squad Names</span>
                            </div>
                            <div className='flex gap-2' >
                                <span className="">Titles(example: won a big tournament)</span>
                            </div>
                            <p>Bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non doloribus ad sequi distinctio corrupti rem aliquid facere, ratione voluptatum, necessitatibus fugiat in eaque. Est iure quis dicta ipsam facere commodi.</p>
                            <div className="flex gap-5 ">
                                <FaYoutube className='text-3xl' />
                                <FaXTwitter className='text-3xl' />
                                <FaInstagram className='text-3xl' />
                                <FaTiktok className='text-3xl' />
                            </div>
                        </div>
                        
                        <div className="col-span-2 flex flex-col  ">
                            <h1>Most played</h1>
                            
                        </div>




                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile