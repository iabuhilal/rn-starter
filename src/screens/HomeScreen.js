import React from "react";
import { Text, StyleSheet, View, Button , TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  return <View>
    <Text style={styles.text}>Hi there koko </Text>
    <Button 
      title="Go to Component Demo" 
      onPress={() =>
        navigation.navigate('Components')
        // console.log('button press')
      } />
      <TouchableOpacity
       onPress={() => navigation.navigate('List')
        
        // console.log('List pressed')
      }
      >
      <Text >Go to Component Demo</Text>
      </TouchableOpacity>


      <Button 
      title="Go To ImageScreen" 
      onPress={() =>
        navigation.navigate('Images')
        // console.log('button press')
      } />
      


  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

