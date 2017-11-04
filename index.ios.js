/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import OrderList from './app/components/OrderList/OrderList';

export default class myapp1 extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <OrderList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

AppRegistry.registerComponent('myapp1', () => myapp1);
