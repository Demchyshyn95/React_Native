import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Item = ({item}) => {
  return (
    <View style={style.cor}>
      <TouchableOpacity>
        <Text style={{color: 'red', textAlign: 'center', fontSize: 20}}>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  cor: {
    backgroundColor: 'yellow',
    width: 150,
    borderRadius: 20,
    margin: 10,
  },
});
export default Item;
