

const Navbar = () => {
    return (
        <nav className="bg-yellow-600 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Brand */}
                <div className="flex items-center animate-fadeInOneSec">
                    <img src="/src/assets/flying-logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                    <div className="text-white font-bold text-xl">Uçuş Yanında</div>
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
