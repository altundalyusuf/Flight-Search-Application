import { useState } from 'react';
import AirportInput from './AirportInput';
import constants from '../constants';
import DatePickerComponent from './DatePickerComponent';
import FlightDirectionCheckbox from './FlightDirectionCheckbox';
import PassengerCount from './PassengerCount';



const FlightsForm = () => {
    // States
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [arrivingDate, setArrivingDate] = useState(null);
    const [passengerCount, setPassengerCount] = useState(1);
    const [oneDirection, setOneDirection] = useState(false);

    // Constant names from the constants file
    const { departureInputLabel, departureInputName, destinationInputLabel, destinationInputName, departureDatePickerName, departureDatePickerLabel, destinationDatePickerName, destinationDatePickerLabel, flightDirectionCheckboxLabel, passengerCountLabel } = constants;

    // Handle Functions
    const handleDepartureChange = (e) => {
        setDeparture(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleDepartureDateChange = (date) => {
        setDepartureDate(date);
        setArrivingDate(null)
    };

    const handleArrivingDateChange = (date) => {
        setArrivingDate(date);
    };

    const handlePassengerCountIncrease = () => {
        setPassengerCount((prevCount) => prevCount + 1);
    };

    const handlePassengerCountDecrease = () => {
        setPassengerCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const handleOneDirectionChange = (e) => {
        setOneDirection(e.target.checked);
    };

    const handleSearch = () => {
        // Perform search logic here
    };

    return (
        <div className="p-4 text-white">
            <form className="space-y-4">
                {/* Departure */}
                <AirportInput nameId={departureInputName} label={departureInputLabel} value={departure} onChange={handleDepartureChange} />
                {/* Destination */}
                <AirportInput nameId={destinationInputName} label={destinationInputLabel} value={destination} onChange={handleDestinationChange} />
                {/* Departure Date */}
                <DatePickerComponent nameId={departureDatePickerName} label={departureDatePickerLabel} selected={departureDate} onChange={handleDepartureDateChange} />
                {/* Arrival Date */}
                <DatePickerComponent nameId={destinationDatePickerName} label={destinationDatePickerLabel} selected={arrivingDate} onChange={handleArrivingDateChange} minDate={departureDate} />
                {/* Checkbox for one direction flights */}
                <FlightDirectionCheckbox label={flightDirectionCheckboxLabel} checked={oneDirection} onChange={handleOneDirectionChange} />
                {/* Passenger count and form submit button */}
                <PassengerCount label={passengerCountLabel} passengerCount={passengerCount} onIncrease={handlePassengerCountIncrease} onDecrease={handlePassengerCountDecrease} handleSearch={handleSearch} />
            </form>
        </div>
    );
};

export default FlightsForm;
