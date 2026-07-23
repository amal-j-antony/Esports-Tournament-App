import SideBar from '@/common/components/SideBar'
import React from 'react'
import UserNotifications from '../tabs/UserNotifications'


function Notifications() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"notifications"} />
                </div>
                <div className="col-span-6 bg-card">
                    <UserNotifications />
                </div>
            </main>
        </>
    )
}

export default Notifications