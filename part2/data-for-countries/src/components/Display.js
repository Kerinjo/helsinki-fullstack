
const Display = ({ selectedCountries }) => {

  if (selectedCountries.length > 10 && selectedCountries.length < 250) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
  else if (selectedCountries.length === 1) {
    const country = selectedCountries[0]
    const languages = country.languages
    const flag = country.flags.png

    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(languages).map(language =>
            <li>{language}</li>
          )}
        </ul>
        <img src={flag} alt="flag"/>
      </div>
    )
  }
  else {
    return (
      selectedCountries.map(country => 
        <p key={country.cca2}>{country.name.common}</p>  
      )
    )      
  }
}

export default Display