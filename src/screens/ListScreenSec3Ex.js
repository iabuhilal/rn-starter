import React from "react";
import { Text,StyleSheet, View, FlatList } from "react-native";

const ListScreenSec3Ex = () => {
    // key must be uniqe and string  key: '1' 
    const friends = [ 
        { name: 'Friend #1' ,age:10 }, 
        { name: 'Friend #2' ,age:11}, 
        { name: 'Friend #3' ,age:12}, 
        { name: 'Friend #4' ,age:13}, 
        { name: 'Friend #5' ,age:14}, 
        { name: 'Friend #6' ,age:15}, 
        { name: 'Friend #7' ,age:16}, 
        { name: 'Friend #8' ,age:17}, 
    
    
    ];

    return (
    <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator={}
    data={friends}   
    keyExtractghjkor = {(friend) => friend.name}  
    renderItem={({item}) => {
        return <Text style={styles.text}>{item.name} - Age {item.age}</Text>;
    }}
    />
    );
  };
  
  const styles = StyleSheet.create({
    text: {
        marginVertical:5,
      fontSize: 30,
    },
  });
  
  export default ListScreenSec3Ex;
  