import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import { LuSwords } from "react-icons/lu";
import PassportIcon from '@/components/ui/passport-icon';
import TrophyIcon from '@/components/ui/trophy-icon';
import GamepadIcon from '@/components/ui/gamepad-icon';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { Particles } from '@/components/ui/particles';

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
                <p className='container text-4xl pb-20 text-center w-2/3'>Join competitions, host tournaments, manage teams, and compete across your favorite games—all from one platform</p>
                {/* selection */}
                

                <Particles className='fixed bottom-0 w-full h-full min-h-screen z-10'
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