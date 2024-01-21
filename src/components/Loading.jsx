

const Loading = () => {
    return (
        <>
            <div className="flex bg-black font-bold text-white rounded-full w-52 h-52 flex-col items-center justify-center">
                <h3 className="text-3xl">Yükleniyor</h3>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    );
};

export default Loading;
