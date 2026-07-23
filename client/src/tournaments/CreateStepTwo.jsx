import { Switch } from '@/components/ui/switch'
import React from 'react'
import { IoInformationCircle } from 'react-icons/io5'

function CreateStepTwo({
    gameNames,
    setTournamentDetails,
    tournamentDetails
}) {
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent text-center py-1  rounded-xl '
    const showDetails = (value) => {
        switch (value) {
            case "rounds":
        }
    }
    return (
        <>
            <section className="grid grid-cols-2 gap-5 ">
                <h1 className='mb-5 text-2xl font-bold text-center col-span-2'>Tournament Settings</h1>
                <label htmlFor="">Tournament Format</label>
                <select name="" id="" className={inputStyle}>
                    <option value="">Head to Head</option>
                    <option value="">Lobby</option>
                </select>
                <label className=''>Group Stage</label>
                <Switch />
                <h1 className="col-span-2">Group stage settings</h1>
                <label htmlFor="">Game Format</label>
                <select defaultValue="swiss" name="" id="" className={inputStyle}>
                    <option value="singleElimination">Single Elimination</option>
                    <option value="doubleElimination">Double Elimination</option>
                    <option value="roundRobin">Round Robin</option>
                    <option value="swiss">Swiss</option>
                </select>
                <label className={textAndIconStyle} >Number of rounds per game <IoInformationCircle /> </label>
                <select name="" id="" className={inputStyle}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <hr className='col-span-2' />                
                <h1 className="col-span-2">Playoffs settings</h1>
                <label htmlFor="">Game Format</label>
                <select defaultValue="swiss" name="" id="" className={inputStyle}>
                    <option value="singleElimination">Single Elimination</option>
                    <option value="doubleElimination">Double Elimination</option>                    
                </select>
                <label className={textAndIconStyle} >Number of rounds per game <IoInformationCircle /> </label>
                <select name="" id="" className={inputStyle}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <hr className='col-span-2' />                
                <label htmlFor="" className={textAndIconStyle}>Number of matches <IoInformationCircle /></label>
                <input type="number" defaultValue={"0"} className={inputStyle} />
            </section>
        </>
    )
}

export default CreateStepTwo