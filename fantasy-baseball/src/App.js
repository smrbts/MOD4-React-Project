import React, {Component}from 'react';
import 'typeface-roboto';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'
import SignUp from './components/SignUp'
import YourTeam from './containers/YourTeam';
import PlayerCollection from './containers/PlayerCollection'


const PlayerURL = `http://localhost:6969/players`
const StatURL = `http://localhost:6969/stats/`

export default class App extends Component 
{
  constructor()
  {
    super()
    this.state =
    {
      players: [],
      openPlayers: [],
      team: [],
      hasTeam: false,
      signedIn: false,
      isLoaded: false,
      wallet: 1000
    }
  }

  checkForTeam = () => 
  {
    console.log('clicked')
    if(this.state.team.length !== 0) 
    {
      return <YourTeam/>
    }
    return <PlayerCollection/>
  }

  logIn = () => 
  {
    this.setState(
      {
        signedIn: !this.state.signedIn
      })
  }

  addPlayer = () => 
  {
    
  }

  shufflePlayers= () => 
  {
    let arr = this.state.players
    let shuffled = arr.sort(() => 0.5 - Math.random())
    let list = shuffled.slice(0,100)
    this.setState(
      {
        openPlayers: list
      })
    
  }

  componentDidMount()
  {
    fetch(PlayerURL)
    .then(res => res.json())
    .then(data => 
      {
        this.setState(
          {
            players: data,
            isLoaded: true
          })
          this.shufflePlayers(this.state.openPlayers)
      })
  }

  render()
  {
    return (
      <BrowserRouter>
       <div>
         <Switch>
          <Route exact path='/' render={(routeProps) => <WelcomePage {...routeProps} logIn = {this.logIn} signedIn = {this.state.signedIn}/> }/>
          <Route exact path='/sign-up' render={(routeProps) => <SignUp {...routeProps} />} />
          <Route exact path='/home' render={(routeProps) => <Home {...routeProps} checkForTeam = {this.checkForTeam} players= {this.state.players} signedIn = {this.state.signedIn} />} />
          <Route exact path='/my-team' render={(routeProps) => <YourTeam {...routeProps} />} />
          {this.state.isLoaded ? <Route exact path='/create-team' render={(routeProps) => <PlayerCollection {...routeProps} team = {this.state.team} players = {this.state.players} openPlayers= {this.state.openPlayers} />} />: null}
         </Switch>
       </div>
      </BrowserRouter>
    );
  }
 
}
