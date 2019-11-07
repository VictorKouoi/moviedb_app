import React from 'react';
import {
  Drawer,
  withStyles
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import moment from 'moment';

const MobileCard = (props) => {
  const {
    classes, isOpen, onClose,
    id,
    original_title,
    overview,
    release_date,
    poster_path,
    vote_average
  } = props;

  const posterPath = `http://image.tmdb.org/t/p/w300//${poster_path}`;

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <HighlightOffIcon fontSize="large" color='secondary' onClick={onClose} />
        <div className={classes.title}>{original_title}</div>
        <img
            alt={id}
            src={posterPath}
          />
        <div className={classes.text}>Date de sortie : {moment(release_date).format('DD/MM/YYYY')}</div>
        <div className={classes.text}>Note MovieDB</div>
        <Rating
          precision={0.5}
          className={classes.rating}
          readOnly
          name="simple-controlled"
          value={vote_average}
        />
        <div className={classes.text}>{overview}</div>
    </Drawer>
  );
}

const styles = () => ({
  drawerPaper: {
    width: '1OO%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30
  },
  title: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    textAlign: 'justify',
    margin: 10
  },
  rating: {
    margin: 10
  }
});

export default withStyles(styles)(MobileCard);