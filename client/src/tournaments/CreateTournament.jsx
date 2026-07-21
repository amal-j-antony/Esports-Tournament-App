import React, { useState } from 'react'
import {
    Stepper,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTrigger,
} from "@/components/ui/stepper";
import { esportsTitles } from '@/data/gameList'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Input } from '@/components/ui/input';
import { ArrowLeftCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea"
import { FlickeringGrid } from '@/components/ui/flickering-grid';

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
    const steps = [1, 2, 3, 4]
    const gameNames = esportsTitles.map(item => item.name)

    const handleStepChange = (type) => {
        if (type == "next") {
            if (activeStep < steps[steps.length - 1]) {
                setActiveStep(activeStep + 1)
            }
        }
        if (type == "previous") {
            activeStep > 1 && setActiveStep(activeStep - 1)
        }
    }
    return (
        <>
           
            <main className='w-full h-screen flex flex-col items-center p-10 gap-5'>
                <Link to={"/user/1/dashboard?tab=tournaments"} className='flex items-center gap-2 cursor-pointer'><ArrowLeftCircle />Back to tournaments</Link>
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
                                        step < steps.length && <hr className='border-accent w-50 border' />
                                    }
                                </StepperTrigger>
                                {step < steps.length && <StepperSeparator />}
                            </StepperItem>
                        ))}
                    </Stepper>

                </section>

                {/* step 1 */}
                {activeStep == 1 &&
                    <section className="grid grid-cols-2 gap-10">
                        <div className="col-span-2 ">
                            <h1 className='mb-5 text-2xl font-bold text-center'>Basic Details</h1>
                            <Combobox className="" items={gameNames}>
                                <ComboboxInput placeholder="Select game" />
                                <ComboboxContent>
                                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                                    <ComboboxList>
                                        {(item) => (
                                            <ComboboxItem key={item} value={item}>
                                                {item}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxContent>
                            </Combobox>



                        </div>
                        <label htmlFor="">Tournament name</label>
                        <Input type="text" placeholder='Enter Tournament Name' required />

                        <label htmlFor="">Tournament Description</label>
                        <Textarea type="text" placeholder='Enter Tournament Name' />

                        <label htmlFor="">Tournament Image</label>
                        <Input type="file" />



                    </section>}

                {   //step 2
                    activeStep == 2 &&
                    <section className='grid grid-cols-2 gap-10'>
                        <label htmlFor="">Tournament Type</label>

                    </section>
                }

                {
                    //step 3
                    activeStep == 3 &&
                    <section>
                        STEP 3
                    </section>
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

        </>
    )
}

export default CreateTournament