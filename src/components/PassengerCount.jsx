import PropTypes from 'prop-types';

const PassengerCount = ({ label, passengerCount, onDecrease, onIncrease, handleSearch }) => {
    return (
        <>
            <div>
                <label htmlFor="passengerCount" className="block font-medium mb-2">
                    {label}
                </label>
                <div className="flex items-center justify-between">
                    {/* Passenger count */}
                    <div>
                        <button
                            type="button"
                            onClick={onDecrease}
                            className="p-2 border border-gray-300 rounded-md"
                        >
                            -
                        </button>
                        <span className="mx-2">{passengerCount}</span>
                        <button
                            type="button"
                            onClick={onIncrease}
                            className="p-2 border border-gray-300 rounded-md"
                        >
                            +
                        </button>
                    </div>
                    {/* Submit form button  */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="btn border-none hover:bg-blue-700 px-4 py-2 text-white bg-blue-500 rounded-md me-5"
                    >
                        Uçuş Ara
                    </button>
                </div>
            </div>
        </>
    )
}

PassengerCount.propTypes = {
    label: PropTypes.string.isRequired,
    passengerCount: PropTypes.number.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default PassengerCount;