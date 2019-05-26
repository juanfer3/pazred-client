import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Fab
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
      fab: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }));


class Home extends Component {



  render(){
    
    const classes = useStyles;
    return(
      <div>
        
        <h2>Home</h2>
        
        
        
      </div>
    );
  }
}

export default Home;