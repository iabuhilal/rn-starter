import React from "react";
import { Text,StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    // key must be uniqe and string  key: '1' 
    const friends = [ 
        { name: 'Friend #1' }, 
        { name: 'Friend #2' }, 
        { name: 'Friend #3' }, 
        { name: 'Friend #4' }, 
        { name: 'Friend #5' }, 
        { name: 'Friend #6' }, 
        { name: 'Friend #7' }, 
        { name: 'Friend #8' }, 
    
    
    ];

    return (
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={friends}   
    keyExtractghjkor = {(friend) => friend.name}  
    renderItem={({item}) => {
        return <Text style={styles.text}>{item.name}</Text>;
    }}
    />
    );
  };
  
  const styles = StyleSheet.create({
    text: {
        marginVertical:50,
      fontSize: 30,
    },
  });
  
  export default ListScreen;
  