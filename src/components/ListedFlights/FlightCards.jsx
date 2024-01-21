import { BsDot } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import PropTypes from 'prop-types';
import DirectionHeader from "./DirectionHeader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import filterFlightData from "../../helpers/filterFlightData";
import NoFlightsFound from "./NoFlightsFound";

const FlightCards = ({ flights, reverseHeader, isLoading }) => {
    const [selectedFormData, setSelectedFormData] = useState(null)
    const { sortingName } = useSelector(state => state.formData);

    useEffect(() => {
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));
    }, []);

    const filteredFlights = filterFlightData(flights, selectedFormData, reverseHeader, sortingName);

    return (
        <>
            <DirectionHeader reverseHeader={reverseHeader} />
            {isLoading ? <Loading /> :
                <div className="bg-base-200 rounded-badge cursor-pointer">
                    {
                        filteredFlights?.length === 0 ? (
                            <NoFlightsFound />
                        ) : (filteredFlights
                            .map((flight, index) => {
                                const { id, logo, airline, departureTime, departure, duration, arrivalTime, destination, price } = flight;
                                return (
                                    <div key={id} className={`text-xl font-medium px-9 py-3 ${index !== filteredFlights.length - 1 ? "border-b-8 border-blue-300" : ""}`}>
                                        <div className="flex justify-between items-center">
                                            <div className="w-1/6 text-left">
                                                <img src={logo} alt="" className="h-7 mb-2" />
                                                {airline}
                                            </div>
                                            <div className="w-1/6 text-start">
                                                <div>{departureTime}</div>
                                                <div>{departure.value}</div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center w-1/6">
                                                {duration}
                                                <div className="flex items-center">
                                                    <BsDot />
                                                    <div className="flex-grow border-b border-gray-500 mx-2 w-32" ></div>
                                                    <IoMdArrowDropright />
                                                </div>
                                            </div>
                                            <div className="w-1/6 text-end">
                                                <div>{arrivalTime}</div>
                                                <div>{destination.value}</div>
                                            </div>
                                            <div className="w-1/6 text-end">
                                                {price}
                                            </div>
                                            <div className="w-1/6 text-end">
                                                <button className="btn btn-info">Bilet Al</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                    }
                </div>
            }
        </>
    )
}

FlightCards.propTypes = {
    flights: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedFormData: PropTypes.arrayOf(PropTypes.object),
    reverseHeader: PropTypes.bool,
    isLoading: PropTypes.bool,
};

export default FlightCards;