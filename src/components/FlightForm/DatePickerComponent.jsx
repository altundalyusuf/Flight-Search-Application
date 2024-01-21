import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import tr from 'date-fns/locale/tr'; // Türkçe dil desteği


const DatePickerComponent = ({ nameId, label, selected, onChange, minDate }) => {

    // new Date() returns date and time so it will always be less than current day.
    // So we set the hours, minutes, seconds and milliseconds to 0 to get the current date only.
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isDateValid = (date) => {
        // Checking if the date is not past the current date
        return date >= today;
    };

    return (
        <>
            <div className='w-max'>
                <label htmlFor={nameId} className="block font-medium mb-2">
                    {label}
                </label>
                <div className="relative">
                    <DatePicker
                        id={nameId}
                        placeholderText='Tarih Giriniz'
                        selected={selected}
                        onChange={onChange}
                        minDate={minDate} // User shouldn't select an older date for return date than departure date
                        filterDate={isDateValid}
                        locale={tr}
                        className="w-full p-2 border border-gray-300 rounded-md text-black pr-10 ps-4 hover:cursor-pointer"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                    </div>
                </div>
            </div>
        </>
    );
};

DatePickerComponent.propTypes = {
    nameId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
    minDate: PropTypes.instanceOf(Date),
};

export default DatePickerComponent;
