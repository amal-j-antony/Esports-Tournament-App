import { Select } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { TooltipTrigger } from '@/components/ui/tooltip'
import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from 'react-icons/io5'
import { GroupNumInfo, GroupStageInfo, InviteOnly, NumberOfMatchesInfo, NumRoundsInfo, TournamentFormatInfo } from '../TournamentComponents/TournamentTooltips'
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { SERIES_FORMAT } from '@/data/constants/seriesFormat'
import { GAME_TYPES } from '@/data/constants/gameTypes'
import { format } from 'date-fns'
import { FaPlus } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import { StageNameDialog } from '../TournamentComponents/StageEditDialogs'
import { STAGE_TYPE } from '@/data/constants/stageTypes'
import { StageSettingsHandler } from '@/common/components/Dropdown'
import StageRender from '../TournamentComponents/StageRender'
import { log2 } from 'three/src/nodes/math/MathNode.js'


function CreateStepTwo({
    gameNames,
    handleStepChange
}) {
    const { register, control, setValue } = useFormContext()
    const [stageIndex, setStageIndex] = useState(0)
    console.log(stageIndex);

    const [stageCount, setStageCount] = useState(0)
    const [stageNameDialog, setStageNameDialog] = useState(false)
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const [gameFormat, stageInfo, maxTeams, minTeams] = useWatch({
        control,
        name: ["format", "stageInfo", "maxTeamSize", "minTeamSize"]
    })

    const { append, remove, update, field } = useFieldArray({
        control,
        name: "stageInfo"
    })

    const addStage = () => {
        append({
            stageID: crypto.randomUUID(),
            stageName: `Untitled stage ${stageInfo.length}`,
            groupCount: 1,
            stageType: "",
            stageFormat: "",
            roundsCount: 3,
            matchCount: 3,
            seeding: "qualified"
        })
    }

    const elimTeamSizes = (value) => {
        const teamArray = []
        for (let i = 2; i <= value; i++) {
            let slots = 2 ** i
            teamArray.push(slots)
        }
        return teamArray
    }

    const calcMinTeamSize = () => {
        const exponent = log2(maxTeams)
        const minTeamSize = (2 ** (exponent - 1) + 1)
        console.log(minTeamSize);
        setValue("minTeamSize", minTeamSize)
    }

    const teamInputType = () => {
        if (groupStageSettings.enabled) {
            if (groupStageSettings.stageFormat != GAME_TYPES.SINGLE_ELIMINATION && groupStageSettings.stageFormat != GAME_TYPES.DOUBLE_ELIMINATION) {
                return "varibaleSlotPreset"
            } else return "fixedSlotPreset"
        } else {
            if (mainStageSettings.stageFormat != GAME_TYPES.SINGLE_ELIMINATION && mainStageSettings.stageFormat != GAME_TYPES.DOUBLE_ELIMINATION) {
                return "varibaleSlotPreset"
            } else return "fixedSlotPreset"
        }
    }

    const handleStageChange = (index) => {

        if (stageIndex != index) {
            setStageIndex(index)
        }
    }


    useEffect(() => {
        console.log("gameFormat", gameFormat);
    }, [gameFormat])


    return (
        <>
            <section className="grid grid-cols-2 gap-5 border rounded-2xl p-10 w-3/4 bg-[#1d1d1d]">
                <h1 className='mb-5 text-2xl font-bold col-span-2'>Tournament Settings</h1>
                <h1>Tournament format</h1>
                <span className={inputStyle}>{gameFormat ? gameFormat === SERIES_FORMAT.HEAD_TO_HEAD ? "Head To Head" : "Lobby" : "Select game to set tournament format"}</span>
                <label htmlFor="">Tournament Hosting mode</label>
                <select name="" id="" className={inputStyle}>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
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
                {
                    teamInputType === "variableSlotPreset"
                        ? <input {...register("maxTeamSize")} value={maxTeams} type="number" placeholder='Enter total number of teams' className={inputStyle} />
                        :
                        <select name="" id="" className={inputStyle}>
                            {elimTeamSizes(7).map((item, index) => (
                                <option key={"awesd" + index} value={item}>{item}</option>
                            ))}
                        </select>
                }

                <label htmlFor="">Minimum Number of Teams</label>
                <input required {...register("minTeamSize")} defaultValue={minTeams} type="text" placeholder='Enter minimum number of Teams' className={inputStyle} />
                <hr className="col-span-2" />
                <h1 className="col-span-2 text-2xl font-bold">Tournament Stage setup</h1>
                <>
                    <div className='grid grid-cols-2 w-full col-span-2 gap-5 border rounded-2xl p-5 bg-[#1a1a1a]'>
                        <div className="flex gap-2 col-span-2 p-2 border rounded-xl">
                            {stageInfo.map((item, index) => (
                                <div onClick={() => handleStageChange(index)} className="bg-accent-foreground p-2 rounded cursor-pointer">
                                    {item.stageName
                                        ? <div className='flex items-center gap-2'>{item.stageName} <StageSettingsHandler stageNameDialog={stageNameDialog} setStageNameDialog={setStageNameDialog} index={index} /> </div>
                                        : <div className='flex items-center gap-2'>Untitled Stage {index + 1} <StageSettingsHandler stageNameDialog={stageNameDialog} setStageNameDialog={setStageNameDialog} index={index} /> </div>}
                                </div>
                            ))}
                            <button onClick={addStage} className="flex items-center gap-2 bg-zinc-500 p-2 rounded cursor-pointer">Add stage <FaPlus /></button>
                            {stageNameDialog &&
                                <StageNameDialog
                                    stageNameDialog={stageNameDialog}
                                    setStageNameDialog={setStageNameDialog}
                                    index={stageIndex}

                                />}
                        </div>
                        <StageRender
                            index={stageIndex}
                            stageDetails={stageInfo[stageIndex]}
                            gameFormat={gameFormat} />

                    </div>
                </>
                <div className='col-span-2 grid grid-cols-3 gap-5'>
                    <button onClick={() => handleStepChange("previous")} className='border border-zinc-600 rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                    <button className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save Changes </button>
                    <button onClick={() => handleStepChange("next")} className='font-bold bg-[#5a5a5a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save and Next</button>
                </div>
            </section>
        </>
    )
}

