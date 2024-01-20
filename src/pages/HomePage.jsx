import { useSelector } from "react-redux";
import WelcomingContainer from "../components/WelcomingContainer";
import SearchFlights from "../components/SearchFlights";

const HomePage = () => {
    const isFormVisible = useSelector((state) => state.formData.isFormVisible)
    return (
        <>
            {/* Break home page into 4 columns */}
            <div className="grid grid-cols-4 bg-sky-300 bg-repeat" style={{ backgroundImage: `url('/src/assets/plane_background.png')` }}>
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
                <div className="bg-right bg-cover h-screen rounded-l-full animate-fadeInTwoSec" style={{ backgroundImage: `url('/src/assets/flying-theme-background.jpeg')` }}></div>
            </div>
        </>
    );
};

export default HomePage;
