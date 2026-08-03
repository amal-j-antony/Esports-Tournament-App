import z from "zod";


export const tournamentSchema = z.object({
    name: z.string().min(2,"Tournament Name must be longer than 2 charachters"),

    game: z.string().nonempty("Game selectoin required"),

    maxTeamSize: z.number().min(8,"Max team size cannot be lower than 4"),

    minTeamSize: z.number().min(4,"Minimum team count cannot be lower than 4")

    

}).superRefine((data,ctx)=> {
    if(data.minTeamSize > data.maxTeamSize){
        ctx.addIssue({
            code: "custom",
            path: ["maxTeamSize"],
            message: "Maximum team size cannot be smaller than minimum team size"
        })
    }
} )



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