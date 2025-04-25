import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: part1, exercise: exercises1 },
    { part: part2, exercise: exercises2 },
    { part: part3, exercise: exercises3 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total exercises={parts.map(item => item.exercise)} />
    </div>
  )
}

export default App
