import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'

export default class YourTeam extends Component 
{
  render()
  {
    return (
      <div className="ui segment inverted olive bot-army">
      <div className="ui four column grid">
        <div className="row bot-army-row">
        {this.props.team.map(player => <PlayerCard player = {player} />)}
        </div>
      </div>
    </div>
    );
  }
 
}