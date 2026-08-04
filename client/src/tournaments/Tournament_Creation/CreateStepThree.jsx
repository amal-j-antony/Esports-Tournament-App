import { Delete } from 'lucide-react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import { MdDelete, MdEdit } from 'react-icons/md'

function CreateStepThree({
    gameNames,
    setTournamentDetails,
    tournamentDetails
}) {
    const inputStyle = 'bg-accent text-center py-4  rounded-xl w-100 '
    return (
        <>
            <main className='flex justify-center gap-5 w-full bg-[#1d1d1d] p-10 rounded-2xl' >
                
                <section className='w-full'>
                    <h1 className='mb-5 text-2xl font-bold'>Tournament Rules</h1>
                    <div className='flex gap-2 col-span-2 w-full'>
                        <input type="text" placeholder='Enter a tournament rule' className={`${inputStyle+"grow"}`} />
                        <button className='bg-slate-100 text-black rounded-xl py-2 px-5 cursor-pointer' >Add Rule</button>
                    </div>
                    <div className='rounded-xl overflow-hidden border mt-5'>
                        <table className='border w-full  border-collapse table-fixed'>
                            <thead>
                                <tr className='bg-accent'>
                                    <th className='p-3 border w-30'>Rule #</th>
                                    <th className='p-3 border '>Rule Description</th>
                                    <th className="p-3 border w-35">Actions</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className=''>
                                    <td className='p-3 bg-[#1a1a1a] border text-center'>1</td>
                                    <td className='p-3 bg-[#1a1a1a] border text-center'>Rule goes here</td>
                                    <td className='p-3 bg-[#1a1a1a] border text-center flex gap-4 items-center justify-center'>
                                        <div className="border p-2 border-zinc-500 text-md text-zinc-500 duration-500  rounded-lg hover:bg-zinc-50 hover:text-black cursor-pointer"><MdEdit /> </div>
                                        <div className="border p-2 border-zinc-500 text-md text-zinc-500 duration-500  rounded-lg hover:bg-zinc-50 hover:text-black cursor-pointer"><MdDelete /></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>*Tournament organizers are responsible for enforcing the rules they set for tournaments.</p>
                </section>
            </main>
        </>
    )
}

export default CreateStepThree