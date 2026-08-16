import { useAuth } from '@/context/AuthProvider'
import { OrgContext } from '@/context/OrgProvider'
import { axiosInstance } from '@/services/axiosInstance'
import { getUserOrganizationAPI } from '@/services/organizationMethods'
import React, { useContext } from 'react'

function OrganizationHome() {
  const { orgData, loadOrgData, userOrgData } = useContext(OrgContext)
  const { user } = useAuth()

  return (
    <>
      <main className="col-span-6 bg-background w-full min-h-screen h-full grid">
        <section className="grid grid-cols-2 gap-1 grid-rows-[1fr_2fr_1fr]">
          <div className="col-span-2 grid grid-cols-2 p-10 "
          style={{backgroundImage:'url("/mariola-grobelska-42RazlRnY0I-unsplash.jpg")',
            backgroundSize:"cover"
          }}>
            <div className='flex justify-center items-center'>
              <h1 className='text-4xl font-bold'> {orgData?.oName} </h1>              
            </div>
            <div className="flex justify-center">
              <img src={`${axiosInstance.defaults.baseURL}/${orgData?.oLogo}`} className='h-50 rounded-3xl border-2 border-slate-100' alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-5 bg-card w-full">
            <h1 className='text-center text-xl font-bold'>MEMBERS</h1>
             {
                orgData?.oMembers.map((item,index)=>(
                  <div className='grid grid-cols-[1fr_2fr_1fr] border rounded-xl w-full px-10 py-5 bg-[#1a1a1a] '>
                    <h1 className='text-center' >{index+1} </h1>
                    <h1 className='text-center' >{item.userID.username}</h1>
                    <h1 className='text-center' >{item.role} </h1>
                  </div>
                ))
              }
          </div>
          <div className="bg-card p-5 flex flex-col items-center gap-5">
            <h1 className='text-xl font-bold'>Recent tournaments</h1>
          </div>
          <div className="col-span-2 bg-card">
            Notifications
          </div>
        </section>
      </main>
    </>
  )
}

export default OrganizationHome