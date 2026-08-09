import React, { useEffect } from 'react'
import { esportsTitles } from '@/data/gameList';
import { Switch } from '@/components/ui/switch';
import { InviteOnly } from '../TournamentComponents/TournamentTooltips';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { SERIES_FORMAT } from '@/data/constants/seriesFormat';


function CreateStepOne({handleStepChange}) {
    const {register,control,setValue} = useFormContext()
    const gameList = esportsTitles.map(item => item.name)
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const selectedGame = useWatch({
        control,
        name: "game"
    })

    useEffect(() => {
        const gameFormat = esportsTitles.find(item => item.name == selectedGame)?.config.format
        // console.log(gameFormat);
        setValue("format", gameFormat)
    }, [selectedGame])

    // console.log("selected game = ",selectedGame);

    return (
        <>
            <form className="grid grid-cols-2 gap-5 border rounded-2xl p-10 w-3/4 bg-[#1d1d1d]">
                <div className="col-span-2 ">
                    <h1 className='mb-5 text-2xl font-bold'>Basic Details</h1>
                </div>
                <label htmlFor="">Select Game</label>
                <select {...register("game")} className={inputStyle}>
                    {
                        gameList.map(item => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
                <label htmlFor="">Tournament name</label>
                <input {...register("name")} className={inputStyle} type="text" placeholder='Enter Tournament Name' required />
                <label htmlFor="">Tournament Descriptiom</label>
                <textarea {...register("description")} className={inputStyle} type="text" placeholder="Enter Tournament Description" />
                <hr className="col-span-2" />
                <h1 className="col-span-2 text-xl font-bold">Media</h1>
                <label htmlFor="">Tournament Image</label>
                <input {...register("image")} className={inputStyle} type="file" />                                
                <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                <button onClick={() => handleStepChange("next")} className='bg-accent-foreground rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Next Step</button>
            </form>
        </>
    )
}

export default CreateStepOne