import { LuArrowRightLeft } from "react-icons/lu";

const FlightHeader = () => {
    return (
        <>
            <div className="rounded flex justify-between bg-sky-400 bg-repeat">
                <img src="/src/assets/sky4.jpeg" alt="sky image 4" className="max-h-52 rounded-e-full" />
                <div className="text-white flex flex-col justify-center text-center">
                    <h2 className="text-3xl pb-3">İstanbul Sabiha Gökçen</h2>
                    <div className="flex justify-center">
                        <LuArrowRightLeft className="text-3xl" />
                    </div>
                    <h2 className="text-3xl">İzmir</h2>
                    <div className="flex mt-3">
                        <h3 className="me-9">Gidiş: 24 Ocak 2024</h3>
                        <h3>Dönüş: 29 Ocak 2024</h3>
                    </div>
                </div>
                <img src="/src/assets/sky3.jpeg" alt="sky image 3" className="max-h-52 rounded-s-full" />
            </div>
        </>
    )
}

export default FlightHeader
