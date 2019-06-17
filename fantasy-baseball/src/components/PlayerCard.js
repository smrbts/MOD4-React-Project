import React from "react";
import 'semantic-ui-css/semantic.min.css'


const PlayerCard = props => 
{
  let {player} = props;
  return (
    <div className="ui four column grid">
      <div className="ui card"
        key={player.id}
        // onClick={() => props.showInfo ? props.showInfo(props.bot): props.removeBot(props.bot)}
        // (event) => {props.showInfo(event.target.value)}
        // props.recruitBot? props.recruitBot(props.bot) : props.removeBot(props.bot) move this to the BotSpec show page
      >
        <div className="image">
          <img alt="oh no!" src={`https://securea.mlb.com/mlb/images/players/head_shot/${player.id}@2x.jpg`} />
        </div>
        <div className="content">
          <div className="header">
            {player.name_display_first_last} 
          </div>
          <div className="meta text-wrap">
            <small>{player.team_name}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {player.primary_position_txt}
          </span>
          <span>
            <i className="icon lightning" />
            {player.age}
          </span>
          <span>
            <i className="icon shield" />
            {player.primary_stat_type}
          </span>
          <span>
            <i className="icon shield" />
            {}
          </span>
          <span>
            <i className="icon shield" />
            {}
          </span>
        </div>
      </div>
    </div>
  );

};

export default PlayerCard;