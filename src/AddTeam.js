import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from './common';

const GLOBAL = require('./Globals');

class AddTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: GLOBAL.TEAMS,
      teamName: '',
      teamURL: ''
    }
  }
  goHome = () => {
    Actions.Teams();
  }
  goPlayers = () => {
    Actions.Players();
  }

  goTeams = () => {
    let temp = {}
    temp.team = this.state.teamName
    temp.logo = this.state.teamURL
    temp.players = new Array(5)
    temp.stats = ""
    GLOBAL.TEAMS.push(temp)
    this.goHome()
  }

  renderStats(){
    return
  }

  render() {
    return (
      <Card>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style = {styles.header}>Add New Team</Text>
        </CardSection>
        <CardSection>
          <Button onPressAction={this.goHome.bind(this)}>Home</Button>
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Team Name: </Text>
          <TextInput style={styles.inputStyle}
                          onChangeText = {(text) => this.setState({teamName: text})}
                          value = {this.state.teamName}
                          placeholder = "Team Name"
         />
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Team Logo URL: </Text>
          <TextInput style={styles.inputStyle}
                        onChangeText = {(text) => this.setState({teamURL: text.toLowerCase()})}
                        value = {this.state.teamURL}
                        placeholder = "Team URL"
                        />
      </CardSection>
      <CardSection>
        <Button onPressAction={this.goTeams}>Add Team</Button>
      </CardSection>
    </Card>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 12,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 12,
    lineHeight: 25,
    flex: 2,
    width: 200
  },
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

export default AddTeam;
