import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineArrowRightAlt, MdFilterListAlt } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setSortingName } from '../../redux-toolkit/slices/formDataSlice';

const DirectionHeader = ({ reverseHeader }) => {
    const [selectedFormData, setSelectedFormData] = useState(null)
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    // When radio buttons selected
    const handleChange = (e) => {
        // Dispatch sorting type to redux store
        dispatch(setSortingName(e.target.id));
        // close dropdown
        setOpen((open) => !open);
    };
    useEffect(() => {
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));
    }, []);

    return (
        <>
            {selectedFormData && (
                <div className="rounded flex justify-between py-6">
                    {/* Departure - Destination Airports */}
                    <div className="text-white flex items-center">
                        <div className="flex items-center me-4">
                            <FaPlaneDeparture className="text-3xl" />
                        </div>
                        <h2 className="text-2xl me-4">{reverseHeader ? selectedFormData.destination.label : selectedFormData.departure.label}</h2>
                        <div className="flex items-center me-8">
                            <MdOutlineArrowRightAlt className="text-3xl" />
                        </div>
                        <h2 className="text-2xl">{reverseHeader ? selectedFormData.departure.label : selectedFormData.destination.label}</h2>
                    </div>
                    {/* Filter Button */}
                    {!reverseHeader &&
                        <div className='text-white'>
                            <div className="dropdown dropdown-left">
                                <div tabIndex={0} role="button" className="btn" onClick={() => setOpen((prevOpen) => !prevOpen)}>
                                    <MdFilterListAlt />
                                    Sırala
                                </div>
                                <ul
                                    tabIndex={0}
                                    className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52 ${open ? "block" : "hidden"}`}
                                >
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                id="departureTime"
                                                className="radio"
                                                value="Kalkış Saati"
                                                onChange={handleChange}
                                            />
                                            <span>Kalkış Saati</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                id='arrivalTime'
                                                className="radio"
                                                value="Dönüş Saati"
                                                onChange={handleChange}
                                            />
                                            <span>Dönüş Saati</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                id='duration'
                                                className="radio"
                                                value="Uçuş Uzunluğu"
                                                onChange={handleChange}
                                            />
                                            <span>Uçuş Uzunluğu</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                id='price'
                                                className="radio"
                                                value="Fiyat"
                                                onChange={handleChange}
                                            />
                                            <span>Fiyat</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            )}
        </>
    );
}
DirectionHeader.propTypes = {
    reverseHeader: PropTypes.bool,
};
export default DirectionHeader;