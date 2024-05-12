
const VideoTitle = ({ title, overview }) => {

    return (
        <div className="w-screen aspect-video pt-80 pl-10 absolute bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold text-white">{title}</h1>
            <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
            <div className="py-2">
                <button className="bg-white text-black p-3 px-8 rounded-md bg-opacity-15 font-bold mx-3">Play</button>
                <button  className="bg-gray-500 text-white p-3 px-8 rounded-md bg-opacity-15 font-bold mx-3">MoreInfo</button>
            </div>
        </div>
    )
}

export default VideoTitle