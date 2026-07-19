import PixelBlast from '@/components/ui/PixelBlast'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";


function Register() {
    const [view, setView] = useState(false)
    const [viewConfirm, setViewConfirm] = useState(false)
    return (
        <>
            <div className='' style={{ width: '1080px', height: '1080px', position: 'relative' }}>
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#a03116"
                    patternScale={2}
                    patternDensity={1}
                    enableRipples
                    rippleSpeed={0.3}
                    rippleThickness={0.1}
                    rippleIntensityScale={1}
                    speed={0.5}
                    transparent
                    edgeFade={0.25}
                />
            </div>
            <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" className='w-140 fixed left-1/7 top-1/7' alt="" />
            <main className='w-full h-screen flex justify-end items-center fixed top-0 right-30'>
                <section className='bg-card p-10 w-1/4 flex flex-col gap-5 rounded-3xl'>
                    <div className="flex justify-end w-full">
                        <Link to={"/"} className='border p-2 rounded-xl cursor-pointer' ><AiFillHome /></Link>
                    </div>
                    <h1 className='text-4xl font-bold text-center'>Create account</h1>
                    <input type="text" placeholder='Enter username' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                    <input type="email" placeholder='Enter email' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                    <div className='relative w-full'>
                        <input type={view ? "text" : "password"} placeholder='Enter Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setView(!view)} className='absolute right-3 top-1/4' />
                        }
                    </div>
                    <div className='relative w-full'>
                        <input type={viewConfirm ? "text" : "password"} placeholder='Confirm Password' className='p-3 bg-[rgba(255,255,255,0.1)] rounded-xl w-full' />
                        {
                            view ? <Eye onClick={() => setViewConfirm(!viewConfirm)} className='absolute right-3 top-1/4' />
                                : <EyeOff onClick={() => setViewConfirm(!viewConfirm)} className='absolute right-3 top-1/4' />
                        }
                    </div>
                    <Link to={"/user/1/dashboard"} className='bg-red-900 p-3 rounded-xl' >Create Account</Link>
                    <Link to={"/login"} className='border p-2 rounded-xl text-sm cursor-pointer bg-[rgba(255,255,255,0.1)] flex justify-center items-center' >Already have an account? Log in <ArrowRight /></Link>
                </section>
            </main>
        </>
    )
}

export default Register