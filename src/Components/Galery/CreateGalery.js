import React, { Component } from 'react';

import {DropzoneArea} from 'material-ui-dropzone'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Fab,
  TextField
} from '@material-ui/core'

class CreateGalery extends Component {
    constructor(props){
        super(props);
        this.state = {
        files: []
        };
    }
    handleChange(files){
        this.setState({
        files: files
        });
    }
    render() {
        return (
            <div>
                <h1>CreateGalery</h1>
                <Grid  container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={4} >
                    <DropzoneArea 
                        showPreviews={true}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField
                        id="standard-required"
                        label="Nombre de fotografo"
                        margin="normal"
                    />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        <MenuItem  value="1">
                            Dubai
                        </MenuItem>
                        <MenuItem  value="2">
                            Eter
                        </MenuItem>
                    </TextField>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CreateGalery;