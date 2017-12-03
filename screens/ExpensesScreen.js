import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class ExpensesScreen extends Component {
  static navigationOptions = {
    title: 'Expenses',
  };

  constructor(props){
   super(props)
   this.state = { date: '2016-05-01' }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add Details
        </Text>

        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10
 },
});
