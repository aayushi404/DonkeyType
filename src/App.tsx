import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Test from './components/test'
import type { dataType, result } from './types'
import Result from './components/result'


function App() {
  const [startTest, setStartTest] = useState(false)
  const [result, setResult] = useState<result |  null>()
  console.log(result)
  const data = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eveniet eos soluta adipisci suscipit recusandae non corporis optio sequi iure tenetur velit animi, sunt officia debitis corrupti qui, ipsum facere!"
  const chars = data.split("")
  const handledData:dataType[] = chars.map((char, i) => {return {char:char, status: null, id:i}})
   
  return (
    <div className='absolute h-screen w-screen bg-royal-400'>
      <Header />
      {startTest ? <Test data={handledData} setResult={(result:result) => setResult(result)} endTest={() => setStartTest(false)}/> :  <Main startTest={() => {
        setStartTest(true)
        setResult(null)
        }}/>}
      {result ? <Result result={result} data={handledData}/> : null}
    </div>
  )
}

export default App
