import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render() {
    return(
      <View style= {styles.textContainer}>
        <Text style= {styles.text}>BUZZ APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  textContainer: {
    backgroundColor: '#01B8C0',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;