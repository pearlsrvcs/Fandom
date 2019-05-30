import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button, Card } from './common';

const GLOBAL = require('./Globals');

class Stats extends Component {
  constructor(props){
    super(props);

    this.state = {
      teams: GLOBAL.TEAMS,
      team: {}
    }
  }
  componentWillMount(){
    let tempData={}
    for (let i = 0; i < GLOBAL.TEAMS.length; i++){
      if (GLOBAL.TEAMS[i].team === GLOBAL.TEAM){
        tempData = GLOBAL.TEAMS[i]
      }
    }
    this.setState({
      team: tempData
    })
  }
  goBack = () => {
    Actions.pop();
  }

  getTeamName = () => {
    return( GLOBAL.TEAM)
  }

  render() {
    console.log(`TEAM CHOSEN: ${JSON.stringify(this.state.team)}`)
    return (
      <Card>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style = {styles.header}>Team Stats for {this.getTeamName()} </Text>
        </CardSection>
        <CardSection>
          <Button onPressAction={this.goBack.bind(this)}>Back</Button>
        </CardSection>
        <CardSection>
          <Text style={styles.stats}>{this.state.team.stats}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  instructions: {
    fontSize: 15,
    alignSelf: 'center'
  },
  header: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'blue'
  },
  teams: {
    fontSize: 18,
    alignSelf: 'center'
  },
  players: {
    fontSize: 18,
    paddingLeft: 50,
    paddingTop: 20
  },
  logo: {
    width: 50,
    height: 30,
    padding: 10
  },
  buttons: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    borderColor: 'blue',
    borderRadius: 25,
    borderWidth: 0.5,
    padding: 10,
  },
  stats: {
    fontSize: 18,
    alignSelf: 'center'
  },
}

export default Stats;
