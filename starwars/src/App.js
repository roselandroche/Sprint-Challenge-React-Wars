import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Person1 from './Person1';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, updateData] = useState([])

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')

      .then(result => {
        console.log(result.data.results)
        updateData(result.data.results)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])
  // console.log()
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Person1 name={data.name}/>
    </div>
  );
}

export default App;
