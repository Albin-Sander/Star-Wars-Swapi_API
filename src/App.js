import React, { useEffect, useState } from "react"
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import Characters from './components/Characters'
import Planets from './components/Planets'


function App() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchCharacters()
    fetchPlanets()
  }, [])
  console.log('characters', characters)
  console.log('planets', planets)

  return (
    <div className="App">
      <Router>
      <Nav/>
      <Container>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/characters'>
            <Characters data={characters}/>
          </Route>
          <Route exact path='/planets'>
            <Planets data={planets}/>
          </Route>
        </Switch>
      </Container>
      </Router>
    </div>
  )
}

export default App
