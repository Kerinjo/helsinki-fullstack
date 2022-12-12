import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>
  
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)
    
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  // When the state modyfing function setCounter is called,
  // React re-renders the component which means, that the
  // function body gets re-executed.
  
  return (
    <>
    <Display counter={counter} />
    <Button 
      onClick={increaseByOne}
      text={'plus'}
    />
    <Button 
      onClick={decreaseByOne}
      text={'minus'}
    />
    <Button
      onClick={setToZero}
      text={'zero'}
    />
    </>
  )
}

export default App