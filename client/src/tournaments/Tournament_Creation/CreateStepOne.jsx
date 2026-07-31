import React from 'react'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input';

function CreateStepOne({
    gameNames,
    setTournamentDetails,
    tournamentDetails
}) {
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent text-center py-1  rounded-xl placeholder:text-center'
    return (
        <>
            <section className="grid grid-cols-2 gap-5">
                <div className="col-span-2 ">
                    <h1 className='mb-5 text-2xl font-bold text-center'>Basic Details</h1>
                </div>
                <label htmlFor="">Tournament name</label>
                <input className={inputStyle} type="text" placeholder='Enter Tournament Name' required />
                <label htmlFor="">Tournament Descriptiom</label>
                <textarea className={inputStyle} type="text" placeholder="Enter Tournament Description" />
                <label htmlFor="">Tournament Image</label>
                <input className={inputStyle} type="file" />
                <label htmlFor="">Number of Participants</label>
                <input type="number" defaultValue={"0"} className={inputStyle} />
                <label htmlFor="">Minimum Number of Participants</label>
                <input type="number" defaultValue={"0"} className={inputStyle} />
                
            </section>
        </>
    )
}

export default CreateStepOne