
import React from 'react';
//header takes care of rendering the name of course
const Header = (props) => {
  return (
    <div>
      <p> Name Course : {props.course} </p>
    </div>
  )
}

//Content renders the parts and their number of exerices
const Content = (props) => {
  return (
    <div>
      <p> part : {props.part} number : {props.number}</p>

    </div>
  )
}
//Total renders the total number of exercices
const Total = (props) => {
  return (
    <div>
      <p> Number of exercices {props.numberEx}</p>

    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course ={course}/>

      <Content part = {part1} number = {exercises1}/>
      <Content part = {part2} number = {exercises2}/>
      <Content part = {part3} number = {exercises3}/>
      
      <Total numberEx = {exercises1} />
      <Total numberEx = {exercises2}/>
      <Total numberEx = {exercises3}/>

    </div>
  )
}

export default App