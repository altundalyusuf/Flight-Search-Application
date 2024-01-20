import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveFormData, increasePassengerCount, decreasePassengerCount } from '../../redux-toolkit/slices/formDataSlice';
import AirportInput from './AirportInput';
import constants from '../../constants';
import DatePickerComponent from './DatePickerComponent';
import FlightDirectionCheckbox from './FlightDirectionCheckbox';
import PassengerCount from './PassengerCount';


const FlightsForm = () => {
    // Global State
    const formData = useSelector((state) => state.formData)
    const dispatch = useDispatch()
    const { departure, destination, departureDate, returnDate, isReturnDisabled, oneDirection, passengerCount } = formData;

    // Navigation
    const navigate = useNavigate();

    // Constant names from the constants file
    const { departureInputLabel, departureInputName, destinationInputLabel, destinationInputName, departureDatePickerName, departureDatePickerLabel, destinationDatePickerName, destinationDatePickerLabel, flightDirectionCheckboxLabel, passengerCountLabel } = constants;

    // Handle Functions
    const handleDepartureChange = (selectedAirport) => {
        dispatch(saveFormData({ ...formData, departure: selectedAirport }))
    };
    const handleDestinationChange = (selectedAirport) => {
        dispatch(saveFormData({ ...formData, destination: selectedAirport }))
    };
    const handleDepartureDateChange = (date) => {
        dispatch(saveFormData({ ...formData, departureDate: date, returnDate: null }))
    };
    const handleReturnDateChange = (date) => {
        dispatch(saveFormData({ ...formData, returnDate: date }))
    };
    const handlePassengerCountIncrease = () => {
        dispatch(increasePassengerCount());
    };
    const handlePassengerCountDecrease = () => {
        dispatch(decreasePassengerCount())
    };
    const handleOneDirectionChange = (e) => {
        dispatch(saveFormData({ ...formData, oneDirection: e.target.checked, isReturnDisabled: e.target.checked, returnDate: null }))
    };

    // Toastify notification
    const notify = () => {
        toast.warn('Lütfen tüm alanları doldurun!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const handleSearch = () => {
        // When submitting form
        if (departure && destination && departureDate && (oneDirection || returnDate)) {
            const formData = { departure, destination, departureDate, returnDate, passengerCount, oneDirection, isReturnDisabled };

            // Save on Redux Toolkit
            dispatch(saveFormData(formData))

            // Veriyi Session Storage'a eklemek
            sessionStorage.setItem('selectedFormData', JSON.stringify(formData));

            // Navigate to flights page
            navigate('/flights');
        } else {
            // If all of the inputs are not filled, show a toast notification
            notify()
        }
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
                {/* Return Date */}
                {isReturnDisabled ? null :
                    <DatePickerComponent nameId={destinationDatePickerName} label={destinationDatePickerLabel} selected={returnDate} onChange={handleReturnDateChange} minDate={departureDate} disable={isReturnDisabled} />
                }
                {/* Checkbox for one direction flights */}
                <FlightDirectionCheckbox label={flightDirectionCheckboxLabel} checked={oneDirection} onChange={handleOneDirectionChange} />
                {/* Passenger count and form submit button */}
                <PassengerCount label={passengerCountLabel} passengerCount={passengerCount} onIncrease={handlePassengerCountIncrease} onDecrease={handlePassengerCountDecrease} handleSearch={handleSearch} />
            </form>
            {/* Toast if inputs are not filled when submitting */}
            <ToastContainer />
        </div>
    );
};

export default FlightsForm;
