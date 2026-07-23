import React from 'react'

function CreateStepThree({
    gameNames,
    setTournamentDetails,
    tournamentDetails
}) {
    const inputStyle = 'bg-accent text-center py-1  rounded-xl w-100 '
    return (
        <>
            <main className='flex flex-col gap-5' >
                <h1 className='col-span-2 text-xl font-bold'>Tournament Rules</h1>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Enter rules' className={inputStyle} />
                    <button className='bg-slate-100 text-black rounded-xl py-2 px-5 cursor-pointer' >Add Rule</button>
                </div>
                <div className="grid">
                    <h1>Added Rules</h1>
                    <p>Rule 1</p>
                    <p>Rule 2</p>
                </div>
            </main>
        </>
    )
}

export default CreateStepThree