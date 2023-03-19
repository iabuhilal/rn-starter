import React from "react";
import { Text,StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting ='Hi Ihab';
    const greeting2 =<Text >hi 2ahoob is </Text>;


    return( <View>
        <Text style={styles.textStyle}>This is the component screen</Text>
        <Text >hi 2ahoob is {greeting}</Text>
        {greeting2}
        </View>);
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});

export default ComponentsScreen;
