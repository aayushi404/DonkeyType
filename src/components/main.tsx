type MainProp = {
    startTest: () => void
}

const Main = ({startTest}: MainProp) => {
    return (
        <div>
            Main
            <button onClick={() => startTest()}>Start</button>
        </div>
    )
}

export default Main