const Persons = ({ person, deleteEntry }) => (
  <li>
    {person.name} - {person.number}
    <button onClick={deleteEntry}>delete</button>
  </li>
)

export default Persons
