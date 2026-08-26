import axios from "axios"
import { axiosConfig } from "./axiosConfig"

export const createOrganizationAPI = async (reqData) => {
    return await axiosConfig('POST','/create-organization',reqData)
}

export const getUserOrganizationAPI = async (userID) => {
    return await axiosConfig('GET',`/getOrganizationByUser/${userID}`,{})
}

export const getAllOrganizationsAPI = async () => {
    return await axiosConfig('GET','/getOrganizations', {})
}

export const reqJoinOrganizationAPI = async (orgID) => {
    return await axiosConfig('POST','/reqJoinOrganization',{orgID})
}

export const cancelJoinOrganizationAPI = async (orgID) => {
    return await axiosConfig('PUT','/cancelJoinOrganization',{orgID})
}

export const getOrganizationTournamentsAPI = async(orgID) => {
    return await axiosConfig('GET',`/getOrgTournaments/${orgID}`,{})
}

export const getOrganizationByID_API = async(orgID) => {
    return await axiosConfig("GET",`/getOrganization/${orgID}`,{})
}