import React, {useState} from 'react';

import avatar from "../../../static/img/avatar.png"
import EditButton from './EditButton';
import EditField from './EditField';
import { withStyles } from '@material-ui/core/styles';
import {makeStyles, CssBaseline, Button, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Box, Grid, Collapse} from '@material-ui/core';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: '100%',
    padding: theme.spacing(3),
  },
  avatarSize: {
    width: theme.spacing(19),
    height: theme.spacing(19),
    padding: theme.spacing(0),
  },
  title: {
    fontSize: theme.typography.pxToRem(29),
    flexBasis: '19%',
    flexShrink: 0,
    color: theme.palette.inherit,
  },
  subHeader: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '19%',
    flexShrink: 0,
  },
}));
/* Display the profile basic info */
export default function Profile(props){
    const [isClicked, setClick] = useState(false);

    const classes = useStyles();
    const user = useSelector(state => state.firebase.profile);
      return(
        <div className={classes.root}>
          {/* Display user's Name, Email, and Location */}
          <Grid item>
              <Card className={classes.root}>
                <CardHeader
                    title={
                    <Typography className={classes.title} variant="h5">{user.firstName} {user.lastName}</Typography>
                    }
                    align='left'
                    subheader={
                    <>Carlisle, PA<br/>{user.email}</>
                    }
                    avatar={
                      <Avatar src={avatar} aria-label="name" className={classes.avatarSize}>K</Avatar>
                    }
                />
                {/*Display the EditField if EditButton is clicked*/}
                <CardActions>
                  <EditButton onClick={()=>{setClick(!isClicked)}} status={isClicked}/>
                </CardActions>
                {/* Expand Profile card and display EditField component*/}
                <Collapse in={isClicked} timeout="auto" unmountOnExit>
                  <CardContent>
                      <EditField user={user}/>
                  </CardContent>
                </Collapse>
              </Card>
          </Grid>
        </div>
      );
}
