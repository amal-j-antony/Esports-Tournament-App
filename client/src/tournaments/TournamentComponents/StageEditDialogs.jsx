import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'

export function StageNameDialog({
    stageNameDialog, setStageNameDialog,
   index
}) {

    const [newTitle,setNewTitle] = useState()
    const {register,setValue} = useFormContext()
    const inputStyle = 'bg-accent px-10 py-3  rounded-xl '
    const handleTitleSave = () => {
        if(newTitle){
            setValue(`stageInfo.${index}.stageName`,newTitle)
            setStageNameDialog({
                status: false,
                index: null
            })
        }else{
            toast("Field is empty")
        }
    }
    return (
        <>
            <main className="bg-black/30 backdrop-blur grid justify-center items-center fixed inset-0">
                <section className="grid gap-5 p-5 bg-card rounded-2xl min-w-100">
                    <h1>Enter Stage Name</h1>
                    <input onChange={(e)=>setNewTitle(e.target.value)} type="text" className={inputStyle} />
                    <div className="flex justify-end gap-5">
                        <button onClick={() => setStageNameDialog({
                            status: false,
                            index: null
                        })} className="py-1 px-3 bg-accent rounded-xl cursor-pointer">Cancel</button>
                        <button onClick={handleTitleSave} className="py-1 px-3 bg-zinc-500 rounded-xl cursor-pointer">Proceed</button>
                    </div>
                </section>
            </main>
        </>
    )
}

