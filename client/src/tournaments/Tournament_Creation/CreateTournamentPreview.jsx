import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CreateTournamentPreview({handleStepChange}) {
  const {TID} = useParams()
  const navigate = useNavigate()
  return (
    <>
        <main className="grid justify-center items-center gap-5">
            <section className='grid gap-5'>
                <h1 className='text-4xl'>Your tournament has been saved as a draft</h1>
                <div onClick={()=>navigate(`/tournaments/${TID}`)} className='flex justify-center '><button className='bg-accent hover:bg-red-500 duration-500 py-3 rounded-xl cursor-pointer w-full max-w-100'>View Draft</button></div>
                <div className='flex justify-center '><button className='bg-accent hover:bg-red-500 duration-500 py-3 rounded-xl cursor-pointer w-full max-w-100'>Publish Now</button></div>
                <div className='flex justify-center'><button onClick={() => handleStepChange("previous")} className='max-w-100 w-full border border-zinc-600 rounded-xl p-3 hover:bg-[#7a7a7a] duration-500 cursor-pointer' >Previous Step</button></div>
            </section>
        </main>
    </>
  )
}

export default CreateTournamentPreview