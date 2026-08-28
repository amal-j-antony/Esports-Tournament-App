import React from 'react'
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';


function TournamentDetailStepper({ schedule }) {

    const tournamentSchedule = [
        {
            name: "Registration Opens",
            description: `${format(Date(schedule?.registrationDate), "PP")} ${schedule?.registrationTime} `
        },
        {
            name: "Registration Closes",
            description: `${format(Date(schedule?.registrationEnd), "PP")} ${schedule?.registrationEndTime} `
        },
        {
            name: "Tournament Starts",
            description: `${format(Date(schedule?.registrationEnd), "PP")} ${schedule?.registrationEndTime} `
        }
    ]

    if (schedule?.checkIn) {
        tournamentSchedule.splice(2, 0, {
            name: "Check In",
            description: `${schedule?.checkInMinutes} minutes before match`
        })
    }


    // const steps = [{
    //     stepNumber: 1,
    //     title: "Registration start",
    //     description: "Aug 12,2026",
    //     time: "10:00 AM"
    // },
    // {
    //     stepNumber: 2,
    //     title: "Registration end",
    //     description: "Aug 15,2026",
    //     time: "10:00 AM"
    // },
    // {
    //     stepNumber: 3,
    //     title: "Check In",
    //     description: "Aug 17,2026",
    //     time: "9:00 PM"
    // },
    // {
    //     stepNumber: 4,
    //     title: "Tournament Starts",
    //     description: "Aug 17,2026",
    //     time: "10:00 PM"
    // },
    // {
    //     stepNumber: 5,
    //     title: "Final",
    //     description: "Aug 27,2026",
    //     time: "9:00 PM"
    // }
    // ]

    return (
        <>
            <div className="flex gap-5 overflow-x-auto">
                {
                    tournamentSchedule.map((item, index) => (
                        <React.Fragment key={item.name + index}>
                            <div className='flex flex-col'>
                                <div className="" >{item.name}</div>
                            </div>
                            <Separator orientation='vertical' />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}

export default TournamentDetailStepper