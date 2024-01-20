import { useDispatch } from 'react-redux';
import { resetFormData, toggleFormVisibility } from '../redux-toolkit/slices/formDataSlice.js';
import { useEffect } from 'react';

const WelcomingContainer = () => {
    const dispatch = useDispatch();
    const hidePanel = () => {
        dispatch(toggleFormVisibility(true));
    }

    useEffect(() => {
        // If welcoming container rendered then remove the data from session storage
        sessionStorage.removeItem('selectedFormData');
        // Reset redux and form's initial values
        dispatch(resetFormData())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

export default WelcomingContainer;