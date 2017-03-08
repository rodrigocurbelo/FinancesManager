import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  AppRegistry,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>Finances manager</Text>
          </View>

          <View style={styles.inputs}>
            <TextInput style={styles.userInput} underlineColorAndroid="#fff" placeholder="User"></TextInput>
            <TextInput underlineColorAndroid="#fff" placeholder="Password" secureTextEntry={true}></TextInput>
          </View>

          <TouchableWithoutFeedback>
            <View style={[styles.loginButton, styles.loginActionButton]}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.buttons}>
          <Text style={styles.buttonsSectionText}>Don't you have an account yet?</Text>

          <TouchableWithoutFeedback>
            <View style={[styles.loginButton, styles.signUpButton]}>
              <Text style={styles.loginButtonText}>Sign up</Text>
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.buttonsSectionText}>OR</Text>

          <TouchableWithoutFeedback>
            <View style={[styles.loginButton, styles.loginWithGoogleButton]}>
              <Text style={styles.loginButtonText}>Login with Google</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    justifyContent: 'center',
    backgroundColor: '#009688',
  },
  appTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputs: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  userInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  loginButton: {
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  loginActionButton: {
    backgroundColor: '#26A69A',
    marginTop: 20,
  },
  signUpButton: {
    backgroundColor: '#009688',
  },
  loginWithGoogleButton: {
    backgroundColor: '#F44336',
  },
  buttons: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  buttonsSectionText: {
    margin: 5,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Login', () => Login);
