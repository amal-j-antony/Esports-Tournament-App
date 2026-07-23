import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import { LuSwords } from "react-icons/lu";
import PassportIcon from '@/components/ui/passport-icon';
import TrophyIcon from '@/components/ui/trophy-icon';
import GamepadIcon from '@/components/ui/gamepad-icon';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { Particles } from '@/components/ui/particles';
import { ShineBorder } from '@/components/ui/shine-border';
import { dummyTournaments } from '@/data/dummyTournaments';
import { GoDotFill } from "react-icons/go";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { Calendar, Gamepad, Gamepad2, List } from 'lucide-react'
import { FaExclamation, FaPlay, FaTrophy, FaUser } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()

    return (
        <>
            {/* <SmoothCursor/> */}
            <Header className="" />
            <main className='w-full flex flex-col justify-center items-center bg-background'>
                <section className='flex justify-center w-full z-11'>
                    <Carousel />
                </section>

                {/* hero text */}
                <section className="container flex justify-center items-center gap-20 py-20">

                    <span className='text-4xl' >Organize.</span>
                    <LuSwords className='text-accent-foreground text-5xl' />
                    <span className='text-4xl' >Compete.</span>
                    <LuSwords className='text-accent-foreground text-5xl' />
                    <span className='text-4xl' >Dominate.</span>
                </section>
                <p className='container text-4xl pb-20 text-center w-2/3'>Join competitions, host tournaments, manage teams, and compete across your favorite games all from one platform</p>
                {/* selection */}
                <section className="flex justify-between gap-10 container mb-20">
                    <div className="relative flex justify-center rounded-3xl">
                        <div className="absolute inset-0  rounded-3xl bg-[rgb(0,0,0,0.8)] flex justify-center items-center flex-col gap-10">
                            
                            <TrophyIcon size={200} className="z-2" />
                            <button onClick={()=>navigate("/login")} className=' border border-white  rounded-3xl bg-accent-f p-5 text-xl items-center gap-2 hover:bg-[#BA181B] hover:border-[#BA181B] duration-500 cursor-pointer flex'>
                                
                                Create and organize tournaments <ArrowRight/></button>
                            
                        </div>
                        <img className='h-150 object-cover rounded-3xl' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784347860/josh-berendes-t6e0ntPJ1RE-unsplash_nmzumk.jpg" alt="" />
                    </div>
                    <div className='flex items-center text-8xl text-accent-foreground '><PiCrosshairSimpleFill className='hover:animate-spin' /></div>
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0  rounded-3xl bg-[rgb(0,0,0,0.8)] flex justify-center items-center flex-col gap-10">
                            <GamepadIcon size={200} className="z-2" />
                            <button onClick={()=>navigate("/login")}  className=' border border-white rounded-3xl p-5 text-xl items-center gap-2 hover:bg-[#BA181B] hover:border-[#BA181B] duration-500 cursor-pointer flex'>Participate in Tournaments <ArrowRight/></button>
                        </div>
                        <img className='h-150 object-cover rounded-3xl' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784347862/2149529367_bd2ylr.jpg" alt="" />

                    </div>

                </section>

                {/* clans */}
                <section className='container relative mb-20'>
                    <div className="absolute top-0 w-full h-full rounded-3xl flex flex-col justify-center items-center z-2 bg-[rgba(0,0,0,0.5)]">
                        <p className='text-6xl text-center font-bold'>Assemble a crew and conquer the arena</p>
                        <div className="flex justify-center gap-10 p-10 w-1/3">
                            <button onClick={()=>navigate("/login")}  className='p-5 bg-[rgb(0,0,0,0.8)] border border-white hover:bg-[#BA181B] hover:border-[#BA181B] duration-500 cursor-pointer rounded-3xl text-xl font-bold'>Create a Squad</button>
                            <button onClick={()=>navigate("/login")}  className='p-5 bg-[rgb(0,0,0,0.8)] border border-white hover:bg-[#BA181B] hover:border-[#BA181B] duration-500 cursor-pointer rounded-3xl text-xl font-bold'>Join a squad</button>
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784391819/call-of-duty-modern-warfare-2-war-zone-ghost-2022-games-3840x2160-8542_v9ju7x.jpg" className='rounded-3xl' alt="" />
                </section>

                {/* Trending  tournaments */}
                <div className="container pb-10 text-3xl font-bold">
                    <h1>Trending Tournaments</h1>
                </div>

                
                <section className='container gap-10 flex flex-nowrap overflow-x-auto scrollbar-none'>

                    {
                        dummyTournaments.map((item, index) => (
                            <div key={item.id+1} className="flex-1 shrink-0 flex flex-col gap-2 p-10 bg-accent rounded-2xl">
                                <div className='flex'>
                                    {item.status == "Registration Open" && <div className="border p-3 text-green-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Open<GoDotFill /></div>}
                                    {item.status == "Live" && <div className="border p-3 text-red-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Live<FaPlay /> </div>}
                                    {item.status == "Coming Soon" && <div className=" p-3 text-yellow-500 bg-zinc-800 rounded-2xl flex gap-2 items-center">Coming Soon <FaExclamation /></div>}
                                </div>
                                <h1 className='text-2xl font-bold text-nowrap' >{item.title}</h1>
                                <h1 className="flex items-center gap-2 text-2xl"><FaTrophy/>{item.prizePool}</h1>
                                <h1 className='text-2xl flex items-center gap-2'><Calendar/>{item.startDate}</h1>
                                <h1 className='text-2xl flex items-center gap-2'><Gamepad2/>{item.game}</h1>
                                
                                {
                                    item.mode == "solo" ?
                                        <div className="flex flex-col gap-2 text-2xl">
                                            <div className='flex items-center gap-2 '>
                                                <FaUser />Solo
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <h1>No. of Players: {item.registered}</h1>
                                                <h1>Max. No. of players: {item.teams}</h1>
                                            </div>

                                        </div>
                                        :
                                        <div className="flex flex-col gap-2 text-2xl">
                                            <div className='flex items-center gap-2'>
                                                <FaUserGroup />Team
                                            </div>
                                            <div className='flex items-center gap-2 text-2xl'>
                                                <List/> {item.registered}/{item.teams}
                                            </div>

                                        </div>
                                }

                                <button className='bg-card p-4 rounded-2xl text-xl mt-5 hover:bg-accent-foreground cursor-pointer duration-500'>View</button>

                            </div>
                        ))
                    }
                </section>

                <Particles className='fixed bottom-0 w-full h-full min-h-screen z-5'
                    color='#ff751f'
                />
            </main>
            <Footer/>
        </>
    )
}

export default Home



{/* <section className="flex justify-center container gap-40 my-10 items-center w-3/4">
                    <div className=" flex flex-col justify-center items-center rounded-full relative p-20 bg-card cursor-pointer">
                        <TrophyIcon size={200} className="z-2" />
                        <h1 className='z-2 text-2xl font-semibold my-2 text-wrap'>Organize tournaments</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center rounded-full relative py-20 px-25 bg-card cursor-pointer">
                        <GamepadIcon size={200} className="z-2" />
                        <h1 className='z-2 text-2xl font-semibold my-2 text-wrap'>Find Games</h1>
                    </div>
                </section> */}