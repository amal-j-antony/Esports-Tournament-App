import React, { useEffect } from 'react'
import { esportsTitles } from '@/data/gameList';
import { Switch } from '@/components/ui/switch';
import { InviteOnly } from './TournamentTooltips';
import { Controller, useWatch } from 'react-hook-form';
import { SERIES_FORMAT } from '@/data/constants/seriesFormat';

function CreateStepOne({
    register,
    control,
    setValue
}) {
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
        setValue("format",gameFormat)
    },[selectedGame])

    // console.log("selected game = ",selectedGame);

    return (
        <>
            <form className="grid grid-cols-2 gap-5 border rounded-2xl p-10 w-full bg-[#1d1d1d]">
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
                <hr className="col-span-2" />
                <h1 className="col-span-2 text-xl font-bold">
                    Participants
                </h1>
                <label htmlFor="" className='flex items-center gap-2'>Invite Only <InviteOnly /> </label>
                <Controller
                    name='inviteOnly'
                    control={control}
                    render={({ field }) => (
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange} />
                    )}
                />
                <label htmlFor="">Maximum Number of Teams</label>
                <input {...register("maxTeamSize")} type="number" placeholder='Enter total number of teams' className={inputStyle} />
                <label htmlFor="">Minimum Number of Teams</label>
                <input {...register("minTeamSize")} type="text" placeholder='Enter minimum number of Teams' className={inputStyle} />
                <div className='w-full flex justify-center col-span-2'><button className='bg-zinc-600 px-5 py-2 rounded-xl cursor-pointer'>Save Detials</button></div>
            </form>
        </>
    )
}

export default CreateStepOne