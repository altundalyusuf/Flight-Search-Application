import PropTypes from 'prop-types';

const FlightDirectionCheckbox = ({ checked, onChange }) => {
    return (
        <>
            <div>
                <label htmlFor="oneDirection" className="flex items-center">
                    <input
                        type="checkbox"
                        id="oneDirection"
                        name="oneDirection"
                        checked={checked}
                        onChange={onChange}
                        className="checkbox checkbox-xs checkbox-info border-2 mr-2"
                    />
                    Tek Yön
                </label>
            </div>
        </>
    )
}

FlightDirectionCheckbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FlightDirectionCheckbox;