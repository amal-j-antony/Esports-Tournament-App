import SideBar from '@/common/components/SideBar'
import { useAuth } from '@/context/AuthProvider'
import { OrgContext } from '@/context/OrgProvider'
import { button } from '@/data/universalStyles'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function NoOrgMenu() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { orgData } = useContext(OrgContext)

    useEffect(()=>{
        if(orgData){
            navigate(`/organization/${orgData._id}`)
        }
    })
    
    return (
        <>
            <main className="grid grid-cols-7 gap-1">
                <SideBar currentTab={"organization"} />
                <section className="col-span-6 p-10 bg-card grid justify-center items-center">
                    <div className='grid justify-center gap-5'>
                        <h1 className='text-center text-2xl'>You are not part of an organization</h1>
                        <p>Create or join an organization to create and manage tournaments</p>
                        <div className="grid grid-cols-2 gap-5 justify-center items-center">
                            <button onClick={() => navigate('/create-organization')} className={button}>
                                Create Organization
                            </button>

                            <button onClick={()=> navigate('/view-organization')} className={button}>
                                Join Organization
                            </button>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

