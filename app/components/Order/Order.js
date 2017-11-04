import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class Order extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      count: 1,
      total: 0
    }
  };
  addCount() {
    this.setState({
      count: this.state.count + 1,
      total: this.props.price * this.state.count
    })
  }
  minusCount() {
    this.setState({
      count: (this.state.count !== 0)?this.state.count - 1:0,
      total: (this.state.count !== 0)?this.props.price / this.state.count:0
    })
  }
  render() {
    var { type, model, mark, price } = this.props;
    this.state.total = price * this.state.count;
    var { total, count } = this.state;
    
    return (
      <View style={styles.order}>
        <Text style={styles.orderText}>{ mark }</Text>
        <Text style={styles.orderText}>{ model }</Text>
        <Text style={styles.orderText}>${ price }</Text>
        <Text style={styles.orderText}>Count: { count }</Text>
        <Text style={styles.orderText}>Total: ${ total }</Text>
        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.btn} onPress={this.addCount.bind( this )}>
            <Text style={styles.btnTxt}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} onPress={this.minusCount.bind( this )}>
            <Text style={styles.btnTxt}>-</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  order: {
    width: 140,
    backgroundColor: '#262626',
    padding: 10,
    margin: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  orderText: {
    color: '#fff',
    margin: 4
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnTxt: {
    width: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    margin: 4,
  }
});

AppRegistry.registerComponent('Order', () => Order);
