import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import  useStyles from './styles.js'

const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.main}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
                Advisor in Maps
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Search New Places
            </Typography>
              {/* <Autocomplete>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon></SearchIcon>
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput }}/>
                    </div>
               {/* </Autocomplete> */}
                </Box>              
            </Toolbar>
        </AppBar>
    );
}

export default Header;