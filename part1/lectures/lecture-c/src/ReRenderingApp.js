import { useState } from 'react'

const App = () => {
    const [ counter, setCounter ] = useState(0)
        
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)

    // When the state modyfing function setCounter is called,
    // React re-renders the component which means, that the
    // function body gets re-executed.
    
    return (
        <>
        <div>{counter}</div>
        {/* Usually defining event handlers within JSX-templates
        is not a good idea. Here, the value of onClick attribute
        is a variable containing a reference to the function */}
        <button onClick={increaseByOne}>
            plus
        </button>
        <button onClick={setToZero}>
            zero
        </button>
        </>
    )
}

export default App