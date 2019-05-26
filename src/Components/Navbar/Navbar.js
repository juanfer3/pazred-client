import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                <IconButton Link="/" edge="start" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    <Link to="/photos" >Galery</Link>
                </Typography>
                    <IconButton
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                    >
                        <MenuItem ><Link to="/photos" >Galery</Link></MenuItem>
                        <MenuItem ><Link to="/photos" >Galery</Link></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;