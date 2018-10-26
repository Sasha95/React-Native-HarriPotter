import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";
import { Header, Left, Icon } from "native-base";

class MainScreen extends Component {
  render() {
    return (
      <View>
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
        </View>
        <View style={styles.container}>
          <Image source={require("../../resource/logo.png")} />
          <Text style={styles.descript}>Author: J. K. Rowling</Text>
          <Text style={styles.descript}> Country: United Kingdom</Text>
          <Text style={styles.descript}>Genre: Fantasy, drama</Text>
          <Text style={styles.descript}>Language: English</Text>
          <Text style={styles.descript}>Publisher: Scholastic (US)</Text>
          <Text style={styles.descript}>
            Published: 26 June 1997 – 21 July 2007
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.canOpenURL("https://www.pottermore.com/").then(
                supported => {
                  if (supported) {
                    Linking.openURL("https://www.pottermore.com/");
                  } else {
                    console.log(
                      "Don't know how to open URI: https://www.pottermore.com/"
                    );
                  }
                }
              );
            }}
          >
            <Text style={styles.descript}>
              site:{" "}
              <Text style={{ color: "blue" }}>https://www.pottermore.com/</Text>
            </Text>
          </TouchableOpacity>
          <Image
            style={{ marginTop: 50 }}
            source={require("../../resource/poster.png")}
          />
        </View>
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35
  },
  descript: {
    fontSize: 20,
    color: "#333333"
  }
});
