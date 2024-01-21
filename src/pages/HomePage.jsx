import { useSelector } from "react-redux";
import WelcomingContainer from "../components/WelcomingContainer";
import SearchFlights from "../components/FlightForm/SearchFlights";
import plane_background from "../assets/plane_background.png";
import flyingThemeBackground from "../assets/flyingThemeBackground.jpeg";


const HomePage = () => {
    const isFormVisible = useSelector((state) => state.formData.isFormVisible)
    return (
        <>
            {/* Break home page into 4 columns */}
            <div className="grid grid-cols-4 bg-sky-300 bg-repeat" style={{ backgroundImage: `url(${plane_background})` }}>
                {/* Left column of the home page */}
                <div className=" bg-left bg-cover rounded-r-full animate-fadeInTwoSec" style={{ backgroundImage: `url('/src/assets/flying-theme-background.jpeg')` }}></div>
                {/* Middle column of the home page (2 span columns) */}
                <div className="col-span-2 flex flex-col justify-center items-center">
                    <div>
                        {
                            !isFormVisible ?
                                <WelcomingContainer />
                                :
                                <SearchFlights />
                        }
                    </div>
                </div>
                {/* Right column of the home page  */}
                <div className="bg-right bg-cover h-screen rounded-l-full animate-fadeInTwoSec" style={{ backgroundImage: `url(${flyingThemeBackground})` }}></div>
            </div>
        </>
    );
};

export default HomePage;
