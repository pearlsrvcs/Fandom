import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from './common';

const GLOBAL = require('./Globals');

class AddTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: GLOBAL.TEAMS,
      name: '',
      URL: '',
      position: '',
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
    Actions.Stats();
  }


  goPlayerSave = () => {
    let temp = {}
    temp.position = this.state.position
    temp.name = this.state.name
    temp.height = ""
    temp.weight = ""
    temp.age = ""
    temp.img = this.state.URL
    for (let i = 0; i < GLOBAL.TEAMS.length; i++){
      if (GLOBAL.TEAMS[i].team === GLOBAL.TEAM){
        GLOBAL.TEAMS[i].players.push(temp)
      }
    }
    this.goBack()
  }

  render() {
    return (
      <Card>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style = {styles.header}>Add New Team</Text>
        </CardSection>
        <CardSection>
          <Button onPressAction={this.goBack}>Back</Button>
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Player Name: </Text>
          <TextInput style={styles.inputStyle}
                          onChangeText = {(text) => this.setState({name: text})}
                          value = {this.state.name}
                          placeholder = "Player Name"
         />
        </CardSection>
        <CardSection>
          <Text style={styles.labelStyle}>Player Image URL: </Text>
          <TextInput style={styles.inputStyle}
                        onChangeText = {(text) => this.setState({URL: text.toLowerCase()})}
                        value = {this.state.URL}
                        placeholder = "Player URL"
                        />
      </CardSection>
      <CardSection>
        <Picker selectedValue = {this.state.position}
            style = {styles.picker}
            onValueChange = {(value, index) => {
            this.setState({
              position: value
            })
          }}
        >
          <Picker.Item label = "Center" value = "Center" />
          <Picker.Item label = "Small Forward" value = "Small Forward" />
          <Picker.Item label = "Power Forward" value = "Power Forward" />
          <Picker.Item label = "Point Guard" value = "Point Guard" />
          <Picker.Item label = "Shooting Guard" value = "Shooting Guard" />
        </Picker>
    </CardSection>
      <CardSection>
        <Button onPressAction={this.goPlayerSave}>Save Player</Button>
      </CardSection>
    </Card>
    );
  }
}

const styles = {
  picker: {
    heigth: 150,
    width: 300
  },
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
