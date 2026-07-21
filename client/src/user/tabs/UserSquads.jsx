import { recentSquads } from '@/data/dummySquad'
import { dummyTournaments } from '@/data/dummyTournaments'
import { Plus } from 'lucide-react'
import React from 'react'


function UserSquads() {
    return (
        <>
            <main className="flex flex-col justify-center items-center py-5 px-15">
                <section className="flex flex-col text-center my-10 bg-[#1d1d1d] w-full p-10 rounded-3xl">
                    <h1 className='text-2xl font-bold'>You are not currently in a squad</h1>
                    <div className="flex justify-center gap-5 mt-10">
                        <button className='bg-accent p-5 rounded-2xl text-xl hover:bg-accent-foreground cursor-pointer' >Create Squad</button>
                        <button className='bg-accent p-5 rounded-2xl text-xl hover:bg-accent-foreground cursor-pointer' >Join Squad</button>
                    </div>
                </section>
                <h1 className='text-2xl font-bold pb-10'>Recent Squads</h1>
                <section className="flex justify-center gap-5 flex-wrap scrollbar-none">
                    {
                        recentSquads.map((item, index) => (
                            <div key={index + "asdfasdf"} className="shrink-0  bg-[#1d1d1d] rounded-xl p-5">
                                <h1 className="text-xl font-bold">{item.game}</h1>
                                <h1 className='text-xl mb-5'>{item.joinedAt}</h1>
                                <div className='flex flex-col gap-2 '>
                                    {
                                        item.teamMembers.map((member, mIndex) => (
                                            <div className='grid grid-cols-4 gap-5 items-center text-center' key={"wpopop" + member.name}>
                                                <img className='w-20' src={`https://api.dicebear.com/10.x/glyphs/svg?seed=${member.name}`} alt="" />
                                                <h1>{member.name}</h1>
                                                {member.status == "online" && <h1 className='p-2 border rounded-xl border-green-700 text-green-700'>{member.status}</h1>}
                                                {member.status == "offline" && <h1 className='p-2 border rounded-xl border-gray-700 text-gray-700'>{member.status}</h1>}
                                                {member.status == "in-match" && <h1 className='p-2 border rounded-xl border-yellow-700 text-yellow-700'>{member.status}</h1>}
                                                {member.status == "afk" && <h1 className='p-2 border rounded-xl border-red-700 text-red-700'>{member.status}</h1>}
                                                <div className="flex justify-center cursor-pointer p-2 border border-zinc-500 rounded-xl hover:bg-zinc-500 hover:text-white duration-500 ">
                                                    <Plus /> Invite
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default UserSquads