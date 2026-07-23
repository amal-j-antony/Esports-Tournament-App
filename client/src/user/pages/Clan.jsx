import SideBar from '@/common/components/SideBar'
import React from 'react'

function Clan() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"clan"} />
                </div>
                <section className="col-span-6 bg-card">
                    clans here
                </section>
            </main>
        </>
    )
}

export default Clan