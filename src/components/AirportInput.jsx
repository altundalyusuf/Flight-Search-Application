import PropTypes from 'prop-types';

const AirportInput = ({ nameId, label, value, onChange }) => {
    return (
        <>
            <div>
                <label htmlFor={nameId} className="block font-medium mb-2">
                    {label}
                </label>
                <select
                    id={nameId}
                    name={nameId}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    {/* Options for departure */}
                </select>
            </div>
        </>
    )
}

AirportInput.propTypes = {
    nameId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default AirportInput
