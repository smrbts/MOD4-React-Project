import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import YourTeam from './YourTeam';

export default class PlayerCollection extends Component 
{

  render()
  {
    return (
      <div className= "row"> 
      <YourTeam team = {this.props.team}/>
      <div className= "ui four column grid">
        <div className= "row">        
        {this.props.openPlayers.map(player => <PlayerCard player = {player} addPlayer={this.props.addPlayer} team = {this.props.team}/>)}
        </div>
      </div>
      </div>
      
    );
  }
 
}