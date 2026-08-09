import React, { useState } from 'react'
import { toast } from 'react-toastify'

function EditRewardsDialog({ rewardData
    , editIndex,
    setEditIndex,
    setEditOpen,
    update }) {
    const [data, setData] = useState(rewardData[editIndex])
    console.log("data", data);
    console.log("editIndex", editIndex);
    const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
    const handleRewardUpdate = () => {
        if (data.position == rewardData[editIndex]?.position &&
            data.reward == rewardData[editIndex]?.reward &&
            data.description == rewardData[editIndex]?.description
        ) {
            toast("No change in values")
        } else if (data.position == "" || data.reward == "") {
            toast("Reward position and reward item fields required")
        } else {
            update(editIndex, data)
            toast("Edit successful")
            setEditIndex(null)
            setEditOpen(false)
        }
    }
    return (
        <main className='w-full h-screen grid justify-center items-center fixed inset-0 backdrop-blur bg-black/30 '>
            <div className='grid bg-card p-5 rounded-xl'>
                <h1 className='text xl pb-5 text-xl font-bold'>Update Rewards</h1>
                <section className=" rounded-2xl grid grid-[1fr] gap-5">
                    <input placeholder='Update Position Details' onChange={(e) => setData({ ...data, position: e.target.value })} value={data?.position} type="text" name='' className={inputStyle} />
                    <input placeholder='Update Reward Details' onChange={(e) => setData({ ...data, reward: e.target.value })} value={data?.reward} type="text" name='' className={inputStyle} />
                    <input placeholder='Update Reward Description' onChange={(e) => setData({ ...data, description: e.target.value })} value={data?.description} type="text" name='' className={inputStyle} />
                </section>
                <section className="flex justify-end gap-5 pt-5">
                    <button onClick={()=>setEditOpen(false)} className="bg-accent py-1 px-3 rounded">Cancel</button>
                    <button onClick={handleRewardUpdate} className="bg-zinc-500 py-1 px-3 rounded">Update</button>
                </section>
            </div>
        </main>
    )
}

export default EditRewardsDialog