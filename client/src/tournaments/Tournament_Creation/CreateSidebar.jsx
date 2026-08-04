import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthProvider'
import { ArrowLeftCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function CreateSidebar({
    activeStep,
    setActiveStep,
    handleStepChange
}) {
    const {user} = useAuth()
    const [tab, setTab] = useState("basicDetails")
    const sidebarStyling = (value) => {
        if(value == activeStep){
            return "p-3  duration-500 cursor-pointer flex items-center gap-2 rounded-xl "    
        }else{
            return "p-3 hover:bg-[#1e1e1e] duration-500 cursor-pointer flex items-center gap-2 rounded-xl "
        }        
    }
    const highlightStyle = (value) => {
        if(value == activeStep){
            return "bg-accent-foreground text-white border px-3 py-1 rounded-full"    
        }else{
            return "border bg-accent px-3 py-1 rounded-full "
        } 
    }
    return (
        <>
            <div className="grid gap-10 justify-center p-5 bg-card w-full">
                <div className='flex flex-col gap-1 w-full text-center'>                    
                    <img className=' w-full' src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1785821014/Untitled_design_1_-Photoroom_ivd05t.png" alt="" />
                    <Link to={`/dashboard/tournaments/${user?.userID}`} className='mb-5 flex justify-center items-center gap-2 cursor-pointer'><ArrowLeftCircle />Back</Link>
                    <button onClick={()=>handleStepChange(1)} className={sidebarStyling(1)} > <span className={highlightStyle(1)}>1</span> Basic Details</button>                    
                    <button onClick={()=>handleStepChange(2)} className={sidebarStyling(2)} > <span className={highlightStyle(2)}>2</span> Tournament Settings</button>                    
                    <button onClick={()=>handleStepChange(3)} className={sidebarStyling(3)} > <span className={highlightStyle(3)}>3</span> Rules</button>                    
                    <button onClick={()=>handleStepChange(4)} className={sidebarStyling(4)} > <span className={highlightStyle(4)}>4</span> Prize Structure</button>
                    <button onClick={()=>handleStepChange(5)} className={sidebarStyling(5)} > <span className={highlightStyle(5)}>5</span> Schedule</button>
                </div>
            </div>
        </>
    )
}

export default CreateSidebar