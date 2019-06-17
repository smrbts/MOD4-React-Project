import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import YourTeam from './YourTeam';

export default class PlayerCollection extends Component 
{

  render()
  {
    return (
      <div className= "ui four column grid">
        <YourTeam team = {this.props.team}/>
        <div className= "row">        
        {this.props.openPlayers.map(player => <PlayerCard player = {player}/>)}
        </div>
      </div>
    );
  }
 
}