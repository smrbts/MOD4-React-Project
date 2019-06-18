import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import Button from '@material-ui/core/Button';

export default class YourTeam extends Component 
{
  render()
  {
    return (
      <div className="ui segment inverted olive bot-army">
         <Button
         href='/home'
         justify="center"
         variant="contained" 
         color="primary"
         >
         Return Home  
         </Button>
      <div className="ui four column grid">
        <div className="row bot-army-row">
        {this.props.team.map(player => <PlayerCard player = {player} />)}
        </div>
      </div>
    </div>
    );
  }
 
}