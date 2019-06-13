import React, {Component}from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'

export default class App extends Component 
{
  render()
  {
    return (
      <BrowserRouter>
       <div>
         <Switch>
          <Route exact path='/' render={(routeProps) => <WelcomePage {...routeProps} /> }/>
          <Route path='/home' render={(routeProps) => <Home {...routeProps} />} />
         </Switch>
       </div>
      </BrowserRouter>
    );
  }
 
}
