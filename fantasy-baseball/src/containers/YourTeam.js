import React, {Component}from 'react';
import PlayerCard from '../components/PlayerCard'

export default class YourTeam extends Component
{
  vacancy = (playerType) => {
    return (
      <div className="vacant-container">
        <img alt='uh-oh' height='100px' style={{opacity:0.15}} src='https://images.vexels.com/media/users/3/129330/isolated/preview/af374baf0cd41b67b198cd79a13955f9-baseball-player-silhouette-by-vexels.png' />
        <div className="vacant-centered">{playerType}</div>
      </div>
    )
  }

  render()
  {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui seven column grid">
          <div className="row bot-army-row">
            {this.props.team['P'] ? <PlayerCard player = {this.props.team['P']} drafted={true} /> : <div className="ui column">{this.vacancy('Pitcher')}</div>}
            {this.props.team['C'] ? <PlayerCard player = {this.props.team['C']} drafted={true} /> : <div className="ui column">{this.vacancy('Catcher')}</div>}
            {this.props.team['1B'] ? <PlayerCard player = {this.props.team['1B']} drafted={true} /> : <div className="ui column">{this.vacancy('First Base')}</div>}
            {this.props.team['2B'] ? <PlayerCard player = {this.props.team['2B']} drafted={true} /> : <div className="ui column">{this.vacancy('Second Base')}</div>}
            {this.props.team['3B'] ? <PlayerCard player = {this.props.team['3B']} drafted={true} /> : <div className="ui column">{this.vacancy('Third Base')}</div>}
            {this.props.team['SS'] ? <PlayerCard player = {this.props.team['SS']} drafted={true} /> : <div className="ui column">{this.vacancy('Short Stop')}</div>}
            {this.props.team['LF'] ? <PlayerCard player = {this.props.team['LF']} drafted={true} /> : <div className="ui column">{this.vacancy('Left Field')}</div>}
          </div>
        </div>
        <div className="ui seven column grid">
          <div className="row bot-army-row">
            {this.props.team['CF'] ? <PlayerCard player = {this.props.team['CF']} drafted={true} /> : <div className="ui column">{this.vacancy('Center Field')}</div>}
            {this.props.team['RF'] ? <PlayerCard player = {this.props.team['RF']} drafted={true} /> : <div className="ui column">{this.vacancy('Right Field')}</div>}
            {this.props.team['bench'][0] ? <PlayerCard player = {this.props.team['bench'][0]} drafted={true} /> : <div className="ui column">{this.vacancy('Bench')}</div>}
            {this.props.team['bench'][1] ? <PlayerCard player = {this.props.team['bench'][1]} drafted={true} /> : <div className="ui column">{this.vacancy('Bench')}</div>}
            {this.props.team['bench'][2] ? <PlayerCard player = {this.props.team['bench'][2]} drafted={true} /> : <div className="ui column">{this.vacancy('Bench')}</div>}
            {this.props.team['bench'][3] ? <PlayerCard player = {this.props.team['bench'][3]} drafted={true} /> : <div className="ui column">{this.vacancy('Bench')}</div>}
            {this.props.team['bench'][4] ? <PlayerCard player = {this.props.team['bench'][4]} drafted={true} /> : <div className="ui column">{this.vacancy('Bench')}</div>}
          </div>
        </div>
      </div>
    );
  }
}
