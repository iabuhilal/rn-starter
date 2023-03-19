import React from "react";
import { Text, StyleSheet, View, Button , TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return <View>
    <Text style={styles.text}>Hi there koko </Text>
    <Button 
      title="Go to Component Demo" 
      onPress={() =>
        props.navigation.navigate('Components')
        // console.log('button press')
      } />
      <TouchableOpacity
       onPress={() => props.navigation.navigate('List')
        
        // console.log('List pressed')
      }
      >
      <Text >Go to Component Demo</Text>
      <Text >Go to Component Demo</Text>
      <Text >Go to Component Demo</Text>


      </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

