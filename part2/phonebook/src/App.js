import { useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  
  const [peopleList, setPeopleList] = useState([ ...persons ])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


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
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setPeopleList(peopleList.concat(response.data))             
        })
      setNewName('')
      setNewPhoneNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setPersons={setPersons} peopleList={peopleList} />

      <h3>Add a new</h3>

      <PersonForm
        addNote={addNote}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        setNewName={setNewName}
        setNewPhoneNumber={setNewPhoneNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} /> 

    </div>
  )
}

export default App