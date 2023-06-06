/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {Goal} from "./src/components/Goal";


function App() {
    const [showNotification, setShowNotification] = useState(true)
    const [notificationMessage, changeNotificationMessage] = useState('')


    const DisplaySnackBar = () => {
        changeNotificationMessage('This is an app notification snackbar to show to the user when they perform an action. Clicking it should change the text')
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false)
        }, 10000)
    };


    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{}} contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: '#fafafa',
                position: 'relative',
                paddingBottom: 60
            }}>
                <View style={{flex: 1}}>
                    <View style={{backgroundColor: '#485b7d', padding: 15, paddingBottom: 35}}>
                        <Text style={[styles.titleText, {
                            color: 'white',
                            fontSize: 25,
                            fontWeight: '300'
                        }]}><Text>Afternoon</Text> <Text style={{fontWeight: '800'}}>jo</Text> </Text>
                        <Text style={[styles.titleText, {color: 'white'}]}>Here's the latest</Text>
                        <Text style={[styles.titleText, {fontSize: 25, color: '#70e972'}]}>KES 42,000</Text>
                        <Text style={[styles.titleText, {color: 'white'}]}>Total funds</Text>
                    </View>
                    {showNotification &&
                        <TouchableOpacity onPress={() => changeNotificationMessage('The notification has been clicked')}
                                          style={styles.snackbar_container}>
                            <Text style={{color: 'white', width:'80%', textAlign:'justify'}}>{notificationMessage}</Text>
                            <TouchableOpacity onPress={() => setShowNotification(false)}>
                                <Text style={{fontWeight: '400', color: 'white', fontSize:25}}>x</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }

                    <View style={styles.goals_container}>
                        <Text style={{paddingBottom: 20, fontWeight: '400', color: '#484444'}}>Your Goals</Text>

                        <Goal name="Goal 1" amount='12,500'></Goal>
                        <Goal name="Goal 2" amount='14,500'></Goal>

                    </View>
                </View>


                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#70e972',
                        width: 250,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        padding: 10
                    }}
                    disabled={showNotification}
                    onPress={() => DisplaySnackBar()}
                ><Text style={{color: 'white', fontWeight: '400'}}>Show Snackbar</Text></TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleText: {
        marginBottom: 8
    },

    snackbar_container: {
        position: 'absolute',
        top: 20,
        // left: 10,
        width: '95%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#eb5581',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf:'center'
    },

    goals_container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },

    goal_container: {
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 8
    },
});

export default App;
