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
      currentUser: null,
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

  logIn = (e) =>
  {
    e.preventDefault()
    let userObj = {
      username: document.querySelector('#username').value,
      password: document.querySelector('#password').value
    }
    fetch('http://localhost:6969/auth',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.msg) {
        console.log(data.msg)
      }
      else {
        localStorage.token = data.token
        this.setState({
          currentUser: data.user.userId
        })
        window.location.href = 'http://localhost:3000/home'
      }
    })
  }

  signUp = (e) =>
  {
    e.preventDefault()
    let userObj = {
      username: document.querySelector('#username').value,
      password: document.querySelector('#password').value
    }
    fetch('http://localhost:6969/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>{
      localStorage.token = data.token
      this.setState({
        currentUser: data.user.userId
      })
      window.location.href = 'http://localhost:3000/home'
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

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      currentUser: null
    })
    localStorage.token = null
    window.location.href = 'http://localhost:3000/'
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
           <Route exact path='/sign-up' render={(routeProps) => <SignUp {...routeProps} signUp = {this.signUp}/>} />
           <Route exact path='/home' render={(routeProps) => <Home {...routeProps} checkForTeam = {this.checkForTeam} players= {this.state.players} signedIn = {this.state.signedIn} logOut={this.logOut}/>} />
           <Route exact path='/my-team' render={(routeProps) => <YourTeam {...routeProps} />} />
          </Switch>
       </div>
      </BrowserRouter>
    );
  }

}
