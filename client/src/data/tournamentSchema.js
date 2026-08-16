import { format } from "date-fns";
import z from "zod";
import { SERIES_FORMAT } from "./constants/seriesFormat";


const baseSchema = z.object({

    name: z.string().min(2, "Tournament Name must be longer than 2 charachters"),
    game: z.string().nonempty("Game selection required"),
    maxTeamSize: z.number().min(8, "Max team size cannot be lower than 4"),
    minTeamSize: z.number().min(4, "Minimum team count cannot be lower than 4"),
   
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
                roundsCount: z.number().min(1,"Round count cannot be zero")
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