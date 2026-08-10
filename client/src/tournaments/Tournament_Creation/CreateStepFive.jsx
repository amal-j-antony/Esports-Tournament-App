import React from 'react'
import { CheckInTooltip } from '../TournamentComponents/TournamentTooltips'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'

function CreateStepFive({
  handleStepChange,  
}) {
  const {register,control} = useFormContext()
  const checkIn = useWatch({
    control,
    name: "checkIn"
  })
  const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
  return (
    <main className='flex justify-center items-center w-3/4 p-10 bg-[#1d1d1d] rounded-2xl'>
      <section className="grid grid-cols-2 items-center gap-5 w-full">
        <h1 className="col-span-2 text-2xl font-bold">Tournament Schedule</h1>
        <label htmlFor=""> Registration Open Date and Time</label>
        <input {...register("registrationDate")} className={inputStyle} type="datetime-local" />

        <label htmlFor="">Enable Check in <CheckInTooltip /> </label>

        <Controller
          control={control}
          name='checkIn'
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />

        {checkIn &&
          <>
            <label htmlFor="">Pre-match Check-in (minutes) <CheckInTooltip /></label>
            <input {...register("checkInMinutes")} className={inputStyle} type="number" />
          </>}

        <label htmlFor=""> Tournament Start Date and Time</label>
        <input {...register("startDate")} className={inputStyle} type="datetime-local" />        

        <div className='col-span-2 grid grid-cols-3 gap-5'>
          <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
          <button className='bg-[#5a5a5a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save Changes </button>
          <button onClick={() => handleStepChange("next")} className='bg-accent-foreground rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save and Next</button>
        </div>

      </section>
    </main>
  )
}

export default CreateStepFive