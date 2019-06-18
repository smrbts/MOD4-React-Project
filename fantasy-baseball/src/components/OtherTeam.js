import React, {Component}from 'react';
import PlayerStats from './PlayerStats'

export default class OtherTeam extends Component 
{
  state = 
  {
    clicked: false
  }

  handleStatsClick = () => 
  {
    this.setState(
      {
        clicked: !this.state.clicked
      })
  }

  render(props)
  {
    
    return (
      <div className="ui column">
        <div className="ui card" key={this.props.player.id}>
          <div className="image">
            <img alt="oh no!" src={`https://securea.mlb.com/mlb/images/players/head_shot/${this.props.player.id}@2x.jpg`} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.player.name_display_first_last} 
            </div>
            <div className="meta text-wrap">
              <small>{this.props.player.team_name}</small>
            </div>
            <span>
              <i className="icon heartbeat" />
              {this.props.player.primary_position_txt}
            </span>
            <span>
              <i className="icon lightning" />
              Age:{this.props.player.age}
            </span>
            <span>
              <i className="icon shield" />
              {this.props.player.primary_stat_type}
            </span>
          </div>
          <div className="extra content">
          {this.state.clicked ? <PlayerStats player={this.props.player}/> : null}
            <button 
                className="ui button fluid"
                onClick={this.handleStatsClick}
                >
                {this.state.clicked? "Less Info": "Show Stats"}
            </button>
          </div>
        </div>
      </div>
    );
  }
 
}