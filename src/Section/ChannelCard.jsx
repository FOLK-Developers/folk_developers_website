import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import  Card  from "@material-ui/core/Card";
//import Image from "../Images/chan.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: `clamp(100px,50px,250px)`,
    height: 100,
    display: "flex",
    padding:theme.spacing(1),
    
  },
  cover: {
    width: "100%",
    height: "100%"
  },
  item: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  channelname:{
    fontWeight: theme.typography.fontWeightBold,
  }
}));

const ChannelCard = ({ name, url }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.item}>
      <Card className={classes.card}>
        <img src={require(`../Images/${url}.png`)} className={classes.cover} alt="hey" />
      </Card>
      <Typography className={classes.channelname} variant="h5">{name}</Typography>
    </Grid>
  );
};

export default ChannelCard;
