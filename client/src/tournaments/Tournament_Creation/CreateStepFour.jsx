import { Switch } from '@/components/ui/switch'
import React, { useState } from 'react'
import { PodiumRewardsInfo } from '../TournamentComponents/TournamentTooltips'
import currencies from '@/data/currencies'
import { PiPlusLight } from 'react-icons/pi'
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineEdit } from 'react-icons/md'
import { FaPlus, FaTrash } from 'react-icons/fa6'
import EditRewardsDialog from '../TournamentComponents/EditRewardsDialog'
import DeleteRewardDialog from '../TournamentComponents/DeleteRewardDialog'

function CreateStepFour({  
  handleStepChange
}) {
  const {register,control,} = useFormContext()
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen,setDeleteOpen] = useState(false)
  console.log(editOpen);
  const [deleteIndex,setDeleteIndex] = useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [fieldData, setFieldData] = useState({
    position: "",
    reward: "",
    description: ""
  })
  const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
  const podiumSwitch = useWatch({
    control,
    name: "enableRewards"
  })
  const { field, append, remove, update } = useFieldArray({
    control,
    name: "rewards"
  })
  const rewardData = useWatch({
    control,
    name: "rewards"
  })

  const addReward = () => {
    if(fieldData.position == "" || fieldData.reward == ''){
      toast("Please fill out position and reward details")
      return
    }
    if (rewardData.length > 0) {
      const identicalMatch = rewardData.filter(item => item.position.trim().toLowerCase() == fieldData.position.trim().toLowerCase())
      if (identicalMatch.length > 0) {
        toast("Field already exists")
        setFieldData({
          position: "",
          reward: "",
          description: ""
        })
        return
      } else {
        append(fieldData)
        toast("Field registered successfully")
        setFieldData({
          position: "",
          reward: "",
          description: ""
        })
      }
    } else {
      append(fieldData)
      toast("Field registered successfully")
      setFieldData({
        position: "",
        reward: "",
        description: ""
      })
    }
  }

  const deleteReward = (index) => {

  }

  return (
    <>
      <main className='grid grid-cols-2 w-3/4 gap-5 bg-[#1d1d1d] p-10 rounded-2xl'>
        <div className="col-span-2 w-full">
          <h1 className='text-xl font-bold'>Prize Structure</h1>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="">Podium Rewards</label>
          <PodiumRewardsInfo />
        </div>
        <div className='flex gap-2 items-center'>
          <Controller
            name='enableRewards'
            control={control}
            render={({ field }) => (
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            )}
          />
          {podiumSwitch ? <span>Enabled</span> : <span>Disabled</span>}
        </div>
        {podiumSwitch &&
          <>
            <div className="w-full grid grid-cols-10 gap-5  col-span-2 rounded-2xl">
              <input required onChange={(e) => setFieldData({ ...fieldData, position: e.target.value })} value={fieldData.position} type="text" className={inputStyle + "col-span-3"} placeholder='Enter Position' />
              <input required onChange={(e) => setFieldData({ ...fieldData, reward: e.target.value })} value={fieldData.reward} type="text" className={inputStyle + "col-span-3"} placeholder='Enter Reward' />
              <input onChange={(e) => setFieldData({ ...fieldData, description: e.target.value })} value={fieldData.description} type="text" className={inputStyle + "col-span-3 "} placeholder='Enter reward description' />
              <button onClick={() => addReward()} className="p-1 bg-[#9f9f9f] rounded-2xl cursor-pointer flex justify-center items-center gap-2 hover:bg-accent-foreground duration-500"><FaPlus className='text-xl font-bold' />Add</button>
            </div>
            <h1 className='font-bold'>Reward List</h1>
            {
              rewardData.length > 0 ?
                rewardData.map((item, index) => (
                  <div key={"werpo" + index} className='grid grid-cols-[3fr_3fr_3fr_1fr] gap-5 col-span-2 w-full'>
                    <p className={inputStyle}>{item.position}</p>
                    <p className={inputStyle}>{item.reward}</p>
                    <p className={inputStyle}>{item.description}</p>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <button onClick={()=>{setEditOpen(true),setEditIndex(index)}} className='rounded-xl flex justify-center items-center bg-[#9f9f9f] hover:bg-accent-foreground duration-500 cursor-pointer'><MdOutlineEdit /></button>
                      <button onClick={()=>{setDeleteOpen(true),setDeleteIndex(index)}} className='rounded-xl flex justify-center items-center bg-[#9f9f9f] hover:bg-accent-foreground duration-500 cursor-pointer'><FaTrash /></button>
                    </div>
                  </div>
                ))
                :
                <div className='col-span-2'>No rewards added yet</div>
            }
          </>
        }

        <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
        <button onClick={() => handleStepChange("next")} className='bg-accent-foreground rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Next Step</button>
      </main>

      {/* edit */}
      {editOpen && <EditRewardsDialog 
        rewardData={rewardData}
        setEditOpen={setEditOpen}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        update={update} />}

        {/* delete */}
        {
          deleteOpen && <DeleteRewardDialog
          deleteIndex={deleteIndex}
          setDeleteIndex={setDeleteIndex}
          remove={remove}
          setDeleteOpen={setDeleteOpen}
          />
        }
    </>
  )
}

export default CreateStepFour

{/* <label htmlFor="">Reward type</label>
          <select name="" className={inputStyle} id="">
            <option value="cash">Cash Prize</option>
            <option value="items">Custom</option>
          </select>
          <label htmlFor="">Total prize pool</label>
          <div className='flex gap-2'>
            <input  className={inputStyle} type="number" placeholder='Enter total prize pool'
            inputMode='numeric' />
            <select className={inputStyle} name=""  id="">
              <option value="none">Currency</option>
              {
                currencies.map((item,index)=>(
                  <option value={item.code}>{item.flag} {item.code}</option>
                ))
              }
            </select>
          </div>
          <label htmlFor="">1st place rewards</label>
          <div className='flex gap-2'>
            <input  className={inputStyle} type="number" placeholder='Enter total prize pool'
            inputMode='numeric' />
            <select className={inputStyle} name=""  id="">
              <option value="none">Currency</option>
              {
                currencies.map((item,index)=>(
                  <option value={item.code}>{item.flag} {item.code}</option>
                ))
              }
            </select>
          </div> */}