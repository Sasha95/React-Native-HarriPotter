import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { connect } from "react-redux";

import { createDrawerNavigator, DrawerItems } from "react-navigation";
import House from "./screens/House";
import MainScreen from "./screens/Main";
import pushPhoto from "./actions";
const { width } = Dimensions.get("window");

class Drawer extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {console.log(this.props)}
      <Image
        source={require("../resource/hat.png")}
        style={{ height: 120, width: 150, borderRadius: 20 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: props => <MainScreen {...props} />,
    Gryffindor: props => (
      <House
        {...props}
        houseName={"Gryffindor"}
        img={require("../resource/Gryffindor.png")}
      />
    ),
    Slytherin: props => (
      <House
        {...props}
        houseName={"Slytherin"}
        img={require("../resource/Slytherin.png")}
      />
    ),
    Hufflepuff: props => (
      <House
        {...props}
        houseName={"Hufflepuff"}
        img={require("../resource/Hufflepuff.png")}
      />
    ),
    Ravenclaw: props => (
      <House
        {...props}
        houseName={"Ravenclaw"}
        img={require("../resource/Ravenclaw.png")}
      />
    )
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  return {
    img: state
  };
}

export default connect(
  mapStateToProps,
  { pushPhoto }
)(Drawer);
