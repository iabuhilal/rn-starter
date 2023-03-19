import React from "react";
import { Text,StyleSheet, View } from "react-native";

const ImageDetail = () => {

    return( <View>
        <Text >hi 2ahoob </Text>
        <Text style={styles.textStyle}>ImageDetail</Text>
        </View>);
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});

export default ImageDetail;
