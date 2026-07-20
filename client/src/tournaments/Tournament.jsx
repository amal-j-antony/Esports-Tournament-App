import UserHeader from '@/user/components/UserHeader'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import TournamentHome from './TournamentHome'
import TrophyIcon from '@/components/ui/trophy-icon'

function Tournament() {
    const { id } = useParams()
    const sidebarButtons = (value) => {
        if(tab == value){
          return "py-3 mb-3 text-2xl bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
        }
        else if(value == "logout"){
          return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
        }  
        else{
          return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
        }
      }
    
      
      const [tab,setTab] = useState("home")
    
      const manageTab = (value) => {
        if(value != tab){
          setTab(value)
        }
      }

    return (
        <>
            <UserHeader />
            <main className='w-full h-screen grid grid-cols-6 gap-1'>
                {/* sidebar for tournament */}
                <section className='flex justify-center bg-card'>
                    <ul className='flex items-center w-full flex-col gap-2 p-5 pt-10'>
                        <TrophyIcon size={100}/>
                        <li className='text-3xl font-bold pb-5'>Tournaments</li>
                        <li className={sidebarButtons("home")}>Home</li>
                    </ul>
                </section>

                { tab=="home" && <TournamentHome/>}
            </main>

        </>
    )
}

export default Tournament