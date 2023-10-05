import { useState } from 'react'

const Display = ({counter}) => {
  return <div> {counter}</div>
}

const Button = ({handleClick, text}) =>{
  return  <button onClick={handleClick}> {text}</button>
}

  const App = () =>{
    const zero = "zero"
    const plus = "plus"

    const [counter, setCounter] = useState(0)
    const increaseByOne = () => setCounter(counter + 1)
    const setZero = () => setCounter(0)

    console.log('rendering ...', counter)
    return (
    <div>

    <Display counter =  {counter}></Display>
    <Button handleClick={increaseByOne} text={plus}/>
    <Button handleClick={setZero} text={zero}/>

    </div>

 )
}
export default App