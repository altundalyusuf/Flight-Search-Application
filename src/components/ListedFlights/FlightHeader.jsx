import { useEffect, useState } from "react";
import { LuArrowRightLeft } from "react-icons/lu";
import formatDate from "../../helpers/formatDate.js";

const FlightHeader = () => {
    const [selectedFormData, setSelectedFormData] = useState(null)

    useEffect(() => {
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));
    }, []);

    return (
        <>

            {selectedFormData && (
                <div className="rounded flex justify-between bg-sky-400 bg-repeat">
                    <img src="/src/assets/sky4.jpeg" alt="sky image 4" className="max-h-52 rounded-e-full" />
                    <div className="text-white flex flex-col justify-center text-center">
                        <h2 className="text-3xl pb-3">{selectedFormData.departure.label}</h2>
                        <div className="flex justify-center">
                            <LuArrowRightLeft className="text-3xl" />
                        </div>
                        <h2 className="text-3xl">{selectedFormData.destination.label}</h2>
                        <div className="flex justify-center mt-3">
                            <h3 className="me-9">Gidiş: {formatDate(selectedFormData.departureDate)}</h3>
                            {
                                selectedFormData.isReturnDisabled ? null
                                    :
                                    <h3>Dönüş: {formatDate(selectedFormData.returnDate)}</h3>
                            }
                        </div>
                    </div>
                    <img src="/src/assets/sky3.jpeg" alt="sky image 3" className="max-h-52 rounded-s-full" />
                </div>
            )}
        </>
    )
}

export default FlightHeader
