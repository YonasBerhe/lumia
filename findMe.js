'use strict';

var React = require('react-native');
var Speech = require('react-native-speech');

var  {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
} = React;


var styles = StyleSheet.create({
  description: {
    textAlign: 'center',
    color:  '#656565',
    fontSize: 18
  },
  container: {
  padding: 30,
  marginTop: 65,
  alignItems: 'center'
},
 button: {
       height: 36,
       flex: 1,
       flexDirection: 'row',
       backgroundColor: '#48BBEC',
       borderColor: '#48BBEC',
       borderWidth: 1,
       borderRadius: 8,
       marginBottom: 10,
       alignSelf: 'stretch',
       justifyContent: 'center'
},

buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
}
});




class findMe extends React.Component {


  _startHandler() {
      Speech.speak({
        text: 'Aujourd\'hui, Maman est morte. Ou peut-être hier, je ne sais pas.',
        voice: 'fr-FR'
      })
      .then(started => {
        console.log('Speech started');
      })
      .catch(error => {
        console.log('You\'ve already started a speech instance.');
      });
    }

    _pauseHandler() {
      Speech.pause();
    }

    _resumeHandler() {
      Speech.resume();
    }

    _stopHandler() {
      Speech.stop();
    }

  render() {
    return (


      <View style={styles.container}>

      <TouchableHighlight style={styles.button} onPress={this._startHandler}>
            <Text style={styles.buttonText}>
            Speak

            </Text>
        </TouchableHighlight>

              <TouchableHighlight style={styles.button} onPress={this._pauseHandler}>
                    <Text style={styles.buttonText}>
                  Pause
                    </Text>
                </TouchableHighlight>

                      <TouchableHighlight style={styles.button} onPress={this._resumeHandler}>
                            <Text style={styles.buttonText}>
                            Resume
                            </Text>
                        </TouchableHighlight>

                              <TouchableHighlight style={styles.button} onPress={this._stopHandler}>
                                    <Text style={styles.buttonText}>
                                    Stop
                                    </Text>
                                </TouchableHighlight>

        </View>
    );
  }

}




module.exports = findMe;
