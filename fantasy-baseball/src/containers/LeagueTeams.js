import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header'
import TeamCards from '../components/TeamCards'
import HomeHero from '../components/HomeHero'
import 'namor';

export default class CardCollection extends Component {
  constructor() {
    super()
    this.state = {
      teamCards: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:6969/teams/`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'auth-token' : localStorage.token
      }
    })
      .then(res=>res.json())
      .then(data => {
        if (data.msg) {
          console.log('User has no Teams')
        }
        else {
          this.setState({
            teamCards: data
          })
        }
      })
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <HomeHero />
          {this.state.teamCards.length === 0 ?
            <center><img alt='uh-oh' height='200px' style={{opacity:0.15}} src='https://images.vexels.com/media/users/3/129330/isolated/preview/af374baf0cd41b67b198cd79a13955f9-baseball-player-silhouette-by-vexels.png'></img></center>
              : <TeamCards cards={this.state.teamCards} showTeam={this.props.showTeam}/> }
        </main>
      </React.Fragment>
    )
  }
}
