import SideBar from '@/common/components/SideBar'
import { useAuth } from '@/context/AuthProvider'
import { esportsTitles } from '@/data/gameList'
import { button } from '@/data/universalStyles'
import { getAllAccountsAPI } from '@/services/accountMethods'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { LuArrowLeft } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function CreateSquad() {
    const gameList = esportsTitles.map(item => item.name)
    const [game, setGame] = useState("")
    const [userList,setUserList] = useState([])
    const getMaxMembers = () => {
        return esportsTitles.find(item => item.name == game).maxTeamSize
    }
    const { user } = useAuth()

    const getAllUsers = async () => {
        try {
            const result = await getAllAccountsAPI()
            console.log(result);
            if(result.status == 200){
                setUserList(result.data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    const defaultAvatar = "https://res.cloudinary.com/dwaaoyztz/image/upload/v1783783482/user_s1wtzw.png"

    useEffect(()=>{
        getAllUsers()
    },[user.userID])
    return (
        <main className="w-full grid grid-cols-7 gap-1">
            <div className="bg-card">
                <SideBar currentTab={"squads"} className="" />
            </div>
            <div className="col-span-6 bg-card flex flex-col items-center p-10 gap-10 ">
                <Link className='flex items-center gap-2' to={`dashboard/squads/${user.userID}`} ><LuArrowLeft /> Back</Link>
                <h1 className='text-xl font-bold'>Create Squad</h1>
                <div className=" border p-5 rounded-xl bg-accent ">

                    <select className='cursor-pointer' defaultValue={``} onChange={(e) => setGame(e.target.value)} >
                        <option value={''} >Select game from list</option>
                        {
                            gameList.map((item, index) => (
                                <option value={item} key={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                {game &&
                    <>
                        {/* <span>Maximum members : {
                            getMaxMembers()
                        }</span> */}
                        <p className='text-xl font-bold'>Add Members</p>
                        <div className="flex justify-between w-3/4 border p-10 rounded-xl bg-accent">
                            <div className=" w-30 h-30 flex flex-col justify-center items-center border relative rounded-xl">
                                <img src={user.avatar} className='w-full h-full rounded-xl' alt="" />
                                <h1 className='rounded-b-xl absolute bottom-0 bg-black w-full text-center'>{user.username}</h1>
                            </div>
                            {
                                Array.from({ length: getMaxMembers() - 1 }).map((item, index) => (
                                    <div className=" w-30 h-30 flex justify-center items-center border">
                                        <FaPlus className='text-2xl' />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }
                <h1>Users</h1>
                <div className="grid grid-cols-3 gap-5 justify-center">
                    {userList.map((item,index)=>(
                        <div className="grid grid-cols-[2fr_1fr] justify-center items-center gap-10 border p-5 bg-accent rounded-xl w-4/5 mx-auto" key={"user"+index}>
                            <img src={defaultAvatar} className='h-30 w-30' alt="" />
                            <div className='flex flex-col gap-5 items-center'>
                                <h1 className='font-bold'>{item.username}</h1>
                                <button className='bg-card p-2 rounded-xl cursor-pointer' >Invite</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}

export default CreateSquad