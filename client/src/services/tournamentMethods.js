import { axiosConfig } from "./axiosConfig"


export const getTournamentByIdAPI = async (id) => {
    return await axiosConfig('GET',`/tournament/${id}`, {})
}

export const createTournamentAPI = async (data) => {
    return await axiosConfig('POST','/createTournament',data)
}

export const updateTournamentStepOneAPI = async (data) => {
    return await axiosConfig('PUT',`/updateTournamentStepOne`,data)
}

export const updateTournamentStepTwoAPI = async(data) => {
    return await axiosConfig('PUT','/updateTournamentStepTwo',data)
}

export const updateTournamentStepThreeAPI = async (data) => {
    return await axiosConfig('PUT','updateTournamentStepThree',data)
}

export const updateTournamentStageFourAPI = async (data) => {
    return await axiosConfig('PUT','updateTournamentStepFour',data)
}