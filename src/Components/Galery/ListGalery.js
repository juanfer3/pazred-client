import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../Navbar/Navbar";
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

import { Link } from 'react-router-dom';

class ListGalery extends Component {
    render() {
        return (
            <div>
            <Fab component={Link} to="/photos/create" color="primary" aria-label="Add"  containerElement={<Link to="/photos/create" />}  >
                    <AddIcon />
            </Fab>
                <Grid  container spacing={3} direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={4} >
            <Card >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/en/0/0f/Sixpencentr_selftitled.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be
                  nev
                  lent
                </Typography>
                <Typography  color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

  <Grid item xs={12} sm={4} >
            <Card >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/en/0/0f/Sixpencentr_selftitled.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be
                  nev
                  lent
                </Typography>
                <Typography  color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/en/0/0f/Sixpencentr_selftitled.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be
                  nev
                  lent
                </Typography>
                <Typography  color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/en/0/0f/Sixpencentr_selftitled.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be
                  nev
                  lent
                </Typography>
                <Typography  color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          
           
        </Grid>
            </div>
        );
    }
}

export default ListGalery;