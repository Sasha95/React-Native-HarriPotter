import React from "react";
import { AppRegistry, Button } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";
import App from "./src/App";
import Person from "./src/screens/Person";
import { Router, Scene } from "react-native-router-flux";
import { Header, Right, Icon, Spinner } from "native-base";
import Drawer from "./src/Drawer";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp, __DEV__ === true);
