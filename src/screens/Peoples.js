import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

class Peoples extends Component {
  render() {
    // console.log(this.props.data);
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Students</Text>
        {this.props.data.map(
          (x, index) =>
            x.hogwartsStudent ? (
              <Text
                onPress={() => Actions.Person({ aboutPerson: x })}
                style={styles.names}
                key={index}
              >
                {x.name}
              </Text>
            ) : null
        )}
        <Text style={styles.titleText}>Staff</Text>
        {this.props.data.map(
          (x, index) =>
            x.hogwartsStaff ? (
              <Text
                onPress={() => Actions.Person({ aboutPerson: x })}
                style={styles.names}
                key={index}
              >
                {x.name}
              </Text>
            ) : null
        )}
        <Text style={styles.titleText}>Part-time</Text>
        {this.props.data.map(
          (x, index) =>
            !x.hogwartsStaff && !x.hogwartsStudent ? (
              <Text
                onPress={() => Actions.Person({ aboutPerson: x })}
                style={styles.names}
                key={index}
              >
                {x.name}
              </Text>
            ) : null
        )}
      </View>
    );
  }
}

export default Peoples;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  names: {
    fontSize: 15,
    padding: 5
  }
});
