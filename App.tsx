/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PureChart from 'react-native-pure-chart';

type Props = {};
export default class App extends Component<Props> {
  render() {
    let sampleData = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 200},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 250},
      {x: '2018-01-05', y: 10}
    ];
    return (
      <View style={styles.container}>
        <PureChart data={sampleData} type='line' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
