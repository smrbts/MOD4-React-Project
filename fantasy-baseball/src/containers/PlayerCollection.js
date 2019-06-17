import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import YourTeam from './YourTeam';

export default class PlayerCollection extends Component 
{

  render()
  {
    return (
      <div>
        <YourTeam team = {this.props.team}/>
        {this.props.openPlayers.map(player => <PlayerCard player = {player}/>)}
      </div>
    );
  }
 
}