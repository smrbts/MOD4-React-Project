import React, {Component}from 'react';
import OtherTeam from '../components/OtherTeam'
import Button from '@material-ui/core/Button';


export default class BattlePage extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      home: [],
      homeID: props.location.pathname.split('/').slice(-1),
      away: [],
      players: []
    }
  }

  componentDidMount() {

    fetch('http://localhost:6969/teams/all')
      .then(res=>res.json())
      .then(data=> {
        let obj = data.find(team=> team.id === parseInt(this.state.homeID,10))
        let arr = [obj.pitcher,obj.catcher,obj.firstBase,obj.secondBase,obj.thirdBase,obj.shortStop,obj.leftField,obj.centerField,obj.rightField,obj.bench0,obj.bench1,obj.bench2,obj.bench3,obj.bench4]
        arr.forEach(playerID => {
          fetch(`http://localhost:6969/players/${playerID}`)
            .then(res=>res.json())
            .then(data => {
              this.setState({
                home: [...this.state.home,data]
              })
            })
          })
        })
    fetch('http://localhost:6969/players')
      .then(res => res.json())
      .then(data =>
        {
          let arr = data
          let shuffled = arr.sort(() => 0.5 - Math.random())
          let list = shuffled.slice(0,14)
          this.setState(
            {
              away: list
            })
        })
  }

  render()
  {
    return (
        <div className="ui segment">
                <div className="ui center aligned segment tertiary inverted blue bot-army">
                <Button
                    href='/home'
                    justify="center"
                    variant="contained"
                    color="primary"
                    >
                    Return Home
                </Button><br></br>
                    YOUR TEAM
                <div className="ui center aligned seven column centered stackable grid">

                    {this.state.home.map(player => <OtherTeam player= {player}/>)}
                </div>
        </div>
            <div className="ui divider">
                <div className="ui center aligned segment tertiary inverted red bot-army">
                            ENEMY TEAM
                        <div className="ui seven column centered stackable grid">
                            {this.state.away.map(player => <OtherTeam player= {player}/>)}
                        </div>
                </div>
            </div>
        </div>
    );
  }
}
