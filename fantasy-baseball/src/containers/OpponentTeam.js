import React, {Component}from 'react';
import OtherTeam from '../components/OtherTeam'



export default class OpponentTeam extends Component 
{

  render()
  {
    return (
      <div>
      <h2 className="ui header">
        <img alt="oh no!" className="ui avatar image" src="https://source.unsplash.com/random"/>
          <span>Enemy Team!</span>
      </h2>
      <div className= "ui four column grid">
        <div className= "row">        
        {this.props.opponentPlayers.map(player => <OtherTeam player= {player}/>)}
        </div>
      </div>
      </div>
      
    );
  }
 
}