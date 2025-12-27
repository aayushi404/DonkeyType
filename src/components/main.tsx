type MainProp = {
    startTest: () => void
}

const Main = ({startTest}: MainProp) => {
    return (
        <div className="flex justify-center items-center">
            <button onClick={() => startTest()} className="bg-royal-300 p-2 text-2xl font-bold font-jetbrains_mono cursor-pointer">Start</button>
        </div>
    )
}

export default Main