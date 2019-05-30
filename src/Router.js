import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Teams from './Teams';
import Stats from './Stats';
import Players from './Players';
import AddTeam from './AddTeam';
import TeamStats from './TeamStats';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key = "Teams" component={Teams} title = "Home" />
        <Scene key = "Stats" component={Stats} title = "View Stats" />
        <Scene key = "Players" component={Players} title = "Add Players" />
        <Scene key = "AddTeam" component={AddTeam} title = "Add Team" />
        <Scene key = "TeamStats" component={TeamStats} title = "TeamStats" />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
