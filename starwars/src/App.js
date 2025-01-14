import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Person from './Person'
import Next from './Next'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, updatePeople] = useState([])
  const [info, updateInfo] = useState([])
  const [nextAPI, updateNextAPI] = useState('https://swapi.co/api/people')

  useEffect(() => {
    axios
      .get(nextAPI)

      .then(result => {
        // console.log(result)
        updatePeople(result.data.results)
        updateInfo(result.data)
      })

      .catch(error => {
        console.log(error)
      })
  }, [nextAPI])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Next nextAPI={nextAPI} updateNextAPI={updateNextAPI} info={info}/>
      {people.map(person => {
        return <Person name={person.name} birthYear={person.birth_year} />
      })}
    </div>
    
  );
}

export default App;
