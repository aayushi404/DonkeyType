import React, { useState } from "react";

const Test = ({data}:{data:{char:string, color:string, id:number}[]}) => {
    const [input, setInput] = useState("")
    const [pointer, setPointer] = useState(0)
    const [text, setText] = useState<{char:string, color:string, id:number}[]>(data)
    function inputHander(e:React.ChangeEvent<HTMLTextAreaElement>){
        const val = e.target.value
        if(val.length === pointer + 1){
            if(val.slice(pointer) !== text[pointer].char) {
                console.log(val)
                console.log(pointer)
                setText(prev => {
                    const newText = prev.map((data) => data.id === pointer ? {char:data.char, color:"red", id: data.id} : data)
                    console.log(newText[pointer]) 
                    return [...newText]
                })
                setInput(val.slice(0, -1) + '\u00A0')
            }else{
                setInput(val)
            }
            setPointer(pointer + 1)           
        }
        else{
            setText(prev => {
                const newText = prev.map((data) => data.id === pointer-1 ? {char:data.char, color:"black", id: data.id} : data)
                return newText
            })
            setPointer(pointer-1)
            setInput(val)
        }
    }
    return (
        <div className="m-auto max-w-350">
            <div className="ralative translate-y-50">
                <div className="z-0 absolute top-0 max-w-350 p-5 text-3xl font-quicksand font-extrabold opacity-50">
                    {text.map((char, idx) => <span className={char.color === "red" ? "text-red-400": "text-neutral-500"} key={idx}>{char.char}</span>)}
                </div>
                <div className="absolute top-0 z-100 border h-70 max-w-350 w-full">
                    <textarea className="h-full w-full p-5 text-3xl font-quicksand font-extrabold" value={input} onChange={(e) => inputHander(e)}/>
                </div>
            </div>
        </div>
    )
}

export default Test;