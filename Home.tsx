import React from 'react'
import { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';

type State = {
  username: any,
  password: any,
};

type Props = {
  navigation: any
};

const Container = styled.View`
  padding-vertical: 20px;
  padding-horizontal: 5px;
`;

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
`;

const Input = styled.TextInput`
  font-size: 15px;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;

const LoginBtnText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export class App extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = (username: string) => {
    this.setState({ username });
  }

  onChangePassword = (password: string) => {
    this.setState({ password });
  }

  navigateToGraph = () => {
    const { navigation } = this.props;
    const { username, password } = this.state;
    if (username === 'test' && password === 'test') {
      navigation.navigate('MarketList');
    } else {
      Alert.alert('Error', 'User credentials are not correct, please try again!');
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <Title>Markets Info</Title>
        <Input
          onChangeText={this.onChangeUsername} 
          placeholder='Username'
          value={username} />
        <Input
          onChangeText={this.onChangePassword}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
        />
        <TouchableOpacity onPress={this.navigateToGraph}>
          <LoginBtnText>
            Log in
          </LoginBtnText>
        </TouchableOpacity>
      </Container>
    );
  
  }
}

export default App;