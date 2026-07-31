import { useAuth } from '@/context/AuthProvider'
import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'



function FloatingHeader({ showFloatingHeader }) {
    const buttonStyle = 'font-bold text-xl hover:text-accent-foreground duration-500 cursor-pointer'
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    return (
        <>
            <motion.main
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeIn"
                }}
                className='w-full grid justify-center items-center fixed top-0 z-20'>
                <section className='px-10 flex gap-100 justify-between bg-card rounded-3xl'>
                    <img className='h-20' src="https://res.cloudinary.com/dwaaoyztz/image/upload/q_auto/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" alt="" />
                    <ul className='flex items-center gap-5 bg-'>
                        <button className={buttonStyle}>Tournaments</button>
                        <button className={buttonStyle}>Leaderboard</button>
                        {
                            user ?
                            <>
                                <button onClick={()=>navigate(`/dashboard/profile/${user?.userID}`)} className={buttonStyle} >Profile</button>
                            </>
                            :
                            <>
                                <button className={buttonStyle} >Log In</button>
                            </>
                        }
                    </ul>
                    {
                        user ?
                            <>
                                <Link to={`/dashboard/discover/${user?.userID}?tab=discover`} className='px-5 my-4 bg-accent-foreground rounded-3xl flex items-center gap-2'>Discover <FaArrowRight className='text-accent-foreground bg-background text-3xl rounded-full  px-2' /> </Link>
                            </>
                            :
                            <>
                                <button className='px-5 my-4 bg-accent-foreground rounded-3xl flex items-center gap-2'>Sign up <FaArrowRight className='text-accent-foreground bg-background text-3xl rounded-full  px-2' /> </button>
                            </>
                    }
                </section>
            </motion.main>
        </>
    )
}

export default FloatingHeader