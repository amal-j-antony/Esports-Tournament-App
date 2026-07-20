import { IoMdNotifications } from "react-icons/io";
import { FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
import { IoHome, IoLogOutSharp } from "react-icons/io5";
import { TbMessagesFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import Header from '@/common/components/Header'
import React, { useState } from 'react'
import UserHome from "../tabs/UserHome";
import UserSquads from "../tabs/UserSquads";
import { notifications } from "@/assets/dummyNotiofications";
import UserNotifications from "../tabs/UserNotifications";
import UserHeader from "../components/UserHeader";

function UserDashboard() {
  
  const sidebarButtons = (value) => {
    if(tab == value){
      return "py-3 mb-3 text-2xl bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
    else if(value == "logout"){
      return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }  
    else{
      return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
  }

  
  const [tab,setTab] = useState("home")

  const manageTab = (value) => {
    if(value != tab){
      setTab(value)
    }
  }
  return ( 
    <>
      {/* <Header login/> */}
      <UserHeader/>
      <main className="w-full min-h-screen h-full grid grid-cols-6 gap-1">
        {/* sidebar */}
        <section className='col-span-1 bg-card flex justify-center p-5 pt-10'>
          <ul className='w-full flex flex-col items-center'>
            <li onClick={()=>manageTab("home")} className={sidebarButtons("home")} ><IoHome/> Home</li>
            <li onClick={()=>manageTab("profile")} className={sidebarButtons("profile")} ><FaUser />Profile</li>
            <li onClick={()=>manageTab("squad")} className={sidebarButtons("squad")} ><FaUserGroup />Squad</li>
            <li onClick={()=>manageTab("clan")} className={sidebarButtons("clan")} ><FaPeopleGroup/>Clan</li>
            <li onClick={()=>manageTab("notifications")} className={sidebarButtons("notifications")} ><IoMdNotifications />Notifications</li>
            <li onClick={()=>manageTab("messages")} className={sidebarButtons("messages")} ><TbMessagesFilled />Messages</li>
            <li className={sidebarButtons("logout")} ><IoLogOutSharp />Log out</li>
          </ul>
        </section>
        {/* components */}
        <section className="bg-card col-span-5">
          { tab == "home" && <UserHome/> }
          { tab == "squad" && <UserSquads/> }
          { tab == "notifications" && <UserNotifications/>}
        </section>
      </main>
    </>
  )
}

export default UserDashboard