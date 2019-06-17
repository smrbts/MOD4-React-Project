import React, {Component}from 'react';
import './App.css';
import 'typeface-roboto';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'
import SignUp from './components/SignUp'

export default class App extends Component
{
  constructor()
  {
    super()
    this.state =
    {
      players: [],
      teams: [],
      signedIn: false,
      wallet: 1000
    }
  }

  logIn = (e) =>
  {
    e.preventDefault()
    console.log(e.target)
    this.setState(
      {
        signedIn: !this.state.signedIn
      })
  }

  render()
  {
    return (
      <BrowserRouter>
       <div>
         <Switch>
          <Route exact path='/' render={(routeProps) => <WelcomePage {...routeProps}  login={this.login} /> }/>
          <Route path='/sign-up' render={(routeProps) => <SignUp {...routeProps} />} />
          <Route path='/home' render={(routeProps) => <Home {...routeProps} />} />
         </Switch>
       </div>
      </BrowserRouter>
    );
  }

}
