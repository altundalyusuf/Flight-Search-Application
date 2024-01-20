import FlightContainer from "./FlightContainer";
import FlightHeader from "./FlightHeader";


const ListFlights = () => {


    return (
        <>
            <div className="bg-slate-200">
                {/* Header */}
                <FlightHeader />
                {/* Flights */}
                <FlightContainer />
            </div>

        </>
    );
};

export default ListFlights;
