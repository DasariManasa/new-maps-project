import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardAction, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import usestyles from './styles'
import { PlaceSharp } from '@material-ui/icons';


const PlaceDetails = ({ place }) =>{
    console.log(place);
    return(
       <Card elevation={6}>
           <CardMedia 
            style={{ height: 180 }}
            image={place.photo ? place.photo.images.large.url : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
            place={place.name} 
          />
          <CardContent>
              <Typography gutterBottom varient="h6">{place.name}{place.address}</Typography>
               <Box display="flex" justifyContent="space-between">
                <Typography varient="subtitle1">Price</Typography>
                <Typography gutterBottom varient="subtitle1">{place.price_level}</Typography>                          
                </Box> 
                <Box display="flex" justifyContent="space-between">
                <Typography varient="subtitle1">Ranking</Typography>
                <Typography gutterBottom varient="subtitle1">{place.rating}</Typography>  
                <Typography variant='subtitle2' color="textSecondary">{place.ranking_geo}</Typography>                        
                </Box>   
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={place.chip}/>
                ))} 
                {place?.address && (
                    <Typography gutterBottom varient="subtitle1" color="textSecondary" className={place.subtitle}>
                        <LocationOnIcon/> {place.bearing}
                    </Typography>
                )}
                 {place?.address && (
                    <Typography gutterBottom varient="subtitle1" color="textSecondary" className={place.spacig}>
                        <PhoneIcon/> {place.phone}
                    </Typography>
                )}
          </CardContent>          

       </Card>
    )
}

export default PlaceDetails;