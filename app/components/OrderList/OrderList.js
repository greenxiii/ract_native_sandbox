import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Order from '../Order/Order';

export default class OrderList extends Component {
  render() {
    let list1 = [
      {
        id: 0,
        type: 'car',
        mark: 'Honda',
        model: 'Civic',
        price: '4200'
      },
      {
        id: 1,
        type: 'car',
        mark: 'VW',
        model: 'Golf',
        price: 3200
      },
      {
        id: 2,
        type: 'car',
        mark: 'Honda',
        model: 'Civic',
        price: 4000
      },
      {
        id: 3,
        type: 'car',
        mark: 'Seat',
        model: 'Leon',
        price: 4300
      },
      {
        id: 4,
        type: 'car',
        mark: 'BMV',
        model: '525',
        price: 3100
      }
    ].map( (value, index) => <Order key={value.id} type={value.type} mark={value.mark} model={value.model} price={value.price} /> );
    
    return (
      <View style={styles.ordersList}>{ list1 }</View>
    );
  };
}

const styles = StyleSheet.create({
  ordersList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('OrderList', () => OrderList);