import { useState } from "react";
import WelcomingContainer from "../components/WelcomingContainer";
import SearchFlights from "../components/SearchFlights";

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            <div className="grid grid-cols-4 bg-sky-300 bg-repeat" style={{ backgroundImage: `url('/src/assets/plane_background.png')` }}>
                <div className=" bg-left bg-cover rounded-r-full animate-fadeInTwoSec" style={{ backgroundImage: `url('/src/assets/flying-theme-background.jpeg')` }}></div>
                <div className="col-span-2 flex flex-col justify-center items-center">
                    <div>
                        {
                            isVisible ?
                                <WelcomingContainer setIsVisible={setIsVisible} />
                                :
                                <SearchFlights />
                        }
                    </div>
                </div>
                <div className="bg-right bg-cover h-screen rounded-l-full animate-fadeInTwoSec" style={{ backgroundImage: `url('/src/assets/flying-theme-background.jpeg')` }}></div>
            </div>
        </>
    );
};

export default HomePage;
