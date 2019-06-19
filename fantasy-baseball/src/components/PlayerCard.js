import React, {Component}from "react";
import 'semantic-ui-css/semantic.min.css'
import PlayerStats from './PlayerStats'


class PlayerCard extends Component
{
  state =
  {
    clicked: false,
    drafted: this.props.drafted ? true : false
  }

  handleStatsClick = () =>
  {
    this.setState(
      {
        clicked: !this.state.clicked
      })
  }
  render()
  {
    return (
      <div className="ui column">
        <div className="ui card"
          key={this.props.player.id}
        >
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
              {this.state.clicked ? <PlayerStats player={this.props.player}/> : null}
              <button
                  className="ui button fluid"
                  onClick={this.handleStatsClick}
                  >
                  {this.state.clicked? "Less Info": "Show Stats"}
              </button>
          </div>
          {this.state.drafted ? null :
          <div className="extra content">
              <button
                className="ui button fluid"
                onClick={() => this.props.addPlayer(this.props.player)}
                >
                Draft
              </button>
          </div>}
        </div>
      </div>
    );



  }



};

export default PlayerCard;
