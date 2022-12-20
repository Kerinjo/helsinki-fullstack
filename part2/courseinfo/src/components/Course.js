const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>

const Total = ({ parts }) => {
  const exercises_array = parts.map(part => part.exercises)
  const sum =
    exercises_array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
      
  return (
    <p><b>total of {sum} exercises</b></p>
  )
}
const Course = ({ course }) => 
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </div>

export default Course
