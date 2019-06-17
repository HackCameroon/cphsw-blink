import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    padding: '8px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400
  },
  media: {
    height: 140
  },
  navButton: {
    textDecoration: 'none',
    color: 'white'
  }
});
const flags = [
  'http://flagpedia.net/data/flags/normal/gb.png',
  'https://europa.eu/european-union/sites/europaeu/files/docs/body/flag_yellow_high.jpg',
  'http://flagpedia.net/data/flags/normal/us.png',
  'http://flagpedia.net/data/flags/normal/dk.png'
];

const Home = ({ classes, data }) => {
  return (
    <div className={classes.content}>
      {data.map((account, index) => (
        <Card key={account.id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={flags[index]}
              title={account.currency}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {account.currency} Account
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Balance: {account.balance} {account.currency}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              Details
            </Button>
            <Button size="small" color="primary">
              Invoices
            </Button>
            <Button size="small" color="primary">
              Analytics
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
