import React, {Component}from 'react';

export default class OtherTeam extends Component
{
  render(props)
  {

    return (
      <div className="ui column">
        <div className="ui card"
          key={props.player.id}
          // onClick={() => props.showInfo ? props.showInfo(props.bot): props.removeBot(props.bot)}
          // (event) => {props.showInfo(event.target.value)}
          // props.recruitBot? props.recruitBot(props.bot) : props.removeBot(props.bot) move this to the BotSpec show page
        >
          <div className="image">
            <img alt="oh no!" src={`https://securea.mlb.com/mlb/images/players/head_shot/${props.player.id}@2x.jpg`} />
          </div>
          <div className="content">
            <div className="header">
              {props.player.name_display_first_last}
            </div>
            <div className="meta text-wrap">
              <small>{props.player.team_name}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {props.player.primary_position_txt}
            </span>
            <span>
              <i className="icon lightning" />
              Age:{props.player.age}
            </span>
            <span>
              <i className="icon shield" />
              {props.player.primary_stat_type}
            </span>
          </div>
        </div>
      </div>
    );
  }

}
