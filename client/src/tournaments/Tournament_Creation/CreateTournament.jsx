import React, { useState } from 'react'
import { esportsTitles } from '@/data/gameList'
import CreateStepOne from './CreateStepOne';
import CreateSidebar from './CreateSidebar';
import CreateStepTwo from './CreateStepTwo';
import CreateStepThree from './CreateStepThree';
import { useForm } from 'react-hook-form';
import TournamentPreview from './TournamentPreview';
import CreateStepFour from './CreateStepFour';
import CreateStepFive from './CreateStepFive';
import SideBar from '@/common/components/SideBar';

function CreateTournament() {
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



    const {
        register,
        control,
        handleSubmit,
        watch,
        getValues,
        setValues,
        setValue
    } = useForm({
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
            groupStage: {
                enabled: true,
                stageFormat: "",
                groupCount: 2,
                roundsCount: 3,
                matchcount: 0
            },
            mainStage: {
                stageFormat: "",
                groupCount: 2,
                roundsCount: 3,
                matchcount: 0
            },
            rules: [],
            rewards: {
                enabled: true
            },
            registrationDate: "",
            checkIn: true,
            requirements: "",
            startDate: "",
        }
    })

    const output = watch()
    console.log(output);


    return (
        <>

            <div className='grid grid-cols-7 gap-1'>
                <CreateSidebar
                    className="row-span-2"
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    handleStepChange={handleStepChange}
                />

                <main className='col-span-5 w-full h-full min-h-screen flex flex-col items-center p-10 gap-5 bg-card' >


                    <h1 className='text-3xl w-full font-bold'>Create Tournament</h1>
                    <input type="text" className='w-full bg-[#1a1a1a] px-5 py-2 rounded-2xl border' placeholder='Search for an option' />
                    {/* step 1 */}
                    {
                        activeStep == 1 &&
                        <CreateStepOne
                            setValue={setValue}
                            control={control}
                            register={register}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {   //step 2
                        activeStep == 2 &&
                        <CreateStepTwo
                            gameNames={gameNames}
                            control={control}
                            register={register}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {
                        //step 3
                        activeStep == 3 &&
                        <CreateStepThree
                            gameNames={gameNames}
                            control={control}
                            register={register}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {
                        //step 4
                        activeStep == 4 &&
                        <CreateStepFour
                            control={control}
                            register={register}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    {
                        //step 5
                        activeStep == 5 &&
                        <CreateStepFive
                            control={control}
                            register={register}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    }

                    <div className="flex justify-center gap-5 my-5">
                        <button onClick={() => handleStepChange("previous")} className='border border-accent p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
                        <button onClick={() => handleStepChange("next")} className='border border-accent p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Next Step</button>
                    </div>
                </main>

                <section className='col-span-1 bg-card'>
                    <SideBar />
                </section>
            </div>

        </>
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
// <section className='p-10'>
//     <Stepper value={activeStep} onValueChange={setActiveStep}>
//         {steps.map((step) => (
//             <StepperItem className="not-last:flex-1" key={step} step={step}>
//                 {step < steps.length && <StepperSeparator />}
//                 <StepperTrigger>
//                     <StepperIndicator className="" />
//                     {
//                         step < steps.length && <hr className='border-accent w-35 border' />
//                     }
//                 </StepperTrigger>
//                 {step < steps.length && <StepperSeparator />}
//             </StepperItem>
//         ))}
//     </Stepper>

// </section>