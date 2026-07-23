import { IoMdNotifications } from "react-icons/io";
import { FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
import { IoHome, IoLogOutSharp } from "react-icons/io5";
import { TbMessagesFilled } from "react-icons/tb";
import { FaExclamation, FaTrophy, FaUser } from "react-icons/fa";
import Header from '@/common/components/Header'
import React, { useState } from 'react'
import UserHome from "../user/tabs/UserHome";
import UserSquads from "../user/tabs/UserSquads";
import { notifications } from "@/data/dummyNotiofications";
import UserNotifications from "../user/tabs/UserNotifications";
import UserHeader from "./UserHeader";
import { TrophyIcon } from "lucide-react";
import Tournament from "@/deprecated DO NOT USE/Tournament";
import TournamentHome from "@/user/tabs/TournamentHome";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideBar from "@/common/components/SideBar";

function UserDashboard() {

  const navigate = useNavigate()

  const sidebarButtons = (value) => {
    if (tab == value) {
      return "py-3 text- bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
    else if (value == "logout") {
      return "py-3 text- hover:bg-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
    else {
      return "py-3 text- hover:bg-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
  }

  const [searchParams, setSearchParams] = useSearchParams()

  const [tab, setTab] = useState(searchParams.get("tab") || "home")

  const manageTab = (value) => {
    if (value != tab) {
      setTab(value)
    }
  }
  return (
    <>
      {/* <Header login/> */}
      {/* <UserHeader/> */}
      <main className="w-full grid grid-cols-7 gap-1">
        <div className="bg-card">
          <SideBar className="" />
        </div>
        <div className="col-span-6 bg-card">
          <UserHome />
        </div>
      </main>
    </>
  )
}

export default UserDashboard