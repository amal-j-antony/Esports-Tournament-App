import { ArrowLeftCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function CreateSidebar({
    activeStep,
    setActiveStep,
    handleStepChange
}) {
    const [tab, setTab] = useState("basicDetails")
    const sidebarStyling = (value) => {
        if(value == activeStep){
            return "p-3 bg-accent-foreground duration-500 cursor-pointer flex items-center gap-2 rounded-xl "    
        }else{
            return "p-3 hover:bg-accent-foreground duration-500 cursor-pointer flex items-center gap-2 rounded-xl "
        }
        
    }
    return (
        <>
            <div className="grid gap-10 justify-center p-5 bg-card w-full">
                <div className='flex flex-col gap-1 w-full text-center'>
                    <img className='h-40' src="https://res.cloudinary.com/dwaaoyztz/image/upload/q_auto/v1784428720/FIERZIO.gg_3_-Photoroom_npjprr.png" alt="" />
                    <Link to={"/dashboard/tournaments"} className='mb-5 flex justify-center items-center gap-2 cursor-pointer'><ArrowLeftCircle />Back</Link>
                    <button onClick={()=>handleStepChange(1)} className={sidebarStyling(1)} >Basic Details</button>
                    <button onClick={()=>handleStepChange(2)} className={sidebarStyling(2)} >Tournament Settings</button>
                    <button onClick={()=>handleStepChange(3)} className={sidebarStyling(3)} >Rules</button>
                    <button onClick={()=>handleStepChange(4)} className={sidebarStyling(4)} >Schedule</button>
                    <button onClick={()=>handleStepChange(5)} className={sidebarStyling(5)} >Review</button>
                </div>
            </div>
        </>
    )
}

export default CreateSidebar