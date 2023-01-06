import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  
  const [peopleList, setPeopleList] = useState([ ...persons ])
  const addNote = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newPhoneNumber
    }

    // check equality
    let equality = false
    persons.forEach(person => {
      if (JSON.stringify(person) === JSON.stringify(newPerson)) {
        equality = true 
      }
    })

    if (equality) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setPeopleList(peopleList.concat(newPerson))
      setNewName('')
      setNewPhoneNumber('')
      console.log(peopleList)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleSearchTermChange = (event) => {

    console.log(event.target.value === '')
    const searchTerm = event.target.value
    if (searchTerm !== '') {
      let matches = []    
      persons.forEach(person => {
        if (person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          matches = matches.concat(person)
        }
      })
      setPersons(matches)
    } 
    else
      setPersons(peopleList)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input
            onChange={handleSearchTermChange}
          />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newPhoneNumber}
            onChange={handlePhoneNumberChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} - {person.number}</li>
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App