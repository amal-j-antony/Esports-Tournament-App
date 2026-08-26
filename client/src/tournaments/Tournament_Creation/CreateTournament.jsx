import { useEffect, useState } from 'react'
import { esportsTitles } from '@/data/gameList'
import CreateStepOne from './CreateStepOne';
import CreateSidebar from './CreateSidebar';
import CreateStepTwo from './CreateStepTwo';
import CreateStepThree from './CreateStepThree';
import { FormProvider, useForm } from 'react-hook-form';
import CreateStepFour from './CreateStepFour';
import CreateStepFive from './CreateStepFive';
import { StepperTournamentWizard } from '@/common/components/Stepper';
import CreateTournamentPreview from './CreateTournamentPreview';
import { tournamentSchema } from '@/data/tournamentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { getTournamentByIdAPI } from '@/services/tournamentMethods';
import { useParams } from 'react-router-dom';



function CreateTournament() {
    const { TID } = useParams()
    const gameMap = new Map()
    esportsTitles.forEach(item => gameMap.set(item.name, item))
    console.log(gameMap);
    const [activeStep, setActiveStep] = useState(1)
    const steps = [1, 2, 3, 4, 5, 6]
    const gameNames = esportsTitles.map(item => item.name)
    const getTournamentData = async () => {
        if (!TID) { return }
        try {
            const result = await getTournamentByIdAPI(TID)
            console.log("getTournamentData",result);
            if (result.status == 200) {

                methods.reset({
                    name: result.data?.name ?? "",
                    game: result.data?.game ?? "",
                    image: result.data?.image ?? "",
                    description: result.data?.description ?? "",
                    banner: result.data?.banner ?? "",
                    inviteOnly: result.data?.settings.inviteOnly ?? false,
                    maxTeamSize: result.data?.settings.maxTeamCount ?? 8,
                    minTeamSize: result.data?.settings.minTeamCount ?? null,
                    format: result.data?.settings.gameFormat ?? "",
                    hostMode: result.data.settings.hostMode ?? "",

                    stageInfo: result.data ? result.data.stageInfo : [{
                        stageName: "Untitled stage 1",
                        groupCount: 1,
                        stageType: "",
                        stageFormat: "",
                        roundsCount: 3,
                        matchCount: 3,
                        qualification: ""
                    }],

                    rules: result.data?.rules ?? [],
                    enableRewards: result.data?.enableRewards ?? true,
                    rewards: result.data?.rewards ?? [],
                    registrationDate: new Date(result.data?.schedule?.registrationDate) ,
                    registrationTime: result.data?.schedule.registrationTime ?? "00:00:00",
                    checkIn: result.data?.schedule?.checkIn ?? true,
                    checkInMinutes: result.data?.schedule?.checkInMinutes ?? 0,
                    startDate: new Date(result.data?.schedule?.startDate),
                    startTime: result.data?.schedule?.startTime ?? "00:00:00"
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

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
        resolver: zodResolver(tournamentSchema),
        defaultValues: {
            name: "",
            game: "",
            image: "",
            description: "",
            banner: "",
            inviteOnly: false,
            maxTeamSize: 8,
            minTeamSize: null,
            format: "",
            hostMode: "",

            stageInfo: [{
                stageName: "Untitled stage 1",
                groupCount: 1,
                stageType: "",
                stageFormat: "",
                roundsCount: 3,
                matchCount: 3,
                qualification: ""
            }],

            rules: [],
            enableRewards: true,
            rewards: [],
            registrationDate: "",
            registrationTime: "",
            checkIn: true,
            checkInMinutes: 30,
            startDate: "",
            startTime: ""
        }
    })
    const output = methods.watch()
    console.log(output);

    useEffect(() => {
        if (!TID) { return }
        getTournamentData()

    }, [TID])

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
                        <h1 className='pb-3 text-3xl w-full font-bold '>{
                            TID ? "Update Tournament" : "Create Tournament"
                        }</h1>
                        <p className='pb-3 text-xl'>Step {activeStep} of {steps[steps.length - 1]}</p>
                        <StepperTournamentWizard steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                    </section>

                    {/* step 1 */}
                    {
                        activeStep == 1 &&
                        <CreateStepOne
                            getTournamentData={getTournamentData}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {   //step 2
                        activeStep == 2 &&
                        <CreateStepTwo
                            getTournamentData={getTournamentData}
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
                        getTournamentData={getTournamentData}
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
                        getTournamentData={getTournamentData}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {
                        //step 5
                        activeStep == 5 &&
                        <CreateStepFive
                            getTournamentData={getTournamentData}
                            handleStepChange={handleStepChange}
                        />
                    }

                    {
                        activeStep == 6 &&
                        <CreateTournamentPreview handleStepChange={handleStepChange} />
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