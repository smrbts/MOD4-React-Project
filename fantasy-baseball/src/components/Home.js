import React, {Component}from 'react';
import LeagueTeams from '../containers/LeagueTeams'
import ShowTeam from './ShowTeam'
import Header from './Header'

export default class Home extends Component{

  constructor() {
    super()
    this.state = {
      displayTeam: null
    }
  }

  showTeam = (team) => {
    this.setState({
      displayTeam: team
    })
  }

  deleteTeam = (team) => {
    fetch(`http://localhost:6969/teams/${team.id}`,{
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'auth-token' : localStorage.token
      }
    })
    this.render()
  }

  editTeam = (team) => {
    debugger
  }

  render()
  {
    return (
      <React.Fragment>
        <header>
          <Header logOut={this.props.logOut} />
        </header>
        {this.state.displayTeam === null ? <LeagueTeams players={this.props.players} showTeam={this.showTeam}/>
          : <ShowTeam players={this.props.players} team={this.state.displayTeam} editTeam={this.editTeam} deleteTeam={this.deleteTeam}  />}
      </React.Fragment>
    );
  }

}
