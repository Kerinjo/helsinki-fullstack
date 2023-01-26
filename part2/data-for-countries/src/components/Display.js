import { useState } from "react"

const Country = ({ country, toggleView }) => {
  // console.log(country.cca2)
  return (
    <li>
      {country.name.common}
      <button onClick={toggleView}>show</button>
    </li>
  )
} 

const Display = ({ selectedCountries, countryToView, setCountry }) => {
  const toggleCountryView = (country) => {
    console.log('View of ' + country.name.common + ' needs to be toggled.')
    setCountry(country)
  }

  if (countryToView !== ''){
    return (
      <div>
        <h2>{countryToView.name.common}</h2>
      </div>
    )
  }

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
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={flag} alt="flag"/>
      </div>
    )
  }
  else {
    return (
      selectedCountries.map(country => 
        <Country
          key={country.cca2}
          country={country}
          toggleView={() => toggleCountryView(country)}
        />  
      )
    )      
  }
}

export default Display