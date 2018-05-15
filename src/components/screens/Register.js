import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component  {
  constructor() {
    super();
    this.state = {
      credentials: {
        login: "",
        password: ""
      }
    };
  }

  updateText(text, field){
    let newCredentials = Object.assign(this.state.credentials); //NEW OBJECT
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }


  register(){
    //send credentials to server
    //if sign up success
    alert(JSON.stringify(this.state.credentials));
    // else error message
  }


  render() {
    return (
      <View
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(251, 61, 57)"
        }}
        >
        <Text> Register Page </Text>
        <TextInput
          value={this.state.login}
          placeholder="USERNAME"
          style={styles.input}
          autoCorrect={false}
          onChangeText = {text => this.updateText(text, 'login')}
        />
        <TextInput
          value={this.state.password}
          onChangeText = {text => this.updateText(text, 'password')}
          secureTextEntry
          autoCorrect={false}
          placeholder="PASSWORD"
          style={styles.input}
        />
        <Button
          onPress={() => {
            this.register()
          }} title="Sign Up"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 100 + "%",
    paddingHorizontal: 50,
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 10
  }
});

export default Register;
