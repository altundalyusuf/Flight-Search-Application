import axios from 'axios';

async function getAirports() {
    try {
        const response = await axios.get('https://altundalyusuf.github.io/flight-search-api/airports.json');
        // Format the data according to react-select library rules
        const formattedResult = response.data.map(airport => ({
            value: airport.code,
            label: airport.name,
        }));
        return formattedResult;
    } catch (error) {
        console.error('Sunucu tarafında hata! Havalimanları gösterilemedi: ', error);
        throw error;
    }
}

export default getAirports;
