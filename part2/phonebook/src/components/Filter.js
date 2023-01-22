const Filter = ({setPersons, peopleList}) => {

    const handleSearchTermChange = (event) => {
        setPersons(peopleList)
        
        const searchTerm = event.target.value
        if (searchTerm !== '') {
          let matches = []    
          peopleList.forEach(person => {
            if (person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              matches = matches.concat(person)
            }
          })
          setPersons(matches)
        } 
      }

    return (
        <div>
          filter shown with <input
            onChange={handleSearchTermChange}
          />
        </div>
    )
}

export default Filter
