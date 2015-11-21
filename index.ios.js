/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var NativeModules = require('react-native').NativeModules;
var React = require('react-native');
var Speech = require('react-native-speech');
// var thisWill = require('./thisWill');
var findMe = require('./findMe');




var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class lumia extends React.Component {


  render() {
    return (
      <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title:'lumia',
        component: findMe,
      }}/>
    );
  }
}


React.AppRegistry.registerComponent('Lumia', function() { return lumia });
