import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ value, text }) => 
  <tbody>
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  </tbody>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1)) / total
  const positive = (good / total) * 100

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={total} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive + " %"} />
    </table>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
