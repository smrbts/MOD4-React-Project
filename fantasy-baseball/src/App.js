import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'

export default class App extends Component 
{
  constructor()
  {
    super()
    this.state =
    {
      signedIn: false,
      wallet: 1000
    }
  }
  
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
