import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Item from '../Item/Item';

const List = () => {
  const array = ['Apple', 'Orange', 'Lemon', 'Juice'];
  const {container} = style;
  return (
    <View style={container}>
      {array.map((el) => (
        <Item item={el} key={el} />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 3,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default List;
