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
    console.log(this.state.stats)
    return (
    <div>
    {this.state.isLoading ? 'Loading....' :
    <div className="ui list"> 
        <div className="item">Hits: {this.state.stats.h ? this.state.stats.h : "N/A"}</div>
        <div className="item">Doubles: {this.state.stats.d ? this.state.stats.d : "N/A"}</div>
        <div className="item">Triples: {this.state.stats.t ? this.state.stats.t : "N/A"}</div>
        <div className="item">Home-Runs: {this.state.stats.hr ? this.state.stats.hr : "N/A"}</div>
        <div className="item">Runs: {this.state.stats.r ? this.state.stats.r : "N/A"}</div>
        <div className="item">RBI's: {this.state.stats.rbi ? this.state.stats.rbi : "N/A"}</div>
        <div className="item">Walks: {this.state.stats.bb ? this.state.stats.bb : "N/A"}</div>
        <div className="item">Stolen Bases: {this.state.stats.sb ? this.state.stats.sb : "N/A"}</div>
        <div className="item">Caught Stealing: {this.state.stats.cs ? this.state.stats.cs : "N/A"}</div>
        <div className="item">Batting Average: {this.state.stats.avg ? this.state.stats.avg : "N/A"}</div>
        <div className="item">Walks(pitching): {this.state.stats.p_w ? this.state.stats.p_w : "N/A"}</div>
        <div className="item">StrikeOuts(pitching): {this.state.stats.p_k ? this.state.stats.p_k : "N/A"}</div>
        <div className="item">ERA(pitching): {this.state.stats.p_era ? this.state.stats.p_era : "N/A"}</div>
        <div className="item">HWA(pitching): {this.state.stats.p_hwa ? this.state.stats.p_hwa : "N/A"}</div>
    </div>
        }
    </div>
    );
  }
 
}