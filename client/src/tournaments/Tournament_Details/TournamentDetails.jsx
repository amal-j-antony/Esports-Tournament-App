import SideBar from '@/common/components/SideBar'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { FaArrowRight, FaBell, FaDiscord, FaFlag, FaGamepad, FaGlobe, FaPeopleGroup, FaTelegram, FaTrophy, FaWhatsapp, FaWifi, FaXTwitter } from 'react-icons/fa6'
import TournamentDetailStepper from './TournamentDetailStepper'
import {Stepper} from '@/common/components/Stepper'

function TournamentDetails() {
  const steps = [{
    stepNumber: 1,
    title: "Registration start",
    description: "Aug 12,2026",
    time: "10:00 AM"
  },
  {
    stepNumber: 2,
    title: "Registration end",
    description: "Aug 15,2026",
    time: "10:00 AM"
  },
  {
    stepNumber: 3,
    title: "Check In",
    description: "Aug 17,2026",
    time: "9:00 PM"
  },
  {
    stepNumber: 4,
    title: "Tournament Starts",
    description: "Aug 17,2026",
    time: "10:00 PM"
  },
  {
    stepNumber: 5,
    title: "Final",
    description: "Aug 27,2026",
    time: "9:00 PM"
  }
  ]
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
                  <FaGlobe />Worldwide
                </span>

                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaWifi />Online
                </span>

                <span className='flex items-center gap-2 bg-accent p-4 rounded-2xl'>
                  <FaBell />Get Notified
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
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 flex flex-col gap-3 p-10 mt-5 bg-accent rounded-2xl">
              <h1 className='text-xl font-bold'>About tournament</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur nostrum labore in, cum veniam sit quisquam voluptates iusto. Laudantium.</p>
            </div>
            <div className=" col-span-1 row-span-2 flex flex-col bg-accent rounded-2xl p-5 mt-5">
              <h1 className='pb-3 text-xl font-bold'>Tournament Info</h1>
              <div className="grid grid-cols-1 pt-5 border border-t-[#2f2f2f] border-accent gap-5 ">
                <div className="flex justify-between">
                  <p>Format</p>
                  <p>Single elimination</p>
                </div>

                <div className="flex justify-between">
                  <p>Team Size</p>
                  <p>5v5</p>
                </div>

                <div className="flex justify-between">
                  <p>Game Mode</p>
                  <p>Best of 3</p>
                </div>

                <div className="flex justify-between">
                  <p>Team Size</p>
                  <p>5v5</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 p-5 bg-accent rounded-2xl">
              <h1 className='text-xl font-bold'>Prize Pool</h1>
              <div className="p-5 flex flex-col gap-3">
                <span className='flex items-center gap-2 text-2xl font-bold'><img src="/trophy-award.png" className='h-5 ' alt="" />10,000$</span>
                <hr />
                <div className="flex gap-5 px-5">
                  <div className="">
                    <h1>1st place</h1>
                    <span>$5000</span>
                  </div>
                  <Separator orientation='vertical' />
                  <div className="">
                    <h1>2nd place</h1>
                    <span>$3000</span>
                  </div>

                  <Separator orientation='vertical' />
                  <div className="">
                    <h1>3rd place</h1>
                    <span>$1000</span>
                  </div>

                  <Separator orientation='vertical' />
                  <div className="">
                    <h1>4th place</h1>
                    <span>$1000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 bg-accent flex flex-col gap-5 p-10 rounded-2xl">
              <h1 className='text-2xl font-bold'> Tournament schedule</h1>
              <Stepper steps={steps} />
            </div>

            <div className="col-span-3 bg-accent rounded-2xl p-10">
              <h1 className='text-xl font-bold'>Rules</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga ut at iusto quo enim expedita in eos fugit quia culpa voluptas hic repellat omnis quisquam voluptates amet sapiente, similique accusantium rem debitis obcaecati quis voluptate nostrum! Commodi sunt eum, repudiandae iure accusantium vero at natus, quasi adipisci explicabo, enim nostrum ab? Tenetur animi soluta temporibus voluptates iusto earum asperiores eaque id dolorum consectetur, adipisci quas iure inventore quae et! Deserunt, consequatur sapiente? Culpa itaque necessitatibus veniam accusamus, temporibus deserunt, doloremque quibusdam quod aliquid eligendi maiores in. Aperiam deleniti eveniet porro mollitia obcaecati, eligendi, dolore repudiandae, inventore molestias praesentium quo.</p>
            </div>
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
            <button className='bg-slate-100 py-3 text-black text-xl flex items-center justify-center gap-2 rounded-2xl' > Register Team <FaArrowRight /></button>
            <p>Regitration closes on Aug 10,2026</p>
          </div>
          <div className="flex flex-col gap-5 bg-[#1f1f1f] p-10 rounded-2xl">
            <h1 className='text-2xl font-bold'>Tournament Organizer</h1>
            <div className="flex gap-2 items-center ">
              <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1785092743/bee-esports-seeklogo_hjwpya.png" className='h-20 rounded-full' alt="" />
              <h1>Stingers collective</h1>
            </div>
            <button className='bg-accent py-3 rounded-2xl text-xl cursor-pointer'>View profile</button>
          </div>
          <div className=" p-10 rounded-2xl bg-[#1f1f1f]">
            <h1>Share Tournament</h1>
            <div className="flex items-center gap-5">
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaWhatsapp className='text-green-500 text-5xl' />
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaDiscord className='text-blue-500 text-5xl' />
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaXTwitter className=' text-5xl' />
              </div>
              <div className="flex justify-center items-center p-3 bg-accent rounded-2xl mt-5">
                <FaTelegram className='text-blue-500 text-5xl' />
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