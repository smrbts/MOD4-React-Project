import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import OtherTeam from '../components/OtherTeam'
import Button from '@material-ui/core/Button';
import YourTeam from './YourTeam';

export default class BattlePage extends Component 
{
  render()
  {
    return (
        <div className="ui segment">
         <Button
           href='/home'
           justify="center"
           variant="contained" 
           color="primary"
           >
           Return Home  
         </Button><br></br>
            YOUR TEAM
            <div className="ui twelve column centered stackable grid">
                {this.props.opponentPlayers.map(player => <OtherTeam player= {player}/>)} 
            </div>
        <div className="ui divider"> 
            ENEMY TEAM
        </div>
            <div className="ui twelve column centered stackable grid">
                {this.props.opponentPlayers.map(player => <OtherTeam player= {player}/>)}   
            </div>
        </div>
    );
  }
 
}