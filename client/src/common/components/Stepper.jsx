import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

function Stepper({steps}) {
    const firstStep = steps[0]
    const lastStep = steps[steps.length - 1]
    const [activeStep,setActiveStep] = useState(1)
  return (
    <>
        <main className={`w-full grid grid-cols-${steps.length} gap-0 gap-y-5`}>
            
                {steps.map((item,index)=> (
                    <div className='col-span-1 flex items-center' key={"fasdf"+index}>
                        <div  className={
                            item.stepNumber == activeStep ? "w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center" : "w-5 h-5 border border-slate-200 rounded-full"
                        }>
                            {
                                item.stepNumber == activeStep && <FaCheck className='text-black'/>
                            }
                            
                        </div>
                        {
                            item.stepNumber != lastStep.stepNumber && <hr className={
                                item.stepNumber == activeStep ? "grow  bg-slate-200" : "grow  bg-[#4f4f4f]"
                            } />
                        }
                    </div>
                ))}
            
            
                {
                    steps.map((item,index)=>(
                        <div key={"poi"+index} className="flex flex-col col-span-1">
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                            <h2>{item.time}</h2>
                        </div>
                    ))
                }
            
        </main>
    
    </>
  )
}

export default Stepper