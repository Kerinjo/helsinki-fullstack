const Filter = ({ countries }) => {
  
  const handleInputChange = (event) => {
    event.preventDefault()
    const search_term = event.target.value

    // use either map of forEach for filter

  
  }
  
  return (
    <div>
    find countries <input 
      onChange={handleInputChange}
    />
    </div>
  )
}

export default Filter