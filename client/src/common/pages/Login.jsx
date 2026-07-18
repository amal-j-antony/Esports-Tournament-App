import { Eye, EyeDashedIcon, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [view, setView] = useState(false)
    return (
        <>
            <video src="/c7c7a47c25_minecraft-cherry-blossom-night.mp4" className='fixed top-0 w-full h-screen object-cover' autoPlay muted loop ></video>
            <main className='h-screen flex justify-center items-center z-2'  >
                <section className='flex flex-col justify-center items-center backdrop-blur-2xl p-10 rounded-xl gap-5'>
                    <div className="flex justify-start w-full">
                        <Link to={"/"} className='underline' >Back to home</Link>
                    </div>
                    <h1 className="text-4xl font-bold">
                        Welcome back
                    </h1>
                    <input type="text" placeholder='Enter Username' className='bg-[rgba(255,255,255,0.1)] p-3 rounded-xl w-full' />
                    <div className='relative w-full'>
                        <input type={view ? "text" : "password"} placeholder='Enter Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                        }
                    </div>
                    <button className='bg-slate-500 flex-1 p-3 rounded-xl w-full cursor-pointer' >Login</button>
                </section>
            </main>

        </>
    )
}

export default Login