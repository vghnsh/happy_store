import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useStateValue} from '../../StateProvider';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor:'white',
    margin:'0.5em',
    
   
  },
  Button:{
    backgroundColor:'black ',
    padding:'0.6em',
    color:'grey',
    display:'flex',
    justifyContent:'center'
    
  },
  media: {
    height: 120,
  },
});

export default function MediaCard({data}) {

  const [,dispatch] = useStateValue();

  const addToCart=()=>{
       
    dispatch({
        type:"ADD_TO_CART",
        item:
        {
        id:data.id,
        name:data.title,
        imageUrl:data.image,
        price:data.price,
        quantity:1,
        }
    });
}

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title.substring(0,20)}..
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>₹{data.price}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.Button} onClick={addToCart} size="small" color="primary">
          Add To Cart
        </Button>
        
      </CardActions>
    </Card>
  );
}