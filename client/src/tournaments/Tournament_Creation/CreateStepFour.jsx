import { Switch } from '@/components/ui/switch'
import React, { useState } from 'react'
import { PodiumRewardsInfo } from './TournamentTooltips'
import currencies from '@/data/currencies'
import { PiPlusLight } from 'react-icons/pi'

function CreateStepFour({
  gameNames,
  setTournamentDetails,
  tournamentDetails,
  activeStep,
  setActiveStep
}) {
  const [toggle, setToggle] = useState(false)
  const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
  

  return (
    <>
      <main className='grid grid-cols-2 w-full gap-5 bg-[#1d1d1d] p-10 rounded-2xl'>
        <div className="col-span-2 w-full">
          <h1 className='text-xl font-bold'>Prize Structure</h1>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="">Enable Podium Rewards</label>
          <PodiumRewardsInfo />
        </div>
        <div className='flex gap-2 items-center'>
          <Switch checked={toggle} onCheckedChange={() => setToggle(!toggle)} />
          {toggle ? <span>Enabled</span> : <span>Disabled</span>}
        </div>
        {toggle && <div className="w-full grid grid-cols-10 gap-5 p-10 bg-[#1a1a1a] col-span-2 rounded-2xl">
          {/* <div className="col-span-4 flex gap-2 items-center">
            Number of Prizes: 1
            <button className="p-1 bg-[#9f9f9f] text-black rounded"><PiPlusLight className=''/></button>
          </div> */}
          <input type="text" className={inputStyle + "col-span-3"} placeholder='Enter Position' />
          <input type="text" className={inputStyle + "col-span-3"} placeholder='Enter Reward' />
          <input type="text" className={inputStyle + "col-span-3"} placeholder='Enter reward description' />
          <button className="p-1 bg-[#9f9f9f] text-black rounded-2xl cursor-pointer flex justify-center items-center"><PiPlusLight className='text-xl font-bold' /></button>
        </div>}
      </main>
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