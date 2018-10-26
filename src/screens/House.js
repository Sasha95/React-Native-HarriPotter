import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header, Left, Icon, Spinner } from "native-base";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Peoples from "./Peoples";

class House extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  async componentDidMount() {
    await this.props.fetchData(this.props.houseName);
  }

  render() {
    return this.props.isFetching ? (
      <Spinner />
    ) : (
      <View>
        <Header
          style={{
            backgroundColor: "white",
            justifyContent: "flex-start"
          }}
        >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <View style={styles.container}>
          <Image source={this.props.img} style={{ height: 150, width: 150 }} />

          {this.props.store.appData.data.data !== undefined ? (
            <Peoples data={this.props.store.appData.data.data} />
          ) : (
            <Text />
          )}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.appData.isFetching,
    data: state.appData.data,
    store: state
  };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(House);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25
  }
});
