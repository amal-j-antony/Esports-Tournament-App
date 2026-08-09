import React from 'react'
import { SERIES_FORMAT } from '@/data/constants/seriesFormat'
import { GAME_TYPES } from '@/data/constants/gameTypes'
import { STAGE_TYPE } from '@/data/constants/stageTypes'
import { GroupNumInfo, NumberOfMatchesInfo, NumRoundsInfo } from './TournamentTooltips'
import { useFormContext, useWatch } from 'react-hook-form'

function StageRender({
    gameFormat,
    index
}) {
    const { register, setValue, control } = useFormContext()
    const stageDetails = useWatch({
        control,
        name: `stageInfo.${index}`
    })    
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const textAndIconStyle = 'flex items-center gap-2'
    return (
        <>
            <label htmlFor="" className='flex items-center gap-2' >Number of Groups <GroupNumInfo /></label>
            <input {...register(`stageInfo.${index}.groupCount`)} value={stageDetails.groupCount} type="number" placeholder='Enter number of groups' className={inputStyle} />
            <label htmlFor="">Game type</label>
            <select {...register(`stageInfo.${index}.stageType`)} defaultValue={STAGE_TYPE.GROUP} value={stageDetails.stageType} className={inputStyle} >
                <option value={STAGE_TYPE.BRACKET}>Bracket</option>
                <option value={STAGE_TYPE.GROUP}>Group</option>
            </select>
            <label htmlFor="">Game Format</label>
            {
                gameFormat == SERIES_FORMAT.HEAD_TO_HEAD ?
                    <>
                        <select {...register(`stageInfo.${index}.stageFormat`)} value={stageDetails.stageFormat} className={inputStyle}>
                            <option value={GAME_TYPES.SINGLE_ELIMINATION}>Single Elimination</option>
                            <option value={GAME_TYPES.DOUBLE_ELIMINATION}>Double Elimination</option>
                            <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                            <option value={GAME_TYPES.SWISS}>Swiss</option>
                        </select>
                        <label className={textAndIconStyle} >Number of rounds per match <NumRoundsInfo /> </label>
                        <input {...register(`stageInfo.${index}.roundsCount`)} value={GroupStageInfo.roundsCount} type="number" placeholder='Enter number of rounds' className={inputStyle} />
                    </>
                    :
                    <>
                        <select {...register(`stageInfo.${index}.stageFormat`)} value={stageDetails.stageFormat} className={inputStyle}>
                            <option value={GAME_TYPES.POINTS}>League Points</option>
                            <option value={GAME_TYPES.ROUND_ROBIN}>Round Robin</option>
                            <option value={GAME_TYPES.SWISS}>Swiss</option>
                        </select>
                        <label htmlFor="" className={textAndIconStyle}>Number of matches <NumberOfMatchesInfo /></label>
                        <input {...register(`stageInfo.${index}.roundsCount`)} value={stageDetails.roundsCount} type="text" placeholder='Enter number of Matches' className={inputStyle} />
                    </>
            }
        </>
    )
}

export default StageRender