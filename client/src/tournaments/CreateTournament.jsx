import React, { useState } from 'react'
import {
    Stepper,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTrigger,
} from "@/components/ui/stepper";
import { esportsTitles } from '@/data/gameList'

import { Input } from '@/components/ui/input';
import { ArrowLeftCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea"
import CreateStepOne from './CreateStepOne';
import TournamentDetails from './TournamentDetails';
import CreateSidebar from './CreateSidebar';
import CreateStepTwo from './CreateStepTwo';
import CreateStepThree from './CreateStepThree';

function CreateTournament() {
    const [tournamentDetails, setTournamentDetails] = useState({
        name: "",
        game: "",
        image: "",
        description: "",
        type: "",
        rounds: "",
        teamSize: 0,
        teamCount: 0,
        public: true,
        registrationDate: "",
        checkIn: true,
        requirements: "",
        startDate: "",
        timezone: "",
        prizePool: "",
        rules: ""
    })
    const gameMap = new Map()
    esportsTitles.forEach(item => gameMap.set(item.name, item))
    console.log(gameMap);
    const [activeStep, setActiveStep] = useState(1)
    const steps = [1, 2, 3, 4, 5]
    const gameNames = esportsTitles.map(item => item.name)

    const handleStepChange = (type) => {
        if (type == "next") {
            if (activeStep < steps[steps.length - 1]) {
                setActiveStep(activeStep + 1)
            }
        }
        else if (type == "previous") {
            activeStep > 1 && setActiveStep(activeStep - 1)
        } else {
            if (typeof (type) == "number" &&
                type != activeStep &&
                type > 0 &&
                type <= steps[steps.length - 1]) {
                setActiveStep(type)
            }
        }


    }
    return (
        <>

            <div className='grid grid-cols-7 gap-1'>
                <CreateSidebar
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    handleStepChange={handleStepChange}
                />
                <main className='col-span-6 w-full h-screen flex flex-col items-center p-10 gap-5' style={{
                    backgroundImage: 'url("https://res.cloudinary.com/dwaaoyztz/image/upload/v1784831009/Untitled_design_5_pmkean.png")',
                    backgroundSize: "cover"
                }}>

                    <h1 className='text-3xl font-bold'>CREATE TOURNAMENT</h1>
                    {/* stepper */}
                    <section className='p-10'>
                        <Stepper value={activeStep} onValueChange={setActiveStep}>
                            {steps.map((step) => (
                                <StepperItem className="not-last:flex-1" key={step} step={step}>
                                    {step < steps.length && <StepperSeparator />}
                                    <StepperTrigger>
                                        <StepperIndicator className="" />
                                        {
                                            step < steps.length && <hr className='border-accent w-35 border' />
                                        }
                                    </StepperTrigger>
                                    {step < steps.length && <StepperSeparator />}
                                </StepperItem>
                            ))}
                        </Stepper>

                    </section>

                    {/* step 1 */}
                    {
                        activeStep == 1 &&
                        <CreateStepOne
                            gameNames={gameNames}
                            setTournamentDetails={setTournamentDetails}
                            tournamentDetails={tournamentDetails}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {   //step 2
                        activeStep == 2 &&
                        <CreateStepTwo
                            gameNames={gameNames}
                            setTournamentDetails={setTournamentDetails}
                            tournamentDetails={tournamentDetails}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {
                        //step 3
                        activeStep == 3 &&
                        <CreateStepThree
                            gameNames={gameNames}
                            setTournamentDetails={setTournamentDetails}
                            tournamentDetails={tournamentDetails}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {
                        //step 4
                        activeStep == 4 &&
                        <section>
                            STEP 4
                        </section>
                    }

                    <div className="flex justify-center gap-5 my-5">
                        <button onClick={() => handleStepChange("previous")} className='border border-accent p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                        <button onClick={() => handleStepChange("next")} className='border border-accent p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Next Step</button>
                    </div>
                </main>
            </div>

        </>
    )
}

export default CreateTournament