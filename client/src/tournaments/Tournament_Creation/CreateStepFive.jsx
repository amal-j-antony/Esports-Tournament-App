import React from 'react'
import { CheckInTooltip } from './TournamentTooltips'

function CreateStepFive() {
    const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
  return (
    <main className='flex justify-center items-center w-full p-10 bg-[#1d1d1d] rounded-2xl'>
        <section className="grid grid-cols-2 items-center gap-5 w-full">
            <h1 className="col-span-2 text-2xl font-bold">Tournament Schedule</h1>
            <label htmlFor=""> Registration Open Date and Time</label>
            <input className={inputStyle} type="datetime-local" />

            <label htmlFor="">Pre-match Check-in (minutes) <CheckInTooltip/></label>
            <input className={inputStyle} type="number" />

            <label htmlFor=""> First Match Start Date and Time</label>
            <input className={inputStyle} type="datetime-local" />

            <label htmlFor="">Matches Per Day</label>
            <input className={inputStyle} type="number" />

        </section>
    </main>
  )
}

export default CreateStepFive