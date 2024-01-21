import { getTimeInMinutes, getDurationInMinutes, getPriceAsNumber } from "./convertFlightStrings";

function sortFlights(a, b, criteria) {
    switch (criteria) {
        case 'departureTime':
        case 'arrivalTime':
            return getTimeInMinutes(a[criteria]) - getTimeInMinutes(b[criteria]);
        case 'duration':
            return getDurationInMinutes(a[criteria]) - getDurationInMinutes(b[criteria]);
        case 'price':
            return getPriceAsNumber(a[criteria]) - getPriceAsNumber(b[criteria]);
        default:
            return 0;
    }
}

export default sortFlights;