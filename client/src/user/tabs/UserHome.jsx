import { recentSquads } from '@/assets/dummySquad'
import { dummyTournaments } from '@/assets/dummyTournaments'
import { popularGames } from '@/assets/popularGames'
import { Calendar, Gamepad, Gamepad2, List, Plus, PlusIcon, Target } from 'lucide-react'
import React from 'react'
import { FaExclamation, FaPlay, FaPlus, FaTrophy, FaUser } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { PiPlus } from 'react-icons/pi'
import { Link } from 'react-router-dom'


function UserHome() {
    const memberStyle = ""
    return (
        <>
            <main className='p-10 flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Hey there, user1</h1>
                <h2 className='text-2xl'>Play your first match</h2>
                <h2 className='text-3xl font-bold'>Popular games</h2>
                <div className="flex gap-5 flex-nowrap md:flex-wrap overflow-auto scrollbar-none ">
                    {
                        popularGames.map((item, index) => (
                            <React.Fragment key={item.title}>
                                <div className="relative shrink-0" >
                                    <img src={item.image} className='w-50 h-full object-cover rounded-2xl' alt="" />
                                    <div className="absolute gap-5 items-center top-0 w-full h-full flex flex-col justify-end pb-10 px-3 bg-black/40 rounded-2xl opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                                        <h1 className='text-2xl font-bold'>{item.title}</h1>
                                        <button className='bg-slate-300 text-black font-bold text-xl py-3 rounded-xl w-full cursor-pointer'>View</button>
                                    </div>
                                </div>

                            </React.Fragment>
                        ))
                    }
                </div>

                <div className='flex gap-5 items-center pt-10'>
                    <h1 className='text-3xl font-bold' >Trending tournaments</h1>
                    
                </div>
                <section className='container gap-10 flex flex-nowrap overflow-x-auto scrollbar-none'>

                    {
                        dummyTournaments.slice(0, 3).map((item, index) => (
                            <div key={item.id + 1} className="flex-1 shrink-0 flex flex-col gap-2 p-10 bg-accent rounded-2xl">
                                <div className='flex'>
                                    {item.status == "Registration Open" && <div className="border p-3 text-green-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Open<GoDotFill /></div>}
                                    {item.status == "Live" && <div className="border p-3 text-red-500 bg-zinc-800 rounded-2xl flex items-center gap-2">Live<FaPlay /> </div>}
                                    {item.status == "Coming Soon" && <div className=" p-3 text-yellow-500 bg-zinc-800 rounded-2xl flex gap-2 items-center">Coming Soon <FaExclamation /></div>}
                                </div>
                                <h1 className='text-2xl font-bold text-nowrap' >{item.title}</h1>
                                <h1 className="flex items-center gap-2 text-2xl"><FaTrophy />{item.prizePool}</h1>
                                <h1 className='text-2xl flex items-center gap-2'><Calendar />{item.startDate}</h1>
                                <h1 className='text-2xl flex items-center gap-2'><Gamepad2 />{item.game}</h1>

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
                                                <List /> {item.registered}/{item.teams}
                                            </div>

                                        </div>
                                }
                                <div className='flex items-center gap-2 text-2xl'>
                                    <Target />{item.format}
                                </div>
                                <button className='bg-card p-4 rounded-2xl text-xl mt-5 hover:bg-accent-foreground cursor-pointer duration-500'>View</button>

                            </div>
                        ))
                    }
                </section>
                <button className="bg-accent p-5 rounded-2xl font-bold text-xl flex items-center gap-2 cursor-pointer justify-center hover:bg-accent-foreground duration-500">View more tournaments <FaPlus/></button>

                <h2 className='text-3xl font-bold pt-10'>Recent squads</h2>
                <section className="flex gap-5 overflow-auto scrollbar-none">
                    {
                        recentSquads.slice(0,4).map((item,index)=>(
                            <div key={index+"asdfasdf"} className="shrink-0  bg-accent p-10">
                                <h1 className="text-xl font-bold">{item.game}</h1>
                                <h1 className='text-xl mb-5'>{item.joinedAt}</h1>
                                <div className='flex flex-col gap-2 '>
                                    {
                                        item.teamMembers.map((member,mIndex)=>(
                                            <div className='grid grid-cols-4 items-center text-center' key={"wpopop"+member.name}>
                                                <img className='w-20' src={`https://api.dicebear.com/10.x/glyphs/svg?seed=${member.name}`} alt="" />
                                                <h1>{member.name}</h1>
                                                {member.status == "online" && <h1 className='p-2 border rounded-xl border-green-700 text-green-700'>{member.status}</h1> }
                                                {member.status == "offline" && <h1 className='p-2 border rounded-xl border-gray-700 text-gray-700'>{member.status}</h1> }
                                                {member.status == "in-match" && <h1 className='p-2 border rounded-xl border-yellow-700 text-yellow-700'>{member.status}</h1> }
                                                {member.status == "afk" && <h1 className='p-2 border rounded-xl border-red-700 text-red-700'>{member.status}</h1> }
                                                <div className="flex justify-center cursor-pointer">
                                                    <Plus />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </section>
                <button className="bg-accent p-5 rounded-2xl font-bold text-xl flex items-center gap-2 cursor-pointer justify-center hover:bg-accent-foreground duration-500">View Older squads <FaPlus/></button>


            </main>
        </>
    )
}

export default UserHome