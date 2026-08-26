import { Trash } from 'lucide-react'
import { useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import {  FaInfoCircle } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { MdDelete, MdEdit } from 'react-icons/md'
import { toast } from 'react-toastify'
import EditRuleDialog from '../TournamentComponents/EditRuleDialog'
import DeleteRuleDialog from '../TournamentComponents/DeleteRuleDialog'
import { useParams } from 'react-router-dom'
import { updateTournamentStepThreeAPI } from '@/services/tournamentMethods'
import { StepperPreload } from '@/common/components/Loader'


function CreateStepThree({
    handleStepChange,
    getTournamentData
}) {
    const { TID } = useParams()
    const { control, getValues , formState } = useFormContext()
    const [ruleEditButton, setRuleEditButton] = useState(false)
    const [ruleRemoveButton, setRuleRemoveButton] = useState(false)
    const [loading, setLoading] = useState(false)
    const [ruleInput, setRuleInput] = useState("")
    const { append, remove, update } = useFieldArray({
        control,
        name: "rules"
    })

    const ruleData = useWatch({
        control,
        name: "rules"
    })

    const addRuleHandler = () => {
        if (ruleInput == "") {
            toast.warning("Please enter a rule")
            return
        }
        const compare = ruleData.filter(item => item.toLowerCase() == ruleInput.toLowerCase())
        console.log(compare);

        if (compare.length == 0) {
            append(ruleInput)
            toast.success("Rule Added")
            setRuleInput("")
        } else {
            toast("Rule added already")
        }
    }

    const ruleUpdateHandler = (index, data) => {

        if (!data) {
            toast.info("Please enter updated rule")
            setRuleEditButton(false)
        }
        if (ruleData[index] == data) {
            toast.info("No change in rule")
            setRuleEditButton(false)
        }
        update(index, data)
        toast.success("Rule updated successfully")
        setRuleEditButton(false)
    }

    const sendData = async (data) => {
        const payload = {
            rules: data.rules,
            tID: TID
        }
        setLoading(true)
        try {
            const result = await updateTournamentStepThreeAPI(payload)
            console.log(result);
            if (result.status == 200) {
                toast('Data updated')
            }else{
                toast('Something went wrong')
            }
        } catch (error) {
            console.log(error);
            toast('Something went wrong')
        }
        getTournamentData()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const checkDirty = !!formState.dirtyFields.rules


    const validateData = () => {
        const data = getValues()
        if (data.rules.length == 0) {
            toast('No rules entered')
            return
        } else {
            sendData(data)
        }
    }
    return (
        <>
            <main className='flex justify-center gap-5 w-3/4 bg-[#1d1d1d] p-10 rounded-2xl' >
                {
                    loading ?
                        <StepperPreload />
                        :
                        <section className='w-full'>
                            <h1 className='mb-5 text-2xl font-bold'>Tournament Rules</h1>
                            <div className='mb-5 flex gap-2 col-span-2 w-full'>
                                <input onChange={(e) => setRuleInput(e.target.value)} value={ruleInput} type="text" placeholder='Enter a tournament rule' className="bg-accent py-4 px-10  rounded-xl w-100 grow" />
                                <button onClick={() => addRuleHandler()} className='bg-zinc-600 hover:bg-accent-foreground duration-500 rounded-xl py-1 px-5 cursor-pointer' ><FaPlus /></button>
                                <button onClick={() => setRuleInput("")} className='bg-zinc-600 hover:bg-accent-foreground duration-500 rounded-xl py-1 px-5 cursor-pointer' ><Trash /></button>
                            </div>

                            <div className='overflow-hidden mt-5'>
                                {ruleData.length > 0 ?
                                    ruleData.map((item, index) => (
                                        <>
                                            <section className="flex justify-between items-center px-10 w-full  mb-4 rounded-xl bg-accent">
                                                <div className="border py-2 px-3 rounded-lg bg-zinc-600">{index + 1}</div>
                                                <div>{item}</div>
                                                <div className='p-3 text-center flex gap-4 items-center justify-center'>
                                                    <button onClick={() => setRuleEditButton(true)} className="border p-3 rounded-lg  border-zinc-500 bg-zinc-600 text-md duration-500 hover:bg-zinc-50 hover:text-black cursor-pointer"><MdEdit /> </button>
                                                    <button onClick={() => setRuleRemoveButton(true)} className="border p-3 rounded-lg  border-zinc-500 bg-zinc-600 text-md duration-500 hover:bg-zinc-50 hover:text-black cursor-pointer"><MdDelete /></button>
                                                </div>
                                            </section>
                                            <EditRuleDialog
                                                ruleEditButton={ruleEditButton}
                                                setRuleEditButton={setRuleEditButton}
                                                index={index}
                                                ruleUpdateHandler={ruleUpdateHandler} />
                                            <DeleteRuleDialog
                                                ruleRemoveButton={ruleRemoveButton}
                                                setRuleRemoveButton={setRuleRemoveButton}
                                                index={index}
                                                remove={remove}
                                            />
                                        </>
                                    ))
                                    :
                                    <>
                                        <div className="flex justify-center items-center text p-3 rounded-xl border mb-5 h-30">No rules added yet.</div>
                                    </>}
                            </div>
                            <p className='p-3 flex items-center justify-center gap-2 rounded-xl border bg-[#1d1d1d]'><FaInfoCircle className='h-5 w-5' />  Tournament organizers are responsible for enforcing the rules they set for tournaments.</p>
                            <div className='grid grid-cols-3 gap-5 py-5'>
                                <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                                <button type='button' onClick={() => validateData()} className='bg-[#5a5a5a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Verify and Save Changes </button>
                                <button disabled={checkDirty} onClick={() => {                                    
                                    setLoading(true)
                                    setTimeout(()=>{
                                        setLoading(false)
                                        handleStepChange("next")
                                    },1000)
                                    }} className={`bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 ${checkDirty ? 'cursor-not-allowed' : 'cursor-pointer'}  `} >Next Step</button>
                            </div>
                        </section>
                }

            </main>

        </>
    )
}

export default CreateStepThree