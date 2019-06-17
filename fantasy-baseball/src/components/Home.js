import React, {Component}from 'react';
import LeagueTeams from '../containers/LeagueTeams'

export default class Home extends Component 
{
  render()
  {
    return (
      <LeagueTeams players= {this.props.players} signedIn = {this.props.signedIn} />
    ); 
  }
 
}