import FlightCards from "./FlightCards";
import { useEffect, useState } from "react";
import getFlights from "../../api/getFlights";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../Loading";

const FlightContainer = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFormData, setSelectedFormData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch flights from server
        const fetchFlights = async () => {
            setIsLoading(true);
            try {
                const result = await getFlights();
                setFlights(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Veri yükleme hatası:', error);
                setIsLoading(false);
                toast.error('Sunucu tarafında hata! Uçuşlar listelenemedi: ' + error.message);
            }
        };
        // Fetch user's input informations from session storage
        const data = sessionStorage.getItem('selectedFormData');
        setSelectedFormData(JSON.parse(data));

        fetchFlights();
    }, [])
    return (
        <>
            <div className="container bg-sky-900 rounded-badge mx-auto px-4 mb-5 pb-9">
                {isLoading ? <Loading /> :
                    <>
                        <FlightCards flights={flights} />
                        {/* Return Flights */}
                        {
                            selectedFormData && !selectedFormData.isReturnDisabled &&
                            <FlightCards flights={flights} isLoading={isLoading} reverseHeader={true} />
                        }
                        <ToastContainer />
                    </>
                }
            </div>
        </>
    )
}

export default FlightContainer
