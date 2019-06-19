import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import PlayerCard from './PlayerCard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'namor';
import 'cool-images';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function CardCollection(props){

  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <CardMedia
          className={classes.cardMedia}
          image={props.team.imgURL}
          height='300px'
          title="Image title"
        />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {props.team.teamName}
        </Typography>
        <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                href='/home'
                size="small"
                variant="contained"
                color="primary">
                Go Back
              </Button>
              <Button
                size="small"
                href={`/edit-team/${props.team.id}`}
                variant="contained"
                color="primary">
                Edit Team!
              </Button>
              <Button
                size="small"
                onClick={()=>props.deleteTeam(props.team)}
                variant="contained"
                color="primary">
                Delete Team!
              </Button>
            </Grid>
        </Grid>
        <div className={classes.heroButtons}>
        <div className= "ui three column centered grid">
        <div className= "row">
          {/* <Grid container spacing={10} justify="center"> */}
            {!!props.team.pitcher ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.pitcher})} drafted={true}/> : null}
            {!!props.team.catcher ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.catcher})} drafted={true}/> : null}
            {!!props.team.firstBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.firstBase})} drafted={true}/> : null}
            {!!props.team.secondBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.secondBase})} drafted={true}/> : null}
            {!!props.team.thirdBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.thirdBase})} drafted={true}/> : null}
            {!!props.team.shortStop ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.shortStop})} drafted={true}/> : null}
            {!!props.team.leftField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.leftField})} drafted={true}/> : null}
          {/* </Grid> */}
          {/* <Grid container spacing={7} justify="center"> */}
            {!!props.team.centerField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.centerField})} drafted={true}/> : null}
            {!!props.team.rightField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.rightField})} drafted={true}/> : null}
            {!!props.team.bench0 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench0})} drafted={true}/> : null}
            {!!props.team.bench1 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench1})} drafted={true}/> : null}
            {!!props.team.bench2 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench2})} drafted={true}/> : null}
            {!!props.team.bench3 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench3})} drafted={true}/> : null}
            {!!props.team.bench4 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench4})} drafted={true}/> : null}
          {/* </Grid> */}
        </div>
        </div>
        </div>
      </Container>
    </div>
  )
}
