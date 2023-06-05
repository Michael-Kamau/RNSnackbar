/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from "react-native";

import {
  Colors,
  Header,
} from "react-native/Libraries/NewAppScreen";


function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{backgroundColor:'#192436'}}>
          <Text>Afternoon jo</Text>
          <Text>Here's the latest</Text>
          <Text>KES 42,000</Text>
          <Text>Total funds</Text>
        </View>
        <View>
          <Text>Your Goals</Text>


          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', backgroundColor:'red', padding:10}}>
            <View>
              <Text>Goal 1</Text>
              <Text>KES 12,000</Text>

            </View>
            <View>
              <Text>Icon</Text>
            </View>
          </View>

          {/*<Button>Submit</Button>*/}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
