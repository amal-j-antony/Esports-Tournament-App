import React, { useState } from 'react'
import { esportsTitles } from '@/data/gameList'
import CreateStepOne from './CreateStepOne';
import CreateSidebar from './CreateSidebar';
import CreateStepTwo from './CreateStepTwo';
import CreateStepThree from './CreateStepThree';
import { FormProvider, useForm } from 'react-hook-form';
import CreateStepFour from './CreateStepFour';
import CreateStepFive from './CreateStepFive';
import SideBar from '@/common/components/SideBar';
import { StepperTournamentWizard } from '@/common/components/Stepper';


function CreateTournament() {
    const gameMap = new Map()
    esportsTitles.forEach(item => gameMap.set(item.name, item))
    console.log(gameMap);
    const [activeStep, setActiveStep] = useState(1)
    const steps = [1, 2, 3, 4, 5, 6]
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
    const methods = useForm({
        defaultValues: {
            name: "",
            game: "",
            image: "",
            description: "",
            banner: "",
            inviteOnly: false,
            maxTeamSize: 8,
            minTeamSize: 4,
            format: "",
            hostMode: "",

            stageInfo: [{
                stageID: crypto.randomUUID(),
                stageName: "",
                groupCount: 1,
                stageType: "",
                stageFormat: "",
                roundsCount: 3,
                matchCount: 3,
                seeding: "initial"
            }],

            rules: [],
            enableRewards: true,
            rewards: [],
            registrationDate: "",
            checkIn: true,
            checkInMinutes: 0,
            startDate: "",
        }
    })
    const output = methods.watch()
    console.log(output);
    return (
        <FormProvider {...methods}>

            <div className='grid grid-cols-7 gap-1'>
                <CreateSidebar
                    className="row-span-2"
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    handleStepChange={handleStepChange}
                />

                <main className='col-span-6 w-full h-full min-h-screen flex flex-col items-center p-10 gap-5 bg-card' >
                    <section className='p-10 w-4/5'>
                        <h1 className='pb-3 text-3xl w-full font-bold '>Create Tournament</h1>
                        <p className='pb-3 text-xl'>Step {activeStep} of {steps[steps.length - 1]}</p>
                        <StepperTournamentWizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                    </section>

                    {/* step 1 */}
                    {
                        activeStep == 1 &&
                        <CreateStepOne
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {   //step 2
                        activeStep == 2 &&
                        <CreateStepTwo
                            gameNames={gameNames}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {
                        //step 3
                        activeStep == 3 &&
                        <CreateStepThree
                            gameNames={gameNames}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {
                        //step 4
                        activeStep == 4 &&
                        <CreateStepFour
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {
                        //step 5
                        activeStep == 5 &&
                        <CreateStepFive
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }


                </main>

                {/* <section className='col-span-1 bg-card'>
                    <SideBar />
                </section> */}
            </div>

        </FormProvider>
    )
}

export default CreateTournament

// const [tournamentDetails, setTournamentDetails] = useState({
//         name: "",
//         game: "",
//         image: "",
//         description: "",
//         banner: "",
//         inviteOnly: false,
//         maxTeamSize: 0,
//         minTeamSize: 0,
//         format: "",
//         hostMode: "",
//         groupStage: {
//             enabled: true,
//             stageFormat: "",
//             groupCount: 2,
//             roundsCount: 3,
//             matchcount: 0
//         },
//         mainStage: {
//             stageFormat: "",
//             groupCount: 2,
//             roundsCount: 3,
//             matchcount: 0
//         },
//         rules: [],
//         rewards: {
//             enabled: true
//         },
//         registrationDate: "",
//         checkIn: true,
//         requirements: "",
//         startDate: "",
//     })


{/* stepper */ }
{/* <section className='p-10'>
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

</section> */}

{/* <Stepper value={activeStep} onValueChange={setActiveStep}>
                            {steps.map((step) => (
                                <StepperItem className="flex-1" key={step} step={step}>                                    
                                    <StepperTrigger>
                                        <StepperIndicator className="bg-accent-foreground" />
                                        {
                                            step < steps.length && <hr className='grow' />
                                        }
                                    </StepperTrigger>
                                    {step < steps.length && <StepperSeparator />}
                                </StepperItem>
                            ))}
                        </Stepper> */}

// groupStage: {
//     enabled: true,
//     stageFormat: "",
//     groupCount: 2,
//     roundsCount: 3,
//     matchcount: 0
// },

// mainStage: {
//     stageFormat: "",
//     groupCount: 2,
//     roundsCount: 3,
//     matchcount: 0
// },