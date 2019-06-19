import React, {Component}from 'react';


export default class PlayerStats extends Component
{
  state =
  {
    stats: [],
    isLoading: true
  }

  componentDidMount()
  {
    const StatURL = `http://localhost:6969/stats/${this.props.player.id}`
    fetch(StatURL)
    .then(res => res.json())
    .then(data =>
      {
        this.setState(
          {
            stats:data[0],
            isLoading: false
          })
      })

  }


  render()
  {
    return (
    <div>
    {this.state.stats ?
    <div>
    {this.state.isLoading ? 'Loading....' :
    <div className="ui list">
        {this.state.stats.h ? <div className="item">Hits: {this.state.stats.h}</div> : null}
        {this.state.stats.d ? <div className="item">Doubles: {this.state.stats.d}</div> : null}
        {this.state.stats.t ? <div className="item">Triples: {this.state.stats.t}</div> : null}
        {this.state.stats.hr ? <div className="item">Home-Runs: {this.state.stats.hr}</div> : null}
        {this.state.stats.r ? <div className="item">Runs: {this.state.stats.r}</div> : null}
        {this.state.stats.rbi ? <div className="item">RBI's: {this.state.stats.rbi}</div> : null}
        {this.state.stats.bb ? <div className="item">Walks: {this.state.stats.bb}</div> : null}
        {this.state.stats.sb ? <div className="item">Stollen Bases: {this.state.stats.sb}</div> : null}
        {this.state.stats.cs ? <div className="item">Caught Stealing: {this.state.stats.cs}</div> : null}
        {this.state.stats.avg ? <div className="item">Batting Average: {this.state.stats.avg}</div> : null}
        {this.state.stats.p_w ? <div className="item">Walks: {this.state.stats.p_w}</div> : null}
        {this.state.stats.p_k ? <div className="item">Strike Outs: {this.state.stats.p_k}</div> : null}
        {this.state.stats.p_era ? <div className="item">ERA: {this.state.stats.p_era}</div> : null}
        {this.state.stats.p_hwa ? <div className="item">HWA: {this.state.stats.p_hwa}</div> : null}
    </div>
        }
    </div> : null}
    </div>
    );
  }

}
