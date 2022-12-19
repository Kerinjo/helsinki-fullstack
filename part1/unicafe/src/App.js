import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({ value, text }) => 
  <p>{text}: {value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getFeedback = (setFeedback, state) => 
    setFeedback(state + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => getFeedback(setGood, good)} text="good" />
      <Button handleClick={() => getFeedback(setNeutral, neutral)} text="neutral" />
      <Button handleClick={() => getFeedback(setBad, bad)} text="bad" />

      <h1>statistics</h1>

      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
    </div>
  )
}

export default App