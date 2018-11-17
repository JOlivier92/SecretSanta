import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/SecretRoom" component={RoomFormComponent}/>
          <Route path="/" component={ Homepage } />
        </Switch>
      </div>
    );
  }
}

export default App;
