import React, { useState } from 'react'
import { FaArrowDown, FaGear } from 'react-icons/fa6'

export function StageSettingsHandler({
    setStageNameDialog,
    stageNameDialog,
    index
}) {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <section onClick={() => setDropdown(!dropdown)} className='relative'>
                <FaGear />
                {
                    dropdown &&
                    <div className='bg-accent absolute -bottom-29 -right-3  p-3 w-40 grid rounded-2xl'>
                        <button className='cursor-pointer hover:bg-zinc-500 rounded-xl duration-500' onClick={() => setStageNameDialog(true)}>Rename Stage</button>
                        <button className="cursor-pointer hover:bg-zinc-500 rounded-xl duration-500">Delete Stage</button>
                        <button className='hover:bg-zinc-500 rounded-xl duration-500 cursor-pointer' onClick={() => setDropdown(!dropdown)}>
                            Close
                        </button>
                    </div>
                }
            </section>
        </>
    )
}

