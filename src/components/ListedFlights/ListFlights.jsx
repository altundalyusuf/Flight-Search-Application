import FlightContainer from "./FlightContainer";
import FlightHeader from "./FlightHeader";


const ListFlights = () => {
    return (
        <>
            <div className="bg-slate-200 min-h-[100vh]">
                {/* Header */}
                <FlightHeader />
                {/* Flights */}
                <FlightContainer />
            </div>

        </>
    );
};

export default ListFlights;
