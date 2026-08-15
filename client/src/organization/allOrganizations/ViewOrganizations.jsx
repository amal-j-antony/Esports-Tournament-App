import SideBar from '@/common/components/SideBar'
import { useAuth } from '@/context/AuthProvider'
import { button, inputStyle } from '@/data/universalStyles'
import { axiosInstance } from '@/services/axiosInstance'
import { cancelJoinOrganizationAPI, getAllOrganizationsAPI, reqJoinOrganizationAPI } from '@/services/organizationMethods'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa6'
import { MdGroup } from 'react-icons/md'
import { toast } from 'react-toastify'


function ViewOrganizations() {
    const { user } = useAuth()
    const [allOrgData, setAllOrgData] = useState([])
    console.log('all org data', allOrgData);

    const loadAllOrgData = async () => {
        try {
            const result = await getAllOrganizationsAPI()
            console.log(result);

            if (result.status == 200) {
                setAllOrgData(result.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const sendJoinRequest = async (orgID) => {
        try {
            const result = await reqJoinOrganizationAPI(orgID)
            console.log(result);
            if (result.status == 200) {
                toast('Request sent successfully')
                loadAllOrgData()
            } else {
                toast('Something went wrong,please try again later')
            }
        } catch (error) {
            console.log(error);
            toast('Something went wrong,please try again later')
        }
    }

    const cancelJoinRequest = async (orgID) => {
        try {
            const result = await cancelJoinOrganizationAPI(orgID)
            console.log(result);
            if (result.status == 200) {
                toast('Request sent successfully')
                loadAllOrgData()
            }
        } catch (error) {
            console.log(error);
            toast('Something went wrong,please try again later')
        }
    }

    useEffect(() => {
        loadAllOrgData()
    }, [user?.userID])
    return (
        <>
            <main className="grid grid-cols-7 gap-1">
                <SideBar />
                <section className="grid grid-cols-3 gap-1 col-span-6">
                    <section className='col-span-2 bg-card flex flex-col items-center p-10'>
                        <h1 className='text-xl font-bold'>View Organizations</h1>
                        <div className="grid grid-cols-3 gap-10 justify-center w-full py-5 ">
                            <button className={inputStyle}>Sort</button>
                            <div className='flex items-center gap-2 relative'>
                                <input type="text" placeholder='search organizations' className="w-full bg-accent ps-5 py-3 rounded-xl border" /><FaSearch className='absolute right-4' />
                            </div>
                            <button className={inputStyle}>Filter</button>
                            <hr className="col-span-3" />
                        </div>
                        {allOrgData.length > 0 &&
                            <>
                                {
                                    allOrgData.map((item, index) => (
                                        <div className="grid grid-cols-5 mb-5 py-5 justify-center items-center w-full hover:bg-[#3a3a3a] rounded-2xl cursor-pointer duration-500">
                                            <div className="flex justify-center items-center">
                                                <img src={`${axiosInstance.defaults.baseURL}/${item.oLogo}`} className='w-40 h-40 rounded-2xl' alt="" />
                                            </div>
                                            <div className="col-span-3">
                                                <h1 className="text-center ">{item.oName}</h1>
                                                <h1 className='text-center text-zinc-500'>id: {item._id}</h1>
                                                <div className="flex gap-4 mt-3 justify-center">
                                                    <div className="flex items-center gap-2">
                                                        <MdGroup />1
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FaGamepad />
                                                        <p>Valorant</p>
                                                        <p>|</p>
                                                        <p>CS2</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid px-10 gap-5">
                                                <button className={button}>View Profile</button>
                                                {
                                                    item.pendingJoin.includes(user.userID) ?
                                                        <button onClick={() => cancelJoinRequest(item._id)} className="bg-yellow-900 py-2 rounded-xl cursor-pointer">Pending</button>
                                                        :
                                                        <button onClick={() => sendJoinRequest(item._id)} className={button}>Join</button>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        }
                    </section>
                    <section className='flex flex-col bg-card items-center p-10' >
                        <h1 className='font-bold text-xl'>Featured </h1>
                    </section>
                </section>
            </main>
        </>
    )
}

export default ViewOrganizations