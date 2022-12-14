import { useState } from "react";

const History = (props) => {
  // conditional rendering
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => {
 return (
 <button onClick={onClick}>
    {text}
  </button>
 )
}

const App = () => {
  
  // Handling arrays
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  // using .concat() - since it returns a new copy of the array,
  // instead of mutating it
  const handleLeftClick = () => { 
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  } 

  return (
    <div>
      {left}      
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
