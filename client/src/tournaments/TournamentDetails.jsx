import SideBar from '@/common/components/SideBar'
import React from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { FaArrowRight, FaDiscord, FaFlag, FaGamepad, FaPeopleGroup, FaTelegram, FaTrophy, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

function TournamentDetails() {
  return (
    <main className='grid grid-cols-7 gap-1'>
      <SideBar />
      <section className="col-span-6 bg-card grid grid-cols-3 grid-rows-4 p-10 gap-5 relative" >

        <div className='col-span-3 row-span-1 w-full z-5 ' style={{
          backgroundImage: "url('https://res.cloudinary.com/dwaaoyztz/image/upload/v1784263441/Ep8a1_Defiance_Youtube_Cover__a9tu1h.png')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <div className="grid grid-cols-9 bg-black/60 h-full items-center p-10 gap-10" >

            <img className='h-60 col-span-2 rounded-full w-60' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1785094044/valorant-seeklogo_xl3rrk.png" alt="" />
            <div className="col-span-7 flex flex-col justify-center gap-3">
              <h3 className=' text-green-500 flex gap-2 items-center'><FaDotCircle /> open for registration</h3>
              <h1 className='text-2xl font-bold'>Valorant legends clash</h1>
              <div className="flex items-center gap-2">
                <span className='flex items-center gap-2'><FaTrophy /> $10,000 </span>
                <span className='flex items-center gap-2'><FaPeopleGroup /> 100/125 </span>
              </div>
              <div className="flex gap-3">
                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaGamepad />Game name
                </span>

                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaGamepad />Game name
                </span>

                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaGamepad />Game name
                </span>

                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaGamepad />Game name
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-3">
          <div className="flex gap-2">
            <span className='p-5 border border-card border-b-red-500 text-xl' >Overview</span>
            <span className='p-5 border border-card border-b-[#2f2f2f]' >bracket</span>
            <span className='p-5 border border-card border-b-[#2f2f2f]' >participants</span>
            <span className='p-5 border border-card border-b-[#2f2f2f]' >leaderboard</span>
            <span className='p-5 border border-card border-b-[#2f2f2f]' >matches</span>
          </div>

        </div>
        <div className="row-span-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5 bg-[#1f1f1f] p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Tournament Status</h1>
            <div className="flex justify-between">
              <span>Registration</span>
              <span className='bg-green-700 text-green-400 px-2 rounded-2xl'>open</span>
            </div>
            <div className="flex justify-between">
              <span>Teams registered:</span>
              <span className=''>100/125</span>
            </div>
            <div className="flex justify-between">
              <span>Starts in</span>
              <span className=' text-green-400 '>20d</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-red-900 p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Registration open</h1>
            <p>Register your team to participate in the tournament</p>
            <button className='bg-slate-100 py-3 text-black text-xl flex items-center justify-center gap-2 rounded-2xl' > Register Team <FaArrowRight/></button>
            <p>Regitration closes on Aug 10,2026</p>
          </div>
          <div className="flex flex-col gap-5 bg-[#1f1f1f] p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Tournament Organizer</h1>
            <div className="flex gap-2 items-center ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1785092743/bee-esports-seeklogo_hjwpya.png" className='h-20 rounded-full'  alt="" />
              <h1>Stingers collective</h1>              
            </div>
            <button className='bg-accent py-3 rounded-2xl text-xl cursor-pointer'>View profile</button>
          </div>
          <div className=" p-10 rounded-2xl bg-[#1f1f1f]">
            <h1>Share Tournament</h1>
            <div className="flex items-center gap-5">
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaWhatsapp className='text-green-500 text-5xl'/>
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaDiscord className='text-blue-500 text-5xl'/>
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaXTwitter className=' text-5xl'/>
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaTelegram className='text-blue-500 text-5xl'/>
              </div>
            </div>
          </div>
          <div className="p-10 rounded-2xl bg-[#1f1f1f]">
            <h1 className='text-2xl font-bold'>Report Tournament</h1>
            <p className='my-5'>Found an issue with this tournament?</p>
            <button className='rounded-2xl px-5 py-3 flex items-center gap-2 bg-card  '><FaFlag className='text-red-500' />Report</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TournamentDetails