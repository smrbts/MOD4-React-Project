import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import PlayerCard from './PlayerCard';
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

  // debugger

  // console.log(props.players.find(player=>{return player.id === props.team.leftField}))

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <CardMedia
          className={classes.cardMedia}
          image={props.team.imgURL}
          height='400px'
          title="Image title"
        />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {props.team.teamName}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={7} justify="center">
            <Grid item>{props.team.pitcher ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.pitcher})} /> : null}</Grid>
            <Grid item>{props.team.catcher ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.catcher})} /> : null}</Grid>
            <Grid item>{props.team.firstBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.firstBase})} /> : null}</Grid>
            <Grid item>{props.team.secondBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.secondBase})} /> : null}</Grid>
            <Grid item>{props.team.thirdBase ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.thirdBase})} /> : null}</Grid>
            <Grid item>{props.team.shortStop ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.shortStop})} /> : null}</Grid>
            <Grid item>{props.team.leftField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.leftField})} /> : null}</Grid>
          </Grid>
          <Grid container spacing={7} justify="center">
            <Grid item>{props.team.centerField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.centerField})} /> : null}</Grid>
            <Grid item>{props.team.rightField ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.rightField})} /> : null}</Grid>
            <Grid item>{props.team.designatedHitter ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.designatedHitter})} /> : null}</Grid>
            <Grid item>{props.team.bench1 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench1})} /> : null}</Grid>
            <Grid item>{props.team.bench2 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench2})} /> : null}</Grid>
            <Grid item>{props.team.bench3 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench3})} /> : null}</Grid>
            <Grid item>{props.team.bench4 ? <PlayerCard player={props.players.find(player=>{return player.id === props.team.bench4})} /> : null}</Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
