import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RouterComponent from './src/Router';
import teams from './src/teams.json';

const GLOBAL = require('./src/Globals');

export default class App extends Component {
  constructor(props){
    super(props)
    GLOBAL.TEAMS = teams.nba;
  }
  render() {
    return (
        <View style={{ flex: 1, paddingTop: 25, backgroundColor: 'white' }}>
          <RouterComponent />
        </View>
    );
  }
}
