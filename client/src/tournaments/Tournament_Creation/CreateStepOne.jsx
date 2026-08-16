import React, { useContext, useEffect, useState } from 'react'
import { esportsTitles } from '@/data/gameList';
import { Switch } from '@/components/ui/switch';
import { InviteOnly } from '../TournamentComponents/TournamentTooltips';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { SERIES_FORMAT } from '@/data/constants/seriesFormat'; import { button } from '@/data/universalStyles';
import { StepperPreload } from '@/common/components/Loader';
import { toast } from 'react-toastify';
import { OrgContext } from '@/context/OrgProvider';
import { createTournamentAPI, updateTournamentStepOneAPI } from '@/services/tournamentMethods';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '@/services/axiosInstance';


function CreateStepOne({ handleStepChange, getTournamentData }) {
    const { TID } = useParams()
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState('')
    const { orgData } = useContext(OrgContext)
    const { register, control, setValue, formState, trigger, getValues } = useFormContext()
    const gameList = esportsTitles.map(item => item.name)
    const textAndIconStyle = 'flex items-center gap-2'
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const selectedGame = useWatch({
        control,
        name: "game"
    })

    const tournamentImage = useWatch({
        control,
        name: "image"
    })

    const handleAPIpush = async (form) => {
        let result = null
        try {
            if (TID) {
                result = await updateTournamentStepOneAPI(form)
            } else {
                result = await createTournamentAPI(form)
            }
            console.log('api step one:', result);
            return result
        } catch (error) {
            console.log(error);
            toast('Something went wrong,please try again')
            return null
        }
    }


    const submit = async () => {
        // const payload = getValues(['name','game',"image","description"])       
        let dirtyFields
        const data = getValues()
        if (TID) {
            dirtyFields = formState.dirtyFields
            if (!dirtyFields.name && !dirtyFields.game && !dirtyFields.image && !dirtyFields.description) {
                // toast('Nothing to update')
                return
            }
        }

        const valid = await trigger(['name', 'game', 'image'])

        if (valid) {
            const form = new FormData()
            TID ? dirtyFields.format && form.append('gameFormat', data.format) : form.append('gameFormat', data.format)
            !TID && form.append('orgID', orgData._id)
            TID ? dirtyFields.name && form.append('name', data.name) : form.append('name', data.name)
            TID ? dirtyFields.game && form.append('game', data.game) : form.append('game', data.game)
            if (TID) {
                dirtyFields.description && form.append('description', data.description)
                dirtyFields.image?.[0] && form.append('image', data.image[0])
            } else {
                data.description && form.append('description', data.description)
                data.image?.[0] && form.append('image', data.image[0])
            }
            TID && form.append('tID', TID)

            setLoading(true)

            const result = await handleAPIpush(form)
            if (result.status == 200) {
                toast('Progress Saved')
            } else {
                toast('Something went wrong,please try again')
            }
            getTournamentData()
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        } else {
            toast('One or more fields have errors')
            console.log(formState.errors);
            
        }
    }

    useEffect(() => {
        if (tournamentImage && !TID) {
            const imageURL = URL.createObjectURL(tournamentImage[0])
            setPreview(imageURL)
        } else if (TID) {
            setPreview(`${axiosInstance.defaults.baseURL}/${tournamentImage}`)
        }
    }, [tournamentImage])

    useEffect(() => {
        const gameFormat = esportsTitles.find(item => item.name == selectedGame)?.config.format
        // console.log(gameFormat);
        setValue("format", gameFormat)
    }, [selectedGame,TID])

    // console.log("selected game = ",selectedGame);

    return (
        <>
            <form className="grid grid-cols-2 gap-5 border rounded-2xl p-10 w-3/4 bg-[#1d1d1d] relative">
                {loading ? <StepperPreload /> : <>
                    <div className="col-span-2 ">
                        <h1 className='mb-5 text-2xl font-bold'>Basic Details</h1>
                    </div>
                    <label htmlFor="">Select Game</label>
                    <select {...register("game")} className={inputStyle}>
                        {
                            gameList.map((item, index) => (
                                <option key={index + 'aoc'} value={item}>{item}</option>
                            ))
                        }
                    </select>
                    {
                        formState.errors.game?.message &&
                        <h1 className="col-span-2">{formState.errors.game?.message}</h1>
                    }
                    <label htmlFor="">Tournament name</label>
                    <input {...register("name")} className={inputStyle} type="text" placeholder='Enter Tournament Name' required />
                    {
                        formState.errors.name?.message &&
                        <h1 className="col-span-2">{formState.errors.name?.message}</h1>
                    }
                    <label htmlFor="">Tournament Descriptiom</label>
                    <textarea {...register("description")} className={inputStyle} type="text" placeholder="Enter Tournament Description" />
                    <hr className="col-span-2" />
                    <h1 className="col-span-2 text-xl font-bold">Media</h1>
                    <label htmlFor="">Tournament Image</label>
                    <div className='flex flex-col gap-10 '>
                        <input {...register("image")} className={inputStyle} type="file" />
                        {
                            preview &&
                            <>
                                <img src={preview} alt="" className='h-50 w-50 rounded mx-auto' />
                                <button onClick={() => {
                                    setValue('image', "")
                                    setPreview('')
                                }} className={button}>Clear image</button>
                            </>
                        }
                    </div>
                    {
                        formState.errors.image?.message == "File must be an image" &&
                        <h1 className="col-span-2">{formState.errors.image?.message}</h1>
                    }

                    <div className='col-span-2 grid grid-cols-3 gap-5'>
                        <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                        <button type='button' onClick={() => submit()} className='bg-[#5a5a5a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save Changes </button>
                        <button onClick={() => {
                            submit()
                            setLoading(true)
                            setTimeout(()=>{
                                setLoading(false)
                                handleStepChange("next")
                            },2000)
                        }} className='bg-accent-foreground rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save and Next</button>
                    </div>
                </>}
            </form>
        </>
    )
}

export default CreateStepOne