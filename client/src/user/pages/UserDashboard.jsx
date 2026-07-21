import { IoMdNotifications } from "react-icons/io";
import { FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
import { IoHome, IoLogOutSharp } from "react-icons/io5";
import { TbMessagesFilled } from "react-icons/tb";
import { FaExclamation, FaTrophy, FaUser } from "react-icons/fa";
import Header from '@/common/components/Header'
import React, { useState } from 'react'
import UserHome from "../tabs/UserHome";
import UserSquads from "../tabs/UserSquads";
import { notifications } from "@/data/dummyNotiofications";
import UserNotifications from "../tabs/UserNotifications";
import UserHeader from "../components/UserHeader";
import { TrophyIcon } from "lucide-react";
import Tournament from "@/tournaments/Tournament";
import TournamentHome from "@/tournaments/TournamentHome";
import { useNavigate, useSearchParams } from "react-router-dom";

function UserDashboard() {

  const navigate = useNavigate()
  
  const sidebarButtons = (value) => {
    if(tab == value){
      return "py-3 text- bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
    else if(value == "logout"){
      return "py-3 text- hover:bg-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }  
    else{
      return "py-3 text- hover:bg-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
  }

  const [searchParams,setSearchParams] = useSearchParams()
  
  const [tab,setTab] = useState(searchParams.get("tab") || "home")

  const manageTab = (value) => {
    if(value != tab){
      setTab(value)
    }
  }
  return ( 
    <>
      {/* <Header login/> */}
      {/* <UserHeader/> */}
      <main className="w-full grid grid-cols-7 gap-1">
        {/* sidebar */}
        <section className='col-span-1 h-screen bg-card flex justify-center p-5 pt-10 sticky top-0'>
          <ul className='w-full flex flex-col items-center'>
            <img onClick={()=>navigate("/")} className="h-40 cursor-pointer" src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" alt="" />
            <li onClick={()=>manageTab("tournaments")} className={sidebarButtons("tournaments")}><FaTrophy/> Tournaments</li>
            <li onClick={()=>manageTab("home")} className={sidebarButtons("home")} ><FaExclamation/> Popular</li>
            <li onClick={()=>manageTab("squad")} className={sidebarButtons("squad")} ><FaUserGroup />Squad</li>
            <li onClick={()=>manageTab("clan")} className={sidebarButtons("clan")} ><FaPeopleGroup/>Clan</li>
            <li onClick={()=>manageTab("notifications")} className={sidebarButtons("notifications")} ><IoMdNotifications />Notifications</li>
            <li onClick={()=>manageTab("messages")} className={sidebarButtons("messages")} ><TbMessagesFilled />Messages</li>            
            <li onClick={()=>manageTab("profile")} className={sidebarButtons("profile")} ><FaUser />Profile</li>            
            
            <li className={sidebarButtons("logout")} ><IoLogOutSharp />Log out</li>
          </ul>
        </section>
        {/* components */}
        <section className="bg-card col-span-6">
          { tab == "home" && <UserHome/> }
          { tab == "squad" && <UserSquads/> }
          { tab == "notifications" && <UserNotifications/>}
          { tab == "tournaments" && <TournamentHome/>}
        </section>
      </main>
    </>
  )
}

export default UserDashboard