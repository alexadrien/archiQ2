import React from 'react';
import {Card, CardContent, CardActions, Button, Typography} from '@material-ui/core';
import {FormattedMessage} from 'react-intl';
import './App.css';

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <Card style={{width: '200px', margin: '300px auto'}}>
          <CardContent>
            <Typography color="textSecondary">
              <FormattedMessage id="welcome_message"/>
            </Typography>
            <Typography variant="headline" component="h2">
              ArchiQ2
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Be Awesome!</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Main;
