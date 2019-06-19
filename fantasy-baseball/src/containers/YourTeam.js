import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'
import Button from '@material-ui/core/Button';

export default class YourTeam extends Component
{

  render()
  {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui seven column grid">
          <div className="row bot-army-row">
            {this.props.team['P'] ? <PlayerCard player = {this.props.team['P']} /> : <div className="ui column">Draft a Pitcher</div>}
            {this.props.team['C'] ? <PlayerCard player = {this.props.team['C']} /> : <div className="ui column">Draft a Catcher</div>}
            {this.props.team['1B'] ? <PlayerCard player = {this.props.team['1B']} /> : <div className="ui column">Draft a First Baseman</div>}
            {this.props.team['2B'] ? <PlayerCard player = {this.props.team['2B']} /> : <div className="ui column">Draft a Second Baseman</div>}
            {this.props.team['3B'] ? <PlayerCard player = {this.props.team['3B']} /> : <div className="ui column">Draft a Third Baseman</div>}
            {this.props.team['SS'] ? <PlayerCard player = {this.props.team['SS']} /> : <div className="ui column">Draft a Shortstop</div>}
            {this.props.team['LF'] ? <PlayerCard player = {this.props.team['LF']} /> : <div className="ui column">Draft a Left Fielder</div>}
          </div>
        </div>
        <div className="ui seven column grid">
          <div className="row bot-army-row">
            {this.props.team['CF'] ? <PlayerCard player = {this.props.team['CF']} /> : <div className="ui column">Draft a Center Fielder</div>}
            {this.props.team['RF'] ? <PlayerCard player = {this.props.team['RF']} /> : <div className="ui column">Draft a Right Fielder</div>}
            {this.props.team['bench'][0] ? <PlayerCard player = {this.props.team['bench'][0]} /> : <div className="ui column">Free Bench Space</div>}
            {this.props.team['bench'][1] ? <PlayerCard player = {this.props.team['bench'][1]} /> : <div className="ui column">Free Bench Space</div>}
            {this.props.team['bench'][2] ? <PlayerCard player = {this.props.team['bench'][2]} /> : <div className="ui column">Free Bench Space</div>}
            {this.props.team['bench'][3] ? <PlayerCard player = {this.props.team['bench'][3]} /> : <div className="ui column">Free Bench Space</div>}
            {this.props.team['bench'][4] ? <PlayerCard player = {this.props.team['bench'][4]} /> : <div className="ui column">Free Bench Space</div>}
          </div>
        </div>
      </div>
    );
  }
}
