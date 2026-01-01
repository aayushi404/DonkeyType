import React, { useEffect, useState } from "react";
import type { dataType, result } from "../types";



type testProp = {
    data: dataType[],
    setResult: (result: result) => void,
    endTest: () => void
}
const Test = ({data, setResult, endTest}: testProp) => {
    const [input, setInput] = useState("")
    const [pointer, setPointer] = useState(0)
    const [text, setText] = useState<dataType[]>(data)
    const [startTimer, setStartTimer] = useState(true)

    useEffect(() => {
        let start = 0;
        if (startTimer){
            start = new Date().getTime()
        }else if (!startTimer) {
            const elapsedTime = new Date().getTime() - start
            const wrong_words = text.filter(data => data.status === "wrong")
            const finalResult = {
                "time": elapsedTime,
                "accuracy": 1 - (wrong_words.length / data.length),
                "wrong_words": wrong_words
            }
            setResult(finalResult)
            endTest()
        }
    },[startTimer])

    function inputHandler(e:React.ChangeEvent<HTMLTextAreaElement>){
        e.preventDefault()
        const val = e.target.value
        if (pointer === data.length){
            setStartTimer(false)
            return
        }
        if(val.length === pointer + 1){
            if(val.slice(pointer) !== text[pointer].char) {
                setText(prev => {
                    const newText = prev.map((data) => data.id === pointer ? {...data,  status: "wrong",} : data)
                    console.log(newText[pointer]) 
                    return [...newText]
                })
                //setInput(val.slice(0, -1) + '\u00A0')
                setInput(val.slice(0, -1) + text[pointer].char)
            }else{
                setText(prev => {
                    const newText = prev.map((data) => data.id === pointer ? {...data, status:"done"} : data)
                    return newText
                })
                setInput(val)
            }
            setPointer(pointer + 1)           
        }
        else{
            setText(prev => {
                const newText = prev.map((data) => data.id === pointer-1 ? {char:data.char, status: null, id: data.id} : data)
                return newText
            })
            setPointer(pointer-1)
            setInput(val)
        }
    }
    return (
        <div className="m-auto max-w-350">
            <div className="ralative translate-y-50">
                <div className="z-0 absolute top-0 max-w-350 p-5 text-3xl font-quicksand font-extrabold opacity-80">
                    {text.map((char, idx) => 
                    <span className={char.status === "wrong" ? 
                    "text-royal-200 underline" : char.status === "done" ? "text-royal-300" :
                    "text-royal-100"} 
                    key={idx}>
                        {char.char}
                    </span>)}
                </div>
                <div className="absolute top-0 z-100 h-70 max-w-350 w-full">
                    <textarea className="h-full w-full p-5 text-3xl font-quicksand font-extrabold hover:outline-0 text-royal-300 outline-none opacity-0" value={input} onChange={(e) => inputHandler(e)} autoFocus/>
                </div>
            </div>
        </div>
    )
}

export default Test;