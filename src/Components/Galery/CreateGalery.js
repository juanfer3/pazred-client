import React, { Component } from 'react';

import { newGalery } from '../../Services/GaleryServices';
import {DropzoneArea} from 'material-ui-dropzone'

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Fab,
  TextField,
  MenuItem,
  Select
} from '@material-ui/core'

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const options = [
    { key: 0, text: 'Debeiba', value: 1 },
    { key: 1, text: 'Fortino', value: 2 },
  ]




class CreateGalery extends Component {
    constructor(props){
        super(props);
        this.state = {
        data_files_fk_municipalities_id: '',
        data_files_user_id: '',
        data_files_category_id: '',
        data_files_subcategory_id: '',
        data_files_ref_ubication: '',
        select: '',
        file: []
        };

        this.sendData = this.sendData.bind(this)
    }
    handleChangeFiles(files){
        this.setState({
            file: files
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleChangeSelect(event){
        this.setState({ [event.target.name]: event.target.value, name: event.target.name});
    }

    sendData(){
        const galery ={
            data_files_fk_municipalities_id: this.state.data_files_fk_municipalities_id,
            data_files_user_id: this.state.data_files_user_id,
            data_files_category_id: this.state.data_files_category_id,
            data_files_subcategory_id: this.state.data_files_subcategory_id,
            data_files_ref_ubication: this.state.data_files_ref_ubication,
            file: this.state.file
        }

        newGalery(galery)
            .then(data =>{
                console.log('====================================');
                console.log(data);
                console.log('====================================');
            });
    }

    render() {
        return (
            <div>
                <h1>CreateGalery</h1>
                <Grid  container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} >
                    <DropzoneArea 
                        showPreviews={true}
                        onChange={this.handleChangeFiles.bind(this)}
                    />
                    
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField
                            select
                            id="standard-required"
                            label="Municipios"
                            margin="normal"
                            value={this.state.data_files_fk_municipalities_id}
                            fullWidth
                            name="data_files_fk_municipalities_id"
                            onChange={e => this.handleChangeSelect(e)}
                        >
                            {options.map(option => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.text}
                            </MenuItem>
                            ))}
                        </TextField>

                        {/* <Select
                        value={this.state.data_files_fk_municipalities_id}
                        name="myselect"
                        onChange={e => this.handleChange(e)}
                        >
                        {options.map(option => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.text}
                            </MenuItem>
                            ))}
                        </Select> */}
                    </Grid>


                    <Grid item xs={12} sm={4} >
                        <TextField
                            id="standard-required"
                            label="User"
                            margin="normal"
                            fullWidth
                            name="data_files_user_id"
                            onChange={e => this.handleChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField
                            id="standard-required"
                            label="Categoria"
                            margin="normal"
                            fullWidth
                            name="data_files_category_id"
                            onChange={e => this.handleChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <TextField
                            id="standard-required"
                            label="Subcategoria"
                            margin="normal"
                            fullWidth
                            name="data_files_subcategory_id"
                            onChange={e => this.handleChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <TextField
                            id="standard-required"
                            label="Referencia De Ubicaciòn"
                            margin="normal"
                            name="data_files_ref_ubication"
                            multiline
                            fullWidth
                            rows="6"
                            variant="outlined"
                            onChange={e => this.handleChange(e)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} justify="center" alignItems="center">
                        <Button onClick={this.sendData} align="center" variant="contained" color="primary" >
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CreateGalery;