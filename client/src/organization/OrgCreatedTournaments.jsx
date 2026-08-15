import SideBar from '@/common/components/SideBar'
import { button } from '@/data/universalStyles'
import React from 'react'

function OrgCreatedTournaments() {
  return (
    <>
      <main className="grid grid-cols-7 gap-1">
        <SideBar currentTab={"tournaments"} currentType={"organizationMenu"} />
        <section className="col-span-6 bg-card grid grid-cols-1 grid-rows-[1fr_4fr] ">
          <div className='flex flex-col justify-center items-center gap-10 p-10 '>
            <h1 className=" text-2xl font-bold ">Tournaments</h1>
            <hr className='border w-full border-accent' />
          </div>

          <div className="flex flex-col items-center gap-5">
            <h1 className='text-xl'>No tournaments found</h1>
            <button className={button} >Create Tournament</button>
          </div>

        </section>
      </main>
    </>
  )
}

export default OrgCreatedTournaments