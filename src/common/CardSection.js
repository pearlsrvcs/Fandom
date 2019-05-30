import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.cardStyle, props.style]}>{props.children}</View>
  );

const styles = {
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#a6a6a6',
    position: 'relative'
  }
};


export { CardSection };
