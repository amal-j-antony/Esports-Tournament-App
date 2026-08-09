import { GAME_TYPES } from "@/data/constants/gameTypes";
import { SERIES_FORMAT } from "@/data/constants/seriesFormat";
import { format } from "date-fns";
import z, { custom, discriminatedUnion } from "zod";

const groupStageSchema = z.discriminatedUnion("enabled", [
    z.object({
        enabled: z.literal(false)
    }),
    z.object({
        enabled: z.literal(true),
        stageFormat: z.string().min(2, "Format selection required"),
        groupCount: z.number().min(1, "Group count should be a minimum of one")

    })
])



const tournamentSchema = z.discriminatedUnion("format",[
    z.object({
        format: z.literal(SERIES_FORMAT.HEAD_TO_HEAD),
        groupStage: groupStageSchema
    }),


z.object({
    name: z.string().min(3, "Name too short"),
    game: z.string().min(2, "Select game to proceed"),
    maxTeamSize: z.number(),
    minTeamSize: z.number(),
    
    
    
}).superRefine((data, ctx) => {
    if (groupStage.enabled) {
        if (data.groupStage.stageFormat == GAME_TYPES.SINGLE_ELIMINATION || data.groupStage.stageFormat == GAME_TYPES.DOUBLE_ELIMINATION) {
            const numRounds = Math.log2(maxTeamSize)
            const minTeamsRequired = 2 ** (numRounds - 1) + 1
            if (minTeamSize < minTeamsRequired) {
                ctx.addIssue({
                    code: "custom",
                    path: ["minTeamSize"],
                    message: `minimum team size is ${minTeamsRequired} for a max team size of ${data.maxTeamSize} with selected game format`
                })
            }
        }
    } else {
        if (data.mainStage.stageFormat == GAME_TYPES.SINGLE_ELIMINATION || data.mainStage.stageFormat == GAME_TYPES.DOUBLE_ELIMINATION) {
            const numRounds = Math.log2(maxTeamSize)
            const minTeamsRequired = 2 ** (numRounds - 1) + 1
            if (minTeamSize < minTeamsRequired) {
                ctx.addIssue({
                    code: "custom",
                    path: ["minTeamSize"],
                    message: `minimum team size is ${minTeamsRequired} for a max team size of ${data.maxTeamSize} with selected game format`
                })
            }
        }
    }
if(format == SERIES_FORMAT.LOBBY){
    
}

})

])

// defaultValues: {
//             name: "",
//             game: "",
//             image: "",
//             description: "",
//             banner: "",
//             inviteOnly: false,
//             maxTeamSize: 8,
//             minTeamSize: 4,
//             format: "",
//             hostMode: "",
//             groupStage: {
//                 enabled: true,
//                 stageFormat: "",
//                 groupCount: 2,
//                 roundsCount: 3,
//                 matchcount: 0
//             },
//             mainStage: {
//                 stageFormat: "",
//                 groupCount: 2,
//                 roundsCount: 3,
//                 matchcount: 0
//             },
//             rules: [],
//             enableRewards: true,
//             rewards: [],
//             registrationDate: "",
//             checkIn: true,
//             checkInMinutes: 0,            
//             startDate: ""