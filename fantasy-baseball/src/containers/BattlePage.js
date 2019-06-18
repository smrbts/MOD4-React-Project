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
                <div className="ui segment tertiary inverted blue bot-army">
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
        </div>
            <div className="ui divider"> 
                <div className="ui segment tertiary inverted red bot-army">
                            ENEMY TEAM
                        <div className="ui twelve column centered stackable grid">
                            {this.props.opponentPlayers.map(player => <OtherTeam player= {player}/>)}   
                        </div>
                </div>
            </div>
        </div>
         

    );
  }
 
}