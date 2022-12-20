import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({ anecdotes, votes, index }) => (
  <>
    <p>{anecdotes[index]}</p>
    <p>has {votes[index]} votes</p>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [randomized, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0, 3: 0,
    4: 0, 5: 0, 6: 0
    })

  function getRandomIndex(length) {
    return Math.floor(Math.random() * length)
  }

  const selectRandom = () => {
    const randomIndex = getRandomIndex(anecdotes.length)
    setSelected(randomIndex)
  }

  const vote = () => {
    const copy = { ...votes }
    copy[randomized] += 1
    setVotes(copy)
  }
 
  function calculateMax() {
    let max = 0
    let most = votes[0]
    Object.entries(votes).forEach(([key, value]) => {
      if (value > max) {
        max = value
        most = key
      }
    })
    return most
  }

  const maxIndex = calculateMax()
  
  return (
    <div>
      <h1> Anecdote of the day </h1>
      <Display anecdotes={anecdotes} votes={votes} index={randomized} />

      <Button handleClick={() => vote()} text="vote" />
      <Button handleClick={() => selectRandom()} text="next anecdote" />

      <h1> Anecdote with most votes </h1>
      <Display anecdotes={anecdotes} votes={votes} index={maxIndex} />
    </div>
  )
}


export default App
