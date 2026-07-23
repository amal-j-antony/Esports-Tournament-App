import SideBar from '@/common/components/SideBar'
import React from 'react'
import UserSquads from '../tabs/UserSquads'



function Squads() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"squads"} className="" />
                </div>
                <div className="col-span-6 bg-card">
                    <UserSquads />
                </div>
            </main>
        </>
    )
}

export default Squads