import { BsDot } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import PropTypes from 'prop-types';
import DirectionHeader from "./DirectionHeader";
import { useEffect, useState } from "react";
import formatDate from "../../helpers/formatDate";
import { useSelector } from "react-redux";
import sortFlights from "../../helpers/sortFlights";

const FlightCards = ({ flights, reverseHeader }) => {
    const [selectedFormData, setSelectedFormData] = useState(null)
    const { sortingName } = useSelector(state => state.formData);

    useEffect(() => {
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));
    }, []);


    return (
        <>
            {/* Direction Header */}
            <DirectionHeader reverseHeader={reverseHeader} />
            <div className="bg-base-200 rounded-badge cursor-pointer">
                {/* Flight content and filtering based on airports and dates */}
                {flights?.length > 0 && selectedFormData &&
                    flights
                        .filter(flight => {
                            // If flight isn't one way, filter return flights too
                            if (reverseHeader) {
                                return (
                                    flight.departure.value === selectedFormData.destination.value &&
                                    flight.destination.value === selectedFormData.departure.value &&
                                    formatDate(flight.departureDate) === formatDate(selectedFormData.returnDate)
                                );
                            } else {
                                return (
                                    flight.departure.value === selectedFormData.departure.value &&
                                    flight.destination.value === selectedFormData.destination.value &&
                                    formatDate(flight.departureDate) === formatDate(selectedFormData.departureDate)
                                );
                            }
                        })
                        .sort((a, b) => {
                            // If user selected a sorting method, sort the flights
                            if (sortingName) {
                                return sortFlights(a, b, sortingName);
                            } else {
                                return 0;
                            }
                        })
                        .map((flight, index, self) => {
                            return (
                                <div key={flight.id} className={`text-xl font-medium px-9 py-3 ${index !== self.length - 1 ? "border-b-8 border-blue-300" : ""}`}>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            {flight.airline}
                                        </div>
                                        <div>
                                            <div>{flight.departureTime}</div>
                                            <div>{flight.departure.value}</div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            {flight.duration}
                                            <div className="flex items-center">
                                                <BsDot />
                                                <div className="flex-grow border-b border-gray-500 mx-2 w-48" ></div>
                                                <IoMdArrowDropright />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{flight.arrivalTime}</div>
                                            <div>{flight.destination.value}</div>
                                        </div>
                                        <div className="pe-5">
                                            {flight.price}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}
FlightCards.propTypes = {
    flights: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedFormData: PropTypes.arrayOf(PropTypes.object),
    reverseHeader: PropTypes.bool,
};
export default FlightCards
