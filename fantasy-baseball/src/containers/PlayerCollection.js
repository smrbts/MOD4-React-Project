import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import YourTeam from './YourTeam';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PlayerURL = `http://localhost:6969/players`

export default class PlayerCollection extends Component{
  constructor() {
    super()
    this.state = {
      team : {
        'P': null,
        'C': null,
        '1B': null,
        '2B': null,
        '3B': null,
        'SS': null,
        'LF': null,
        'CF': null,
        'RF': null,
        'bench': []
      },
      openPlayers: [],
      isLoaded: false
    }
  }

  addPlayer = (player) =>
  {
    if (player.primary_position_txt !== 'DH' && this.state.team[player.primary_position_txt] === null) {
      this.setState(
        {
          team: {
            ...this.state.team,
            [player.primary_position_txt]: player
          },
          openPlayers: this.state.openPlayers.filter(p => player.id !== p.id)
        })
    }
    else if (this.state.team.bench.length < 5) {
      let newBench = [...this.state.team.bench, player]
      this.setState(
        {
          team: {
            ...this.state.team,
            bench: newBench
          },
          openPlayers: this.state.openPlayers.filter(p => player.id !== p.id)
        })
    }
    else {
      let newBench = [...this.state.team.bench.slice(1,5), player]
      let openPlayers = this.state.openPlayers.filter(p => player.id !== p.id)
      this.setState(
        {
          team: {
            ...this.state.team,
            bench: newBench
          },
          openPlayers: [...openPlayers,this.state.team.bench[0] ]
        })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let teamObj = {
      leagueId: 1,
      teamName: document.querySelector("#team-name").value,
      imgURL: document.querySelector("#image-url").value,
      pitcher: this.state.team['P'] ? this.state.team['P'].id : null,
      catcher: this.state.team['C'] ? this.state.team['C'].id : null,
      firstBase: this.state.team['1B'] ? this.state.team['1B'].id : null,
      secondBase: this.state.team['2B'] ? this.state.team['2B'].id : null,
      thirdBase: this.state.team['3B'] ? this.state.team['3B'].id : null,
      shortStop: this.state.team['SS'] ? this.state.team['SS'].id : null,
      leftField: this.state.team['LF'] ? this.state.team['LF'].id : null,
      centerField: this.state.team['CF'] ? this.state.team['CF'].id : null,
      rightField: this.state.team['RF'] ? this.state.team['RF'].id : null,
      bench0: this.state.team['bench'][0] ? this.state.team['bench'][0].id : null,
      bench1: this.state.team['bench'][1] ? this.state.team['bench'][1].id : null,
      bench2: this.state.team['bench'][2] ? this.state.team['bench'][2].id : null,
      bench3: this.state.team['bench'][3] ? this.state.team['bench'][3].id : null,
      bench4: this.state.team['bench'][4] ? this.state.team['bench'][4].id : null
    }
    console.log(teamObj)
    fetch('http://localhost:6969/teams', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token' : localStorage.token
      },
      body: JSON.stringify(teamObj)
    })
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
      })
      window.location.href = 'http://localhost:3000/home'
  }

  componentDidMount()
  {
    fetch(PlayerURL)
    .then(res => res.json())
    .then(data =>
      {
        this.setState(
          {
            openPlayers: data.sort(() => 0.5 - Math.random()).slice(0,200),
            isLoaded: true
          })
      })
  }

  render()
  {
    return (
      <div className= "row">
      <form>
        <TextField
          // defaultValue='A Really Cool Team Name'
          variant="outlined"
          margin="normal"
          fullWidth
          id="team-name"
          label="Team Name"
          name="team-name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="image-url"
          label="Team Image URL"
          name="image-name"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={e=>this.handleSubmit(e)}
          href= '/home'>
            Create Team
        </Button>
      </form>
      <YourTeam team = {this.state.team}/>
      <div className= "ui four column grid">
        <div className= "row">
        {this.state.openPlayers.map(player => <PlayerCard player = {player} addPlayer={this.addPlayer} />)}
        </div>
      </div>
      </div>

    );
  }

}
