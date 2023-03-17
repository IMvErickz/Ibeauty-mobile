import axios from 'axios'

export const api = axios.create({
    baseURL: "http://192.168.181.7:3333"
})