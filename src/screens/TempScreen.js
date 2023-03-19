import React from "react";
import { Text,StyleSheet, View } from "react-native";

const TempScreen = () => {

    return( <View>
        <Text style={styles.textStyle}>TempScreen</Text>
        </View>);
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});

export default TempScreen;
