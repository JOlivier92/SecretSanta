import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage';
import randomLinkRoom from '';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/SecretRoom" component={RoomFormComponent}/>
          <Route path="/rooms/" component={} />
          <Route path="/" component={ Homepage } />
        </Switch>
      </div>
    );
  }
}

export default App;
