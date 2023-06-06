import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export function Goal({name, amount}) {

    return (
        <View style={[styles.goal_container, {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }]}>
            <View style={{paddingVertical: 14}}>
                <Text style={{fontWeight:'400'}}>{name}</Text>
                <Text style={{fontSize:10}}>KES {amount}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{
                    backgroundColor: '#70e972',
                    color: 'white',
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 8,
                    fontSize:12
                }}>Finish Goal</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '100%',
                    // backgroundColor: 'red',
                    paddingLeft: 8,
                    borderLeftColor:'#e1d3d3',
                    borderLeftWidth:1,
                    marginLeft:12
                }}>
                    <Image style={{height: 10, width: 10}}
                           source={require("../assets/images/caret.png")}/>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    goal_container: {
        elevation: 4, // Adjust the value to control the depth of the shadow
        backgroundColor: 'white', // Set a background color for the shadow to be visible
        borderRadius: 10,
        paddingHorizontal:8,
        paddingVertical:2,
        marginBottom:10
    },
});