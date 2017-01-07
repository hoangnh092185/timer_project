import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, Text, View, StyleSheet } from 'react-native';

class TimerProject extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      timeElapsed: null,
    };
  }
  render() {
    return <View style={[styles.container, this.border('yellow')]}>
    <View style={styles.header}>
      <View style={[styles.timerWrapper, this.border('red')]}>
        <Text>
          {this.state.timeElapsed}
        </Text>
      </View>
      <View style={[styles.buttonWrapper, this.border('green')]}>
        {this.startstopButton()}
        {this.lapButton()}
      </View>
    </View>
    <View style={[styles.footer, this.border('blue')]}>
      <Text>
        I am the lap place holder
      </Text>
    </View>
    </View>
  }
  startstopButton(){
    return <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress}>
    <Text>
      Start
    </Text>
    </TouchableHighlight>
  }
  lapButton(){
    return <View>
      <Text>
      lap
      </Text>
    </View>
  }
  handleStartPress(){
    var startTime = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);

  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
AppRegistry.registerComponent('TimerProject', () => TimerProject);
