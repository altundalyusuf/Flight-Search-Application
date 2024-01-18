import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DatePickerComponent = ({ nameId, label, selected, onChange }) => {
    return (
        <>
            <div>
                <label htmlFor={nameId} className="block font-medium mb-2">
                    {label}
                </label>
                <div className="relative">
                    <DatePicker
                        id={nameId}
                        selected={selected}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded-md text-black pr-10 ps-4 hover:cursor-pointer"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                    </div>
                </div>
            </div>
        </>
    )
}

DatePickerComponent.propTypes = {
    nameId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent
