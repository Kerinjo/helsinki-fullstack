import axios from "axios";
import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import Display from "./components/Display";

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ selectedCountries, setSelectedCountries] = useState([])
  const [ countryToView, setCountryToView ] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        setSelectedCountries(response.data)
      })
  },[])

  return (
    <div>
      <Filter 
        countries={countries} 
        setSelectedCountries={setSelectedCountries}
        selectedCounties={selectedCountries}
        setCountry={setCountryToView}
      />
      <Display 
        selectedCountries={selectedCountries}
        countryToView={countryToView}
        setCountry={setCountryToView}
       />
    </div>
  );
}

export default App;
