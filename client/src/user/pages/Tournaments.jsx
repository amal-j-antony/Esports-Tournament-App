import SideBar from '@/common/components/SideBar'
import React from 'react'
import UserHome from '../tabs/UserHome'
import TournamentHome from '@/user/tabs/TournamentHome'

function Tournaments() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"tournaments"} className="" />
                </div>
                <div className="col-span-6 bg-card">
                    <TournamentHome />
                </div>
            </main>
        </>
    )
}

export default Tournaments