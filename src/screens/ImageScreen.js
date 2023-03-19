import React from "react";
import { Text,StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

    return( <View>
        
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        </View>);
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15
    }
});

export default ImageScreen;
