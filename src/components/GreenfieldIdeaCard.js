import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import mobile from '../images/wishes.svg';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function GreenfieldIdeaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} 
        style={{ marginRight: 30, flex:1}}
        onClick={() => { console.log('GreenfieldIdeaCard Selected'); }}>
        <CardMedia
          className={classes.media}
          image={mobile}
          title="Greenfield Idea"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Greenfield Idea
          </Typography>
          <Typography component="p">
            I have a greenfield idea that needs focus.
          </Typography>
          <Typography component="p">
            I want the D&F to produce a problem definition and a set of validated use cases and wireframes.
          </Typography>
        </CardContent>
        <CardActions>
          {/* Insert actions here */}
        </CardActions>
      </Card>
    </div>
  );
}

GreenfieldIdeaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GreenfieldIdeaCard);
