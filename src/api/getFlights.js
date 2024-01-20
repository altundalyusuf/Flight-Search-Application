import axios from 'axios';

async function getFlights() {
    try {
        const response = await axios.get('http://localhost:3000/flights');
        // Format the data according to react-select library rules
        // const formattedResult = response.data.map(airport => ({
        //     value: airport.code,
        //     label: airport.name,
        // }));
        console.log('response.data', response.data)
        // return formattedResult;
    } catch (error) {
        console.error('Sunucu tarafında hata! Uçuşlar listelenemedi: ', error);
        throw error;
    }
}

export default getFlights;
