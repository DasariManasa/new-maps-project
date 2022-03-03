import React, { useState } from 'react';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles'

const List = () =>{
    const classes = useStyles();
    const [type, setType] = useState('restaurents')
    const [rating, setRating] = useState('')

    const places = [
        { name: 'coolplace' },
        { name: 'Best Place' },
        { name: 'Best Beer' },
        { name: 'coolplace' },
        { name: 'Best Place' },
        { name: 'Best Beer' },
        { name: 'coolplace' },
        { name: 'Best Place' },
        { name: 'Best Beer' },


    ]

    return(
       <div className={classes.container}>
           <Typography varient="h4">Restaurents, Hotels and Attractions </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} >
                    <MenuItem value="restaurents">Restaurents</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attraction">Attractions</MenuItem>  
                 </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Ratings</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)} >
                   <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>ABove 3.0</MenuItem>
                    <MenuItem value={4}>ABove 4.0</MenuItem>  
                    <MenuItem value={405}>ABove 4.5</MenuItem>  
                </Select>
            </FormControl>
            <Grid container spacing={2} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item Key={i} xs={12}>
                        <PlaceDetails place={place}/>                                                                                                                                  
                    </Grid>
                ))}
                
            </Grid>
       </div>

    )
}

export default List;