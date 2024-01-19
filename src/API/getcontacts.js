import { api } from "./api";

export const getData = async () => {

const {data} = await api.get(`/contact`);
    console.log(data)
    return data
    
};