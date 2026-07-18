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
import { dummyTournaments } from '@/assets/dummyTournaments';
import { FaPlay } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Home() {

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
                            <button className='bg-[rgb(255,255,255,0.2)] border border-white  rounded-3xl bg-accent-f p-5 text-xl items-center gap-2 hover:bg-white hover:text-black duration-500 cursor-pointer flex'>Create and organize tournaments <ArrowRight/></button>
                            
                        </div>
                        <img className='h-150 object-cover rounded-3xl' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784347860/josh-berendes-t6e0ntPJ1RE-unsplash_nmzumk.jpg" alt="" />
                    </div>
                    <div className='flex items-center text-8xl text-accent-foreground '><PiCrosshairSimpleFill className='hover:animate-spin' /></div>
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0  rounded-3xl bg-[rgb(0,0,0,0.8)] flex justify-center items-center flex-col gap-10">
                            <GamepadIcon size={200} className="z-2" />
                            <button className='bg-[rgb(255,255,255,0.2)] border border-white rounded-3xl p-5 text-xl items-center gap-2 hover:bg-white hover:text-black duration-500 cursor-pointer flex'>Participate in Tournaments <ArrowRight/></button>
                        </div>
                        <img className='h-150 object-cover rounded-3xl' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784347862/2149529367_bd2ylr.jpg" alt="" />

                    </div>

                </section>

                {/* Trending  tournaments */}
                <div className="container pb-10 text-3xl font-bold">
                    <h1>Trending Tournaments</h1>
                </div>

                
                <section className='container gap-10 flex flex-nowrap overflow-x-auto scrollbar-none'>

                    {
                        dummyTournaments.map((item, index) => (
                            <div key={item.id} className="flex-1  p-10 bg-card rounded">
                                <h1 className='text-2xl text-nowrap' >{item.title}</h1>
                                <h1 className='' >{item.game}</h1>
                                <div className='flex'>
                                    {item.status == "Registration Open" && <div className="border p-3 text-green-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Open<GoDotFill /></div> }
                                    {item.status == "Live" && <div className="border p-3 text-red-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Live<FaPlay/> </div> }
                                    {item.status == "Coming Soon" && <div className=" p-3 text-yellow-500 bg-zinc-800 rounded-2xl flex gap-2 items-center">Coming Soon <FaExclamation /></div> }
                                </div>

                            </div>
                        ))
                    }
                </section>

                <Particles className='fixed bottom-0 w-full h-full min-h-screen z-5'
                    color='#ff751f'
                />
            </main>
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