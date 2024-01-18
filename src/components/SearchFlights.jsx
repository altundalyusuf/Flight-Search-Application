import FlightsForm from "./FlightsForm"


const SearchFlights = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-slate-800 p-8 w-max rounded-md'>
                {/* Form for flight searching */}
                <FlightsForm />
            </div>
        </>
    )
}

export default SearchFlights
