import { Select } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { TooltipTrigger } from '@/components/ui/tooltip'
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from 'react-icons/io5'
import { GroupNumInfo, GroupStageInfo, NumberOfMatchesInfo, NumRoundsInfo, TournamentFormatInfo } from './TournamentTooltips'
import { Controller, useWatch } from 'react-hook-form'
import { SERIES_FORMAT } from '@/data/constants/seriesFormat'
import { GAME_TYPES } from '@/data/constants/gameTypes'


function CreateStepTwo({
    gameNames,
    register,
    control
}) {
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const [gameFormat, groupStageSettings] = useWatch({
        control,
        name: ["format", "groupStage"]
    })


    useEffect(() => {
        console.log("gameFormat", gameFormat);
    }, [gameFormat])


    return (
        <>
            <section className="grid grid-cols-2 gap-5 border rounded-2xl p-10 w-full bg-[#1d1d1d]">
                <h1 className='mb-5 text-2xl font-bold col-span-2'>Tournament Settings</h1>            
                <h1>Tournament format</h1>
                <span className={inputStyle}>{gameFormat ? gameFormat === SERIES_FORMAT.HEAD_TO_HEAD ? "Head To Head" : "Lobby" : "Select game to set tournament format"}</span>
                <label htmlFor="">Tournament Hosting mode</label>
                <select name="" id="" className={inputStyle}>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
                <hr className="col-span-2" />
                <h1 className="col-span-2 font-bold text-xl">Group stage settings</h1>
                <label className='flex items-center gap-2'>Enable Group Stage<GroupStageInfo /> </label>
                <Controller
                    name='groupStage.enabled'
                    control={control}
                    render={({ field }) => (
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                    )}
                />
                {groupStageSettings.enabled &&
                    <div className='grid grid-cols-2 w-full col-span-2 gap-5 border rounded-2xl p-5 bg-[#1a1a1a]'>

                        <label htmlFor="" className='flex items-center gap-2' >Number of Groups <GroupNumInfo /></label>
                        <input {...register("groupStage.groupCount")} type="number" placeholder='Enter number of groups' className={inputStyle} />
                        <label htmlFor="">Game Format</label>
                        {
                            gameFormat == SERIES_FORMAT.HEAD_TO_HEAD ?
                                <>
                                    <select {...register("groupStage.stageFormat")} className={inputStyle}>
                                        <option value={GAME_TYPES.SINGLE_ELIMINATION}>Single Elimination</option>
                                        <option value={GAME_TYPES.DOUBLE_ELIMINATION}>Double Elimination</option>
                                        <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                                        <option value={GAME_TYPES.SWISS}>Swiss</option>
                                    </select>
                                    <label className={textAndIconStyle} >Number of rounds per match <NumRoundsInfo /> </label>
                                    <input {...register("groupStage.roundsCount")} type="number" placeholder='Enter number of rounds' className={inputStyle} />
                                </>
                                :
                                <>
                                    <select {...register("groupStage.stageFormat")} className={inputStyle}>
                                        <option value={GAME_TYPES.POINTS}>League Points</option>
                                        <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                                        <option value={GAME_TYPES.SWISS}>Swiss</option>
                                    </select>
                                    <label htmlFor="" className={textAndIconStyle}>Number of matches <NumberOfMatchesInfo /></label>
                                    <input {...register("groupStage.matchCount")} type="text" placeholder='Enter number of Matches' className={inputStyle} />
                                </>
                        }

                    </div>}

                <h1 className="col-span-2 text-xl font-bold">Main Stage settings</h1>
                <label htmlFor="">Game Format</label>
                {
                    gameFormat == SERIES_FORMAT.HEAD_TO_HEAD ?
                        <>
                            <select {...register("mainStage.stageFormat")} className={inputStyle}>
                                <option value={GAME_TYPES.SINGLE_ELIMINATION}>Single Elimination</option>
                                <option value={GAME_TYPES.DOUBLE_ELIMINATION}>Double Elimination</option>
                                <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                                <option value={GAME_TYPES.SWISS}>Swiss</option>
                            </select>
                            <label className={textAndIconStyle} >Number of rounds per match <NumRoundsInfo /> </label>
                            <select {...register("mainStage.roundsCount")} className={inputStyle}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </>
                        :
                        <>
                            <select {...register("mainStage.stageFormat")} className={inputStyle}>
                                <option value={GAME_TYPES.POINTS}>League Points</option>
                                <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                                <option value={GAME_TYPES.SWISS}>Swiss</option>
                            </select>
                            <label htmlFor="" className={textAndIconStyle}>Number of matches <NumberOfMatchesInfo /></label>
                            <input {...register("mainStage.matchCount")} type="text" placeholder='Enter number of Matches' className={inputStyle} />
                        </>
                }


            </section>
        </>
    )
}

export default CreateStepTwo

{/* <select {...register("format")} className={inputStyle}>
                    <option value={SERIES_FORMAT.HEAD_TO_HEAD}>Head to Head</option>
                    <option value={SERIES_FORMAT.LOBBY}>Lobby</option>
                </select> */}