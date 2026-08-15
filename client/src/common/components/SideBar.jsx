
import { IoIosChatbubbles, IoMdNotifications } from "react-icons/io";
import { FaBell, FaGear, FaPeopleGroup, FaUserGroup } from "react-icons/fa6";
import { IoHome, IoLogOutSharp } from "react-icons/io5";
import { TbMessagesFilled } from "react-icons/tb";
import { FaArrowCircleLeft, FaExclamation, FaHome, FaTrophy, FaUser } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import { OrgContext } from "@/context/OrgProvider";

function SideBar({ login, currentTab, currentType }) {

  const { logout, user } = useAuth()
  const { orgData , loadOrgData, clearOrgData } = useContext(OrgContext)
  const navigate = useNavigate()
  const userOrgData = orgData?.oMembers?.find(item => item.userID._id == user?.userID)
  const [userOrgRole,setUserOrgRole] = useState(userOrgData?.role)
console.log('userRole',userOrgRole,userOrgData);

  const sidebarButtons = (value) => {
    if (tab == value) {
      return "py-3 text- bg-accent ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
    else if (value == "logout") {
      return "py-3 text- hover:text-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
    else {
      return "py-3 text- hover:text-accent-foreground ps-4 w-9/10 rounded-xl  duration-500 cursor-pointer flex items-center gap-2"
    }
  }

  const [searchParams, setSearchParams] = useSearchParams()

  const [sidebarType, setSidebarType] = useState(currentType || 'dashboard')

  const [tab, setTab] = useState(searchParams.get("tab") || currentTab)
  console.log("tab:", tab);

  const manageTab = (value) => {
     if (value != tab) {
        setTab(value)
        if(sidebarType == 'dashboard'){
          navigate(`/dashboard/${value}/${user.userID}`)
        }else if(sidebarType == 'organizationCreator'){
          navigate(`/create-organization/${value}`)
        }else if(sidebarType == 'organizationMenu'){
          navigate(`/organization/${user.userID}/${value}`)
        }
      }
  }

  const checkOrganizationStatus = async () => {
    if(orgData){
      navigate(`/organization/${orgData._id}/home`)
    }else{
      navigate('/organization/none')
    }
  }


  return (
    <>
      {/* sidebar */}
      <section className='col-span-1 h-screen bg-card flex justify-center p-5 pt-10 sticky top-0'>
        <ul className='w-full flex flex-col items-center'>
          <img onClick={() => navigate("/")} className="h-40 cursor-pointer" src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" alt="" />
          {sidebarType == 'dashboard' &&
            <>
              <li onClick={() => { manageTab("tournaments") }} className={sidebarButtons("tournaments")}><FaTrophy /> Tournaments</li>
              <li onClick={() => manageTab("discover")} className={sidebarButtons("discover")} ><FaExclamation /> Discover</li>
              <li onClick={() => manageTab("squads")} className={sidebarButtons("squads")} ><FaUserGroup />Squad</li>
              <li onClick={checkOrganizationStatus} className={sidebarButtons("organization")} ><FaPeopleGroup />Organization</li>
              <li onClick={() => manageTab("notifications")} className={sidebarButtons("notifications")} ><IoMdNotifications />Notifications</li>
              <li onClick={() => manageTab("messages")} className={sidebarButtons("messages")} ><TbMessagesFilled />Messages</li>
              <li onClick={() => manageTab("profile")} className={sidebarButtons("profile")} ><FaUser />Profile</li>
              <li onClick={()=>{
                logout()
                clearOrgData()                
              }} className={sidebarButtons("logout")} ><IoLogOutSharp />Log out</li>
            </>}

          {
            sidebarType == 'organizationCreator' &&
            <>
              <li onClick={()=>navigate(`/dashboard/tournaments/${user.userID}`)} className={sidebarButtons('back')} ><FaArrowCircleLeft /> Back</li>
              <h1>Create Organization</h1>
              <li></li>
            </>
          }
          {
            sidebarType == 'organizationMenu' &&
            <>
              <li onClick={()=>navigate(`/dashboard/tournaments/${user.userID}`)} className={sidebarButtons('back')} ><FaArrowCircleLeft /> Back</li>
              <li onClick={()=>manageTab('home')} className={sidebarButtons('home')} ><FaHome/>Home </li>
              <li onClick={()=>manageTab("tournaments")} className={sidebarButtons("tournaments")} ><FaTrophy/> Tournaments</li>
              <li onClick={()=>manageTab("members")} className={sidebarButtons("members")} ><FaUserGroup/> Members</li>
              <li onClick={()=>manageTab("discussions")} className={sidebarButtons("discussions")} ><IoIosChatbubbles/> Discussions</li>
              <li onClick={()=>manageTab("notification")} className={sidebarButtons("notification")} ><FaBell/> Notifications</li>
              <hr className="border w-full my-3" />
              {
                userOrgRole == "Owner" && 
                <li onClick={()=>manageTab('settings')} className={sidebarButtons("settings")} ><FaGear /> Settings</li>
              }
            </>
          }
        </ul>
      </section>
      
    </>
  )
}

export default SideBar

{/* components */}
      {/* <section className="bg-card col-span-6">
        {tab == "home" && <UserHome />}
        {tab == "squad" && <UserSquads />}
        {tab == "notifications" && <UserNotifications />}
        {tab == "tournaments" && <TournamentHome />}
      </section> */}