import SideBar from '@/common/components/SideBar'
import React from 'react'
import UserHome from '../tabs/UserHome'


function Popular() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"popular"} />
                </div>
                <div className="col-span-6 bg-card">
                    <UserHome />
                </div>
            </main>
        </>
    )
}

export default Popular