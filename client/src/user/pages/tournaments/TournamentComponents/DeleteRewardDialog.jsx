import React from 'react'
import { toast } from 'react-toastify'


function DeleteRewardDialog({deleteIndex,
    remove,
    setDeleteIndex,
    setDeleteOpen
}) {
    const handleRemoveReward = () => {
        remove(deleteIndex)
        setDeleteIndex(null)
        setDeleteOpen(false)
        toast("Field deleted")
    }
    return (
        <>
            <main className="bg-black/30 backdrop-blur grid justify-center items-center fixed inset-0">
                <section className="grid gap-5 p-5 bg-card rounded-2xl">
                    <h1>This action cannot be reverted. Continue?</h1>
                    <div className="flex justify-end gap-5">
                        <button onClick={()=>setDeleteOpen(false)} className="py-1 px-3 bg-accent rounded-xl cursor-pointer">Cancel</button>
                        <button onClick={handleRemoveReward} className="py-1 px-3 bg-zinc-500 rounded-xl cursor-pointer">Proceed</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DeleteRewardDialog