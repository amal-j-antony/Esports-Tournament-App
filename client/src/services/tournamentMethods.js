import { axiosConfig } from "./axiosConfig"

export const getAllTournamentsAPI = async () => {
    return await axiosConfig('GET','/allTournaments',{})
}

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

export const updateTournamentStepFourAPI = async (data) => {
    return await axiosConfig('PUT','updateTournamentStepFour',data)
}

export const updateTournamentStepFiveAPI = async (data) => {
    return await axiosConfig('PUT','updateTournamentStepFive',data)
}

export const deleteTournamentAPI = async (tID) => {
    return await axiosConfig('DELETE',`deleteTournament/${tID}`,{})
}

export const updateTournamentStatusAPI = async (data) => {
    return await axiosConfig('PUT',`/updateTournamentStatus`,data)
}

