import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Test from './components/test'

function App() {
  const [startTest, setStartTest] = useState(false)
  const data = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eveniet eos soluta adipisci suscipit recusandae non corporis optio sequi iure tenetur velit animi, sunt officia debitis corrupti qui, ipsum facere!"
  const chars = data.split("")
  const handledData = chars.map((char, i) => {return {char:char, color:"black", id:i}})
   
  return (
    <div className='absolute h-screen w-screen bg-royal-400'>
      <Header />
      {startTest ? <Test data={handledData}/> :  <Main startTest={() => setStartTest(true)}/>
}
    </div>
  )
}

export default App
