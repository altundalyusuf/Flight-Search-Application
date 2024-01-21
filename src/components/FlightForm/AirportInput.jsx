import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import getAirports from '../../api/getAirports';
import filterOption from '../../helpers/filterOption';
import { ToastContainer, toast } from 'react-toastify';


const AirportInput = ({ nameId, label, value, onChange }) => {
    const [airports, setAirports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get airports from the API when page loads
    useEffect(() => {
        const fetchAirports = async () => {
            setIsLoading(true);
            try {
                const result = await getAirports();
                setAirports(result);

                setIsLoading(false);
            } catch (error) {
                console.error('Veri yükleme hatası:', error);
                setIsLoading(false);
                toast.error('Sunucu tarafında hata! Uçuşlar listelenemedi: ' + error.message);
            }
        };

        fetchAirports();
    }, []);

    return (
        <>
            <label htmlFor={nameId} className="block font-medium mb-2">
                {label}
            </label>
            <Select
                placeholder={isLoading ? 'Yükleniyor...' : 'Havalimanı Adı'}
                id={nameId}
                name={nameId}
                value={value}
                isLoading={isLoading}
                onChange={(selectedOption) => onChange(selectedOption)}
                options={airports}
                className='text-black'
                filterOption={filterOption}
            />
            <ToastContainer />
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
