import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage';
import RoomShowContainer from './room/room_show_container';
import RoomFormContainer from './room/room_form_container';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/SecretRoom" component={RoomFormContainer}/>
          <Route path="/rooms/" component={RoomShowContainer} />
          <Route path="/" component={ Homepage } />
        </Switch>
      </div>
    );
  }
}

export default App;
