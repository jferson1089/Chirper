import axios from 'axios'

const api = axios.create({
    baseURL: 'https://chirper-back.herokuapp.com/'
})

export const getAllUsers = async () => {
    const resp = await api.get('/users/')
    return resp.data
}

export const getUserByUsername = async (username) => {
    const resp = await api.get(`/users/${username}`)
    return resp.data
}

export const createUser = async () => {
    const resp = await api.post('/users')
    return resp.data
}

export const updateUser = async (username) => {
    const resp = await api.put(`/users/${username}`)
    return resp.data
}

export const deleteUser = async (username) => {
    const resp = await api.delete(`/users/${username}`)
    return resp.data
}

export const getAllChirps = async () => {
    const resp = await api.get('/chirps')
    return resp.data
}

export const getChirpsByUsername = async (username) => {
    const resp = await api.get(`/chirps/username/${username}`)
    return resp.data
}

export const getChirpById = async (id) => {
    const resp = await api.get(`/chirps/id/${id}`)
    return resp.data
}

export const createChirp = async () => {
    const resp = await api.post('/chirps')
    return resp.data
}

export const updateChirp = async (id) => {
    const resp = await api.put(`/chirps/${id}`)
    return resp.data
}

export const deleteChirp = async (id) => {
    const resp = await api.delete(`/chirps/${id}`)
    return resp.data
}

export const getAllComments = async () => {
    const resp = await api.get('/comments')
    return resp.data
}

export const getCommentsByUsername = async (username) => {
    const resp = await api.get(`/comments/username/${username}`)
    return resp.data
}

export const getCommentById = async (id) => {
    const resp = await api.get(`/comments/id/${id}`)
    return resp.data
}

export const createComment = async () => {
    const resp = await api.post('/comments')
    return resp.data
}

export const updateComment = async (id) => {
    const resp = await api.put(`/comments/${id}`)
    return resp.data
}

export const deleteComment = async (id) => {
    const resp = await api.delete(`/comments/${id}`)
    return resp.data
}