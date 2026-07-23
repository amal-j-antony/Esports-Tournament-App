import SideBar from '@/common/components/SideBar'
import React from 'react'


function Messages() {
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"messages"} />
                </div>
                <section className="col-span-6 bg-card">
                    messages go here
                </section>
            </main>
        </>
    )
}

export default Messages