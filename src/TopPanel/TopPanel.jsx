import Button from "@material-ui/core/Button";
import  Typography from "@material-ui/core/Typography";
import  Grid from "@material-ui/core/Grid";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Image from "../Images/circularlogo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import One from "../Images/one.png";
import {
  YouTube,
  Twitter,
  Telegram,
  LinkedIn,
  Instagram,
  Facebook
} from "../SocialLinks";
//import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FBD916",
    background:`url(${One}) no-repeat center center`,
    backgroundSize: `100% 120%`,
    backgroundPosition:'center',
    backgroundRepeat: `no-repeat`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "80vh",
    gap: 8,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]:{
      backgroundSize: `800px 500px`,
    },
    [theme.breakpoints.down('xs')]:{
      backgroundSize: `150% 80%`,
      resize:'both'
    }
  },
  logo: {
    height: "10em",
    width: "10em",
    resize: "both",
    marginTop:8,
  },
  tag: {
    // position:'absolute',
    // right:20,
    // bottom:110,
    // marginBottom: 16,
    // marginTop: 16,
    // padding:'1em',
    backgroundColor:'#FBD916',
    marginTop:8,
    padding:0
  },
  cta: {
    // marginBottom: 10,
    marginTop: 10,
    // position: 'sticky'
  },
  social: {
    display: "flex",
    fontSize:'32'
    // justifySelf:'end'
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    unset: "all"
  },
  icon:{
    color:"white",
  }
 
}));

const TopPanel = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      {/* <img
        className={classes.logo}
        src={Image}
        alt="logo"
        width="100vw"
        height="100vw"
      /> */}
      
      <Button
        variant="contained"
        onClick={() => window.open(Telegram, "_blank")}
        color="secondary"
        className={classes.cta}
        disableElevation
      >
        Join Our Community
      </Button>
      {/* <Paper variant="outlined" > */}
      <Typography  variant="h6" className={classes.tag} style={{fontWeight:'600',color:'#D9261C'}}>
        Intelligence the World Needs
      </Typography>
      {/* </Paper> */}
      <div className="social" style={{alignSelf:'flex-end'}}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(LinkedIn, "_blank")}
        >
          <LinkedInIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Twitter, "_blank")}
        >
          <TwitterIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Instagram, "_blank")}
        >
          <InstagramIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Facebook, "_blank")}
        >
          <FacebookIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(YouTube, "_blank")}
        >
          <YouTubeIcon
            
            className={classes.icon}
            
          />
        </IconButton>
      </div>


      {/* <img src={Bushes} className={classes.bushes} alt="bush" /> */}
    </Grid>
  );
};

export default TopPanel;
