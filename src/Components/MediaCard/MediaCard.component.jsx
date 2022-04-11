import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    backgroundColor: "white",
    margin: "0.5em",
    padding: "0.5em",
  },

  Button: {
    backgroundColor: "black ",
    padding: "0.6em",
    color: "white",
    "&:hover": {
      backgroundColor: "#99f",
    },
  },
  media: {
    height: 250,
  },
});

export default function MediaCard({ data }) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: data.id,
        name: data.title,
        imageUrl: data.image,
        price: data.price * 50,
      },
      quantity: 1,
    });
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title.substring(0, 20)}..
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            <b>₹{data.price * 50}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.Button}
          onClick={addToCart}
          size="small"
          color="primary"
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
