const axios = require('axios');

const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {

    params: {
        // part: "id,snippet",
        // type: "video",
        maxResults: "50",
    },
    headers: {
        "x-rapidapi-key": "7a4942bda7msh7a3a5b5d1f7581cp11736ajsn864d29d88870",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
};

export default async function fetchFromAPI(url){
    try {
        const response = await axios.get(`${BASE_URL}/${url}`,options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

