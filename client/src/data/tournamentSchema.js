
import z from "zod";
import { SERIES_FORMAT } from "./constants/seriesFormat";


const dateCheck = z.date().refine((date) => {
    const selected = new Date(date)
    selected.setHours(0, 0, 0, 0)

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return selected >= today
},
    { message: "You have selected an older date ,Please check your entered date" }
)

const regDateCheck = (open,close,openTime,closeTime) => {
    const openDate =new Date(open)
    const closeDate =new Date(close)
    if(openDate >= closeDate){
        if(openTime>closeTime){
            return false
        }else return true
    }else return true
}

const startDateCheck = (close,start) => {
    const closeDate =new Date(close)
    const startDate =new Date(start)
    if(closeDate > startDate){
        return false
    }else return true
}




const baseSchema = z.object({

    name: z.string().min(2, "Tournament Name must be longer than 2 charachters"),
    game: z.string().nonempty("Game selection required"),
    maxTeamSize: z.number().min(8, "Max team size cannot be lower than 4"),
    minTeamSize: z.number().min(4, "Minimum team count cannot be lower than 4"),
    registrationDate: dateCheck,
    startDate: dateCheck,
    registrationCloseDate: dateCheck,
    registrationTime: z.string(),
    registrationCloseTime: z.string(),
    startTime: z.string(),
    checkInMinutes: z.number(),
    checkIn : z.boolean()
})

const stageSchema = z.object({
    stageName: z.string().min(2, "Stage Name cannot be empty"),
    groupCount: z.number().min(1, "Group count cannot be zero"),
    stageFormat: z.string().min(1, "Game type required"),
    qualification: z.string().min(1, "Qualification criteria required")
})
export const tournamentSchema = z.discriminatedUnion("format", [
    baseSchema.extend({
        format: z.literal(SERIES_FORMAT.HEAD_TO_HEAD),
        stageInfo: z.array(
            stageSchema.extend({
                stageType: z.string().min(1, "Game type selection required"),
                roundsCount: z.number().min(1, "Round count cannot be zero")
            })
        )
    }),
    baseSchema.extend({
        format: z.literal(SERIES_FORMAT.LOBBY),
        stageInfo: z.array(
            stageSchema.extend({
                matchCount: z.number().min(1, "Match count cannot be zero"),
            })
        )
    })
]
).superRefine((data, ctx) => {
    if (data.minTeamSize > data.maxTeamSize) {
        ctx.addIssue({
            code: "custom",
            path: ["maxTeamSize"],
            message: "Maximum team size cannot be smaller than minimum team size"
        })
    }

    if (data.checkIn && data.checkInMinutes < 30) {
        ctx.addIssue({
            code: "custom",
            path: ["checkInMinutes"],
            message: "Check in time must be a minimum of 30 minutes"
        })
    }

    if(!regDateCheck(data.registrationDate,data.registrationCloseDate,data.registrationTime,data.registrationCloseTime)){
        ctx.addIssue({
            code: "custom",
            path: ['registrationCloseDate'],
            message: "Registration close date and time cannot be before registration open "
        })
    }

    if(!startDateCheck(data.registrationCloseDate,data.startDate)){
        ctx.addIssue({
            code: "custom",
            path: ['startDate'],
            message: "Start date and time cannot be before registration close "
        })
    }
})



// name: "",
//     game: "",
//         image: "",
//             description: "",
//                 banner: "",
//                     inviteOnly: false,
//                         maxTeamSize: 0,
//                             minTeamSize: 0,
//                                 format: "",
//                                     hostMode: "",
//                                         groupStage: {
//     enabled: true,
//         stageFormat: "",
//             groupCount: 2,
//                 roundsCount: 3,
//                     matchcount: 0
// },
// mainStage: {
//     stageFormat: "",
//         groupCount: 2,
//             roundsCount: 3,
//                 matchcount: 0
// },
// rules: [],
//     rewards: {
//     enabled: true
// },
// registrationDate: "",
//     checkIn: true,
//         requirements: "",
//             startDate: "",