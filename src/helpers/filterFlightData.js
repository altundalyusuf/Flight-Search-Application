import formatDate from "./formatDate";
import sortFlights from "./sortFlights";

const filterFlightData = (flights, selectedFormData, reverseHeader, sortingName) => {
    let sortedFlights;

    const filteredFlights = flights.filter(flight => {
        // If flight isn't one way, filter return flights too
        if (reverseHeader) {
            return (
                flight?.departure?.value === selectedFormData?.destination?.value &&
                flight?.destination?.value === selectedFormData?.departure?.value &&
                formatDate(flight?.departureDate) === formatDate(selectedFormData?.returnDate)
            );
        } else {
            return (
                flight?.departure?.value === selectedFormData?.departure?.value &&
                flight?.destination?.value === selectedFormData?.destination?.value &&
                formatDate(flight?.departureDate) === formatDate(selectedFormData?.departureDate)
            );
        }
    })
    if (filteredFlights.length > 0) {
        sortedFlights = filteredFlights.sort((a, b) => {
            // If user selected a sorting method, sort the flights
            if (sortingName) {
                return sortFlights(a, b, sortingName);
            } else {
                return 0;
            }
        })
        return sortedFlights;
    } else {
        return [];
    }
}

export default filterFlightData
