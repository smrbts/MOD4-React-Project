import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: 
  {
    flexGrow: 1,
  },
  menuButton: 
  {
    marginRight: theme.spacing(2),
  },
  title: 
  {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() 
{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => 
    {
    setAnchorEl(event.currentTarget)
    }

    const handleClose = () => 
    {
        setAnchorEl(null)
    }

    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton 
        edge="start" 
        className={classes.menuButton} 
        color="inherit" 
        aria-label="Menu"
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          <Typography variant="h6" className={classes.title}>
            Fantasy Baseball Home
          </Typography>
          <Button 
          color="inherit"
          href="/"
          >
              Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}