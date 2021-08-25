import React, {lazy, Suspense} from 'react';
import {Navbar} from './client/components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import "./App.css";

const Home = lazy( () => import('./client/pages/HomePage/Home'))
const Projects = lazy( () => import('./client/pages/ProjectsPage/Projects'))
const About = lazy( () => import('./client/pages/AboutPage/About'))
const CVD = lazy( () => import('./client/pages/CvDPage/CvD'))
const NotFound = lazy( () => import('./client/pages/NotFound'))
const DRP = lazy( () => import('./client/pages/DRPPage/DRP'))
const IMDB = lazy( () => import('./client/pages/IMDBPage/IMDB'))
const Dog = lazy( () => import('./client/pages/DogPage/Dog'))

function App() {
  return (
    <main className=" 
        bg-gray-100
        p-0
        m-0
        ">
    <Router>
      
        <Navbar/>
        <Suspense fallback={<div>loading</div>}>
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
          <Route exact path='/projects/dog_breed_classifier'>
            <Dog/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
        </Suspense>
    </Router>
    </main>
  );
}

export default App;
