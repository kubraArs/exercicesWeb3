import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'

const App = () =>{
    
    const [counter, setCounter] = useState(0)
    const changeCount = (delta) => setCounter(counter + delta)

   // const increaseByOne = () => setCounter(counter + 1)
//    const setZero = () => setCounter(0)

    console.log('rendering ...', counter)
    return (
    <div>

    <Display counter =  {counter}></Display>
    <Button changeCount={changeCount}
    delta = {1} text= 'plus'/>
 <Button changeCount={changeCount}
    delta = {-counter} text='zero'/>
    </div>

 )
}
export default App