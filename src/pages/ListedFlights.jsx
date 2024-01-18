

const ListedFlights = () => {
    const flights = [
        { id: 1, origin: 'New York', destination: 'Los Angeles', time: '10:00 AM' },
        { id: 2, origin: 'Chicago', destination: 'Miami', time: '12:00 PM' },
        { id: 3, origin: 'San Francisco', destination: 'Seattle', time: '2:00 PM' },
    ];

    return (
        <div>
            <h1>Listed Flights</h1>
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        Flight from {flight.origin} to {flight.destination} at {flight.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListedFlights;
