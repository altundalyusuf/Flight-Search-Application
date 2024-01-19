import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import getAirports from '../api/getAirports';

const AirportInput = ({ nameId, label, value, onChange }) => {
    const [airports, setAirports] = useState([]);

    // Get airports from the API when page loads
    useEffect(() => {
        const fetchAirports = async () => {
            const result = await getAirports();
            setAirports(result);
        };

        fetchAirports();
    }, []);

    return (
        <>
            <label htmlFor={nameId} className="block font-medium mb-2">
                {label}
            </label>
            <Select placeholder='Seçiniz' id={nameId} name={nameId} value={value} onChange={(selectedOption) => onChange(selectedOption)} options={airports} className='text-black' />
        </>
    );
};

AirportInput.propTypes = {
    nameId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired
}
export default AirportInput
