import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const checkAPI = async (): Promise<any> => {
    try {
        const response = await axios.get(
            API_URL
        );
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
