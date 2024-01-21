import axios from 'axios';

async function getFlights() {
    try {
        // Fetch flight information from the server
        const response = await axios.get('https://altundalyusuf.github.io/flight-search-api/flights.json');
        return response.data;
    } catch (error) {
        console.error('Sunucu tarafında hata! Uçuşlar listelenemedi: ', error);
        throw error;
    }
}

export default getFlights;
