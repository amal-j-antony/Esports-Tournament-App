import SideBar from '@/common/components/SideBar'
import React from 'react'
import MessageExpanded from '../components/MessageExpanded'


function Messages() {
    
    return (
        <>
            <main className="w-full grid grid-cols-7 gap-1">
                <div className="bg-card">
                    <SideBar currentTab={"messages"} />
                </div>
                <section className="col-span-6 grid grid-cols-2 gap-1">
                    <section className="p-10 flex flex-col items-center bg-card ">
                        <h1 className='text-xl font-bold'>Messages</h1>
                        <hr className='text-accent mt-5 w-full' />
                        <div className="w-full border p-5">
                            <h1>Sender</h1>
                        </div>
                    </section>
                    <section className="bg-card p-10 w-full">
                        <MessageExpanded />
                    </section>
                </section>
            </main>
        </>
    )
}

export default Messages