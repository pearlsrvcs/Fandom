import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from './common';

const GLOBAL = require('./Globals');

class Teams extends Component {

  constructor(props){
    super(props);
    this.state = {
      teams: GLOBAL.TEAMS
    }
    console.log(this.state.teams)
  }

  goHome = () => {
    Actions.Teams();
  }
  goPlayers = () => {
    Actions.Players();
  }
  goTeams = () => {
    Actions.AddTeam();
  }

  pressedLogo = (text) => {
    GLOBAL.TEAM = `${text}`
    Actions.Stats();
  }
  pressedRemove = (text) => {
    tempData = []
    for (let i = 0; i < this.state.teams.length; i++){
      if (this.state.teams[i].team !== text){
        tempData.push(this.state.teams[i])
      }
    }
    GLOBAL.TEAMS = tempData
    this.setState({
      teams: tempData
    })
  }

  showTeams = () => {
    let i = -1
    return(
      this.state.teams.map((team) => {
        //console.log(`${JSON.stringify(team)}`)
        i++;
        return (
            <CardSection key={i} style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.pressedLogo(team.team)} style={{flexDirection: 'row'}}>
                <Image source = {{uri: team.logo}} style={{width: 50, height: 50}} /><Text style = {styles.teams}>{team.team}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.pressedRemove(team.team)} style={{flexDirection: 'row'}}>
                <Image source = {require(`./assets/trash.jpg`)} style={{width: 30, height: 30, margin: 20, alignContent: 'flex-end'}} />
              </TouchableOpacity>
            </CardSection>
        )
      })
    )
  }

  render() {
    return (
      <Card>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style = {styles.header}>NBA Starting Line Up" </Text>
          <Text style = {styles.instructions}>Touch Team for List of Player</Text>
        </CardSection>
        <CardSection>
          <Button onPressAction={this.goTeams.bind(this)}>Add Teams</Button>
        </CardSection>
        <ScrollView>
          {this.showTeams()}
          </ScrollView>
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
    fontSize: 24,
    alignSelf: 'center',
    color: 'blue'
  },
  teams: {
    fontSize: 18,
    alignSelf: 'center'
  },
  players: {
    fontSize: 12,
    paddingLeft: 50
  },
  logo: {
    width: 50,
    height: 50,
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
  }
}

export default Teams;
