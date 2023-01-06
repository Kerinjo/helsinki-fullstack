const PersonForm = ({addNote, newName, newPhoneNumber, setNewName, setNewPhoneNumber}) => {

   const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const handlePhoneNumberChange = (event) => {
      setNewPhoneNumber(event.target.value)
    }
  

  return (
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

  )
}

export default PersonForm