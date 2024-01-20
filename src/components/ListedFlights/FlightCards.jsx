import { BsDot } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const FlightCards = () => {
    // Direction Header
    const DirectionHeader = () => {
        return (
            <div className="rounded flex justify-between py-6">
                <div className="text-white flex">
                    <div className="flex items-center me-4">
                        <FaPlaneDeparture className="text-3xl" />
                    </div>
                    <h2 className="text-3xl me-4">İstanbul Sabiha Gökçen</h2>
                    <div className="flex items-center me-8">
                        <MdOutlineArrowRightAlt className="text-3xl" />
                    </div>
                    <h2 className="text-3xl">İzmir</h2>
                </div>
            </div>
        )
    }
    return (
        <>
            <DirectionHeader />
            <div className="bg-base-200 rounded-badge">
                {/* Flight content */}
                <div className="text-xl font-medium px-9 py-3">
                    <div className="flex justify-between items-center">
                        <div className="">
                            Pegasus
                        </div>
                        <div className="">
                            <div>12.15</div>
                            <div>SAW</div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            1 saat
                            <div className="flex items-center">
                                <BsDot />
                                <div className="flex-grow border-b border-gray-500 mx-2 w-48" ></div>
                                <IoMdArrowDropright />

                            </div>
                        </div>


                        <div className="">
                            <div>14.15</div>
                            <div>ADB</div>
                        </div>
                        <div className="pe-5">
                            13.000 TL
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightCards
