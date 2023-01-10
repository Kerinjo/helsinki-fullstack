const Display = ({ countries }) => {
  return (
    countries.map(country => 
      <p key={country.cca2}>{country.name.common}</p>  
    )
  )
}

export default Display