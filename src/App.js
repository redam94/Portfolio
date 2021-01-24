import React from 'react';
import {Navbar} from './client/components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import "./App.css";
import {
  Home,
  Projects,
  About, 
  CVD,
  NotFound,
  DRP,
  IMDB
} from './client/pages';

function App() {
  return (
    <main className="
        w-full 
        h-full 
        bg-gray-100
        ">
    <Router>
      
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/projects'>
            <Projects/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/projects/cat_or_dog_classifier'>
            <CVD />
          </Route>
          <Route exact path='/projects/disaster_response_pipeline'>
            <DRP/>
          </Route>
          <Route exact path='/projects/imdb_project'>
            <IMDB/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
    </Router>
    </main>
  );
}

export default App;
