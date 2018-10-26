import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "native-base";

class Person extends Component {
  render() {
    const { aboutPerson } = this.props;
    console.log(aboutPerson);
    return (
      <View style={styles.container}>
        {aboutPerson.image ? (
          <Image
            source={{ uri: aboutPerson.image }}
            style={{
              height: 200,
              width: 200,
              marginBottom: 20,
              borderRadius: 20
            }}
          />
        ) : (
          <Spinner />
        )}

        <Text style={styles.descript}>name: {aboutPerson.name}</Text>
        <Text style={styles.descript}>ancestry: {aboutPerson.ancestry}</Text>
        <Text style={styles.descript}>
          date of birth: {aboutPerson.dateOfBirth}
        </Text>
        <Text style={styles.descript}>eye colour: {aboutPerson.eyeColour}</Text>
        <Text style={styles.descript}>gender: {aboutPerson.gender}</Text>
        <Text style={styles.descript}>
          hair colour: {aboutPerson.hairColour}
        </Text>
        <Text style={styles.descript}>house: {aboutPerson.house}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.appData.data,
    img: state.aboutPerson
  };
}

export default connect(mapStateToProps)(Person);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25
  },
  descript: {
    fontSize: 20,
    color: "#333333"
  }
});
