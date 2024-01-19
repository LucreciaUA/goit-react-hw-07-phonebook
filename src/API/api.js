import axios from "axios";


export const api = axios.create({
    baseURL: 'https://65a6d2dc74cf4207b4f0e58d.mockapi.io/api/contacts/'
})

