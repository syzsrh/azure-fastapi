import axios from 'axios';

const API_URL = 'http://localhost:7071';

const apiService = axios.create({
    baseURL: API_URL,
});


export const getApi = async () => {
    try {
        const response = await apiService.get('/api');
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};