import { APIClient } from "./api_helper"
import * as url from "./url_helper"

const api = new APIClient();

export const postLogin = (data: {email: string, password: string }) => api.create(url.POST_LOGIN, data)
export const postLogout = () => api.create(url.POST_LOGOUT)
export const getRefresh = () => api.get(url.GET_REFRESH)

export const getUsers = () => api.get(url.USERS_ENDPOINT)
export const getUser = (id : number) => api.get(url.USERS_ENDPOINT+'/'+id)
export const addUser = (formData: any) => api.create(url.USERS_ENDPOINT, formData)
export const updateUser = (config: {id: number, formData: any}) => api.create(url.USERS_ENDPOINT+'/'+config.id, config.formData)
export const deleteUser = (id: number) => api.delete(url.USERS_ENDPOINT+'/'+id)

export const getFolders = () => api.get(url.FOLDER_ENDPOINT)
export const getFolder = (id: number) => api.get(url.FOLDER_ENDPOINT+'/'+id)
export const addFolder = (formData: any) => api.create(url.FOLDER_ENDPOINT, formData)
export const updateFolder = (config: {id: number, formData: any}) => api.create(url.FOLDER_ENDPOINT+'/'+config.id, config.formData)
export const deleteFolder = (id: number) => api.delete(url.FOLDER_ENDPOINT+'/'+id)

export const getRoles = () => api.get(url.ROLE_ENDPOINT)
export const getRole = (id: number) => api.get(url.ROLE_ENDPOINT+'/'+id)
export const addRole = (formData: any) => api.create(url.ROLE_ENDPOINT, formData)
export const updateRole = (config: { id: number, formData: any}) => api.create(url.ROLE_ENDPOINT+'/'+config.id, config.formData)
export const deleteRole = (id: number) => api.delete(url.ROLE_ENDPOINT+'/'+id)