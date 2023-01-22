import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './sevices/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  
  const [peopleList, setPeopleList] = useState([ ...persons ])
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialList => {
        setPersons(initialList)
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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setPeopleList(peopleList.concat(returnedPerson))                      
        })
      setNewName('')
      setNewPhoneNumber('')
    }
  }

  const deleteEntry = (id) => {
    const person = persons.find(p => p.id === id) 
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.
        deleteUser(id)
        .then(
          setPersons(persons.filter(p => p.id !== id))
        )
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
      <ul>
        {persons.map(person =>
          <Persons key={person.id} person={person} deleteEntry={() => deleteEntry(person.id)} /> 
        )}
      </ul>

    </div>
  )
}

export default App
