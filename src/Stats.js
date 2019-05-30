import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
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
  goHome = () => {
    Actions.Teams();
  }
  goPlayers = () => {
    Actions.Players();
  }
  goTeams = () => {
    Actions.TeamStats();
  }

  getTeamName = () => {
    return( GLOBAL.TEAM)
  }

  getStats(player){
    if (player.height != '' && player.weight !== '' && player.age !== ''){
      Alert.alert(
        `Stats for ${player.name}`,
        `This player is ${player.height} tall and weighs in at ${player.weight}. He is ${player.age} years old.`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]
      )
    } else {
      Alert.alert(
        `Stats for ${player.name}`),
        `No stats availabe for this player`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]
    }
  }

  pressedRemove = (text) => {
    let tmp = this.state.team
    for (let i = 0; i < tmp.players.length; i++){
      if (tmp.players[i].name === text){
        console.log(tmp.players[i].name)
        tmp.players.splice(i,1)
      }
    }
    for (let i = 0; i < GLOBAL.TEAMS.length; i++){
      if (GLOBAL.TEAMS[i].team === GLOBAL.TEAM){
        GLOBAL.TEAMS[i].players = tmp.players
        GLOBAL.TEAM = GLOBAL.TEAMS[i]
      }
    }
    this.goHome()
  }

  renderStats(){
    return(
      this.state.team.players.map((player) => {
        return (
          <View style={{flexDirection: 'row'}} key={player.name}>
            <TouchableOpacity key={player.name} onPress={() => this.getStats(player)} style={{flexDirection: 'row'}}>
              <Image source = {{uri: player.img}} style={{width: 40, height: 40}} /><Text style={styles.players}>{player.position}: {player.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.pressedRemove(player.name)} style={{flexDirection: 'row'}}>
              <Image source = {require(`./assets/trash.jpg`)} style={{width: 30, height: 30, margin: 20, alignContent: 'flex-end'}} />
            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  render() {
    return (
      <Card>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style = {styles.header}>Starting Line Up for {this.getTeamName()} </Text>
          <Text style = {styles.instructions}>Touch Player for stats</Text>
        </CardSection>
        <CardSection>
        <Button onPressAction={this.goHome.bind(this)}>Home</Button>
        <Button onPressAction={this.goTeams.bind(this)}>Team Stats</Button>
        <Button onPressAction={this.goPlayers.bind(this)}>Add Player</Button>
        </CardSection>
        <CardSection>
          <View>
            {this.renderStats()}
          </View>
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
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 20
  },
  logo: {
    width: 30,
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
  }
}

export default Stats;
