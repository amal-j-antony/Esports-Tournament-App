import SideBar from '@/common/components/SideBar'
import { OrgContext } from '@/context/OrgProvider'
import { button } from '@/data/universalStyles'
import { getOrganizationTournamentsAPI } from '@/services/organizationMethods'
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function OrgCreatedTournaments() {
  const navigate = useNavigate()
  const { orgData } = useContext(OrgContext)
  const [tournamentData, setTournamentData] = useState(null)
  const getTournaments = async () => {
    if (!orgData._id) { return }

    try {
      const result = await getOrganizationTournamentsAPI(orgData._id)
      console.log("get tournament by org", result);
      setTournamentData(result.data)

    } catch (error) {
      console.log("get tournament error", error);

    }
  }

  useEffect(() => {
    getTournaments()
  }, [orgData?._id])
  return (
    <>
      <main className="grid grid-cols-7 gap-1">
        <SideBar currentTab={"tournaments"} currentType={"organizationMenu"} />
        <section className="col-span-6 bg-card flex flex-col items-center">
          <div className='flex flex-col justify-center items-center gap-10 p-10 w-9/10'>
            <h1 className=" text-2xl font-bold ">Tournaments</h1>
            <hr className='border w-full border-accent' />
          </div>

          {
            tournamentData ?
              tournamentData.map((item, index) => (
                <div key={"tournamentData"+index} className='grid grid-cols-6 w-9/10 p-10 bg-accent rounded-xl'>
                  <span className='text-center'>{index+1}</span>
                  <div className="col-span-3 text-center">{item.name}</div>
                  <div className="grid grid-cols-[2fr_3fr_1fr] col-span-2 gap-5 justify-between items-center ">
                    <span className='border border-zinc-500 py-2 text-center rounded-xl'>{item.status}</span>
                    <button onClick={()=>navigate(`/updateTournament/${item._id}`)} className="border border-zinc-500 h-full py-2 rounded-xl text-center">Continue Editing</button>
                    <button className='border border-zinc-500 h-full py-2 rounded-xl flex justify-center items-center'><MdDelete/></button>
                  </div>
                </div>
              ))
              :
              <div className="flex flex-col items-center gap-5">
                <h1 className='text-xl'>No tournaments found</h1>                
              </div>
          }
          <button onClick={() => navigate("/createTournament")} className={button + ' my-5'} >Create New Tournament</button>

        </section>
      </main>
    </>
  )
}

export default OrgCreatedTournaments