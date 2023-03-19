import React from "react";
import { Text, StyleSheet, View } from "react-native";

const GetStartedExample1Screen = () => {

    const name = 'Ihab';

    return <View>
        <Text style={styles.headerStyle}>Get Started with React native</Text>
        <Text style={styles.textStyle}>My Name is {name}</Text></View>;
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    },
    headerStyle: {
        fontSize: 45
    },
});

export default GetStartedExample1Screen;


