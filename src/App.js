import React, { Component } from "react";
import Drawer from "./Drawer";
import Person from "./screens/Person";
import { Router, Scene } from "react-native-router-flux";
import { Right, Icon } from "native-base";

class App extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  render() {
    return (
      <Router hideNavBar>
        <Scene key="root" hideNavBar>
          <Scene
            key="Drawer"
            hideNavBar
            component={Drawer}
            title="Drawer"
            initial={true}
          />
          <Scene
            key="Person"
            hideNavBar={false}
            component={Person}
            title="Back"
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