export default CreateStepTwo

{/* <select {...register("format")} className={inputStyle}>
                    <option value={SERIES_FORMAT.HEAD_TO_HEAD}>Head to Head</option>
                    <option value={SERIES_FORMAT.LOBBY}>Lobby</option>
                </select> */}

{/* <h1 className="col-span-2 font-bold text-xl">Group stage settings</h1>
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

                    </div>} */}

{/* <h1 className="col-span-2 text-xl font-bold">Main Stage settings</h1>
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
                } */}

{/* <div onClick={() => setStageCount(1)} className="col-span-2 border-2 border-dashed  rounded  grid p-5 cursor-pointer">
                            <div className="flex gap-2 justify-center items-center">
                                <h1>Add Intermediate Stage</h1>
                                <div className="bg-zinc-100 text-zinc-900 p-2 rounded"><FaPlus /></div>
                            </div>
                        </div>*/}

{/* <label htmlFor="" className='flex items-center gap-2' >Number of Groups <GroupNumInfo /></label>
                        <input {...register("groupStage.groupCount")} type="number" placeholder='Enter number of groups' className={inputStyle} />
                        <label htmlFor="">Game type</label>
                        <select defaultValue={STAGE_TYPE.GROUP} className={inputStyle} >
                            <option value={STAGE_TYPE.BRACKET}>Bracket</option>
                            <option value={STAGE_TYPE.GROUP}>Group</option>
                        </select>
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
                        } */}