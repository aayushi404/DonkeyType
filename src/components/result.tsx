import type { dataType, result } from "../types"

const Result = ({result, data}: {result: result, data: dataType[]}) => {
    return (
        <div>
            <div>wpm: <span>{data.length / (result.time / 60000)}</span></div>
            <div>time: <span>{result.time / 60000}min</span></div>
            <div>accuracy: <span>{result.accuracy}%</span></div>
        </div>
    )
}

export default Result