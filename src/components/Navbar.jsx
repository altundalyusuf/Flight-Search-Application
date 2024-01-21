import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toggleFormVisibility } from "../redux-toolkit/slices/formDataSlice";
import flyingLogo from "/src/assets/flyingLogo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleFormVisibility(false));
        navigate('/')
    }
    return (
        <nav className="bg-yellow-600 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Brand */}
                <div onClick={handleClick} className="border-x-8 px-3 hover:cursor-pointer rounded-full flex items-center animate-fadeInOneSec">
                    <img src={flyingLogo} alt="Logo" className="h-10 w-10 mr-2" />
                    <div className="text-white font-bold hover:text-slate-200 text-xl">Uçuş Yanında</div>
                </div>
                {/* NavLinks */}
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 animate-fadeInOneSec text-center">
                    <a href="#" className="text-white hover:text-gray-200 mb-1 md:mb-0">Hakkımızda</a>
                    <span className="text-white hidden md:flex ">|</span>
                    <a href="#" className="text-white hover:text-gray-200 mb-1 md:mb-0">İletişim</a>
                    <span className="text-white hidden md:flex ">|</span>
                    <a href="#" className="text-white hover:text-gray-200">Giriş</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
