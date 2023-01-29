import axios from "axios"
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

  const [weatherData, setWeatherData] = useState([]) 

  const toggleCountryView = (country) => {
    setCountry(country)
  }

  if (countryToView !== ''){

    const apiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${countryToView.capital}&appid=${apiKey}`  
    
    let temp, wind
    
    axios.get(apiUrl)
      .then(response => {
        temp = response.data.main.temp
        wind = response.data.wind.speed
        console.log(`temp: ${temp}, wind: ${wind}`)
      })

    return (
      <div>
        <h2>{countryToView.name.common}</h2>
        <p>capital {countryToView.capital}</p>
        <p>area {countryToView.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(countryToView.languages).map(language =>
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={countryToView.flags.png} alt="flag"></img>
        <p>temp: {temp}</p>
        <p>wind: {wind}</p>
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
