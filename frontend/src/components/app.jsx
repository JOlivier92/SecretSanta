import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage';
import RoomShowContainer from './room/room_show_container';
import SecretRoom from './room/secret_room';
import { ProtectedRoute } from "../util/route_util";


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <ProtectedRoute exact path="/secretroom" component={SecretRoom}/>
          <Route path="/room/:roomid" component={RoomShowContainer} />
          <Route path="/" component={ Homepage } />
        </Switch>
      </div>
    );
  }
}

export default App;
