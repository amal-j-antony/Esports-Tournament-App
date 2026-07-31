import React, { useState } from 'react'
import {
    Stepper,
    StepperDescription,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/ui/stepper";

function TournamentDetailStepper() {
    const [activeStep,setActiveStep] = useState(1)

    const steps = [{
        stepNumber: 1,
        title: "Registration start",
        description: "Aug 12,2026",
        time: "10:00 AM"
    },
    {
        stepNumber: 2,
        title: "Registration end",
        description: "Aug 15,2026",
        time: "10:00 AM"
    },
    {
        stepNumber: 3,
        title: "Check In",
        description: "Aug 17,2026",
        time: "9:00 PM"
    },
    {
        stepNumber: 4,
        title: "Tournament Starts",
        description: "Aug 17,2026",
        time: "10:00 PM"
    },
    {
        stepNumber: 5,
        title: "Final",
        description: "Aug 27,2026",
        time: "9:00 PM"
    }
    ]

    return (
        <>
            <Stepper value={activeStep} onValueChange={setActiveStep}>
                {steps.map((step) => (
                    <StepperItem className="not-last:flex-1" key={step.title} step={step.stepNumber}>
                        {step.stepNumber < steps.length && <StepperSeparator />}
                        <StepperTrigger>
                            <StepperIndicator className="" />
                            
                        </StepperTrigger>
                        {step.stepNumber < steps.length && <StepperSeparator />}
                    </StepperItem>
                ))}
            </Stepper>
        </>
    )
}

export default TournamentDetailStepper