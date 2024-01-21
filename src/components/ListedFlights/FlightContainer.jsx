import FlightCards from "./FlightCards";
import { useEffect, useState } from "react";
import getFlights from "../../api/getFlights";

const FlightContainer = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFormData, setSelectedFormData] = useState(null)

    useEffect(() => {
        // Fetch flights from server
        const fetchFlights = async () => {
            const result = await getFlights();
            setFlights(result);
        };
        // Fetch user's input informations from session storage
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));

        fetchFlights();
    }, [])
    return (
        <>
            <div className="container bg-sky-900 rounded-badge mx-auto px-4 mb-5 pb-9">
                <FlightCards flights={flights} />
                {/* Return Flights */}
                {
                    selectedFormData && !selectedFormData.isReturnDisabled &&
                    <FlightCards flights={flights} reverseHeader={true} />
                }
            </div>
        </>
    )
}

export default FlightContainer
