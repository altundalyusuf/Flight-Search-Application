import PropTypes from 'prop-types';

const WelcomingContainer = ({ setIsVisible }) => {
    const hidePanel = () => {
        setIsVisible(false)
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center text-center bg-slate-800 p-8 md:pt-14 md:px-14 rounded-md animate-fadeInOneHalfSec'>
                <div className="text-5xl font-bold text-white mb-4">Uçuş Yanında</div>
                <div className="text-2xl font-bold text-white mb-8">Hemen yer ayırt!</div>
                <button className="btn btn- border-0 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={hidePanel}>Bilet Al</button>
            </div>
        </>
    )
}

WelcomingContainer.propTypes = {
    setIsVisible: PropTypes.func.isRequired,
};

export default WelcomingContainer;