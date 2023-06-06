/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useRef} from "react";
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
import SnackBar from "./components/SnackBar";


function App() {
  const isDarkMode = useColorScheme() === "dark";
  const snackBarRef = useRef(null);


  const DisplaySnackBar = () => {
    if (snackBarRef.current) {
      snackBarRef.current.ShowSnackBarFunction("Snackbar example");
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle} contentContainerStyle={{height:'100%', backgroundColor:'#fafafa',position:'relative'}}>
        <View style={{backgroundColor:'#192436'}}>
          <Text style={{color:'white', fontWeight:'bold'}}>Afternoon jo</Text>
          <Text style={{color:'white'}}>Here's the latest</Text>
          <Text>KES 42,000</Text>
          <Text style={{color:'white'}}>Total funds</Text>
        </View>
        <View style={{padding:10}} >
          <Text>Your Goals</Text>


          <View style={[styles.goal_container,{flexDirection:'row', justifyContent:'space-between', padding:10}]}>
            <View  >
              <Text>Goal 1</Text>
              <Text>KES 12,000</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
              <Text>Finish Goal</Text>
              <Text> | </Text>
              <Text>Icon</Text>
            </View>
          </View>
          {/*<SnackBar ref={snackBarRef} />*/}


        </View>

        {/*<Button style={{position:'absolute',bottom:0,width:20}} onPress={()=>{DisplaySnackBar()}} title=" Show SnackBar ">*/}
        {/*</Button>*/}

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

  goal_container: {
    shadowColor: '#000',            // Shadow color
    shadowOffset: { width: 0, height: 2 },  // Shadow offset (width, height)
    shadowOpacity: 0.3,             // Shadow opacity
    shadowRadius: 4,                // Shadow radius
    elevation: 4, // Android-specific elevation for shadow
  },
});

export default App;
