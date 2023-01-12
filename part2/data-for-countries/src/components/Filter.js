const Filter = ({ countries, setSelectedCountries, selectedCountries }) => {
  
  const handleInputChange = (event) => {
    event.preventDefault()
    const search_term = event.target.value

    const filtered_countries = countries.filter((country) => (
      country.name.common.toLowerCase()
        .includes(search_term.toLowerCase())
    ))

    setSelectedCountries(filtered_countries)
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