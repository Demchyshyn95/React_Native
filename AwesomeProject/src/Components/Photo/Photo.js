import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';

const Photo = ({ photo, show }) => {
    const { name, url} = photo;

  return (
    <View style={s.card}>
        <TouchableOpacity onPress={ () => show(name) } >
            <Image
                style={s.img}
                source={{
                    uri: url,
                }}
            />
        </TouchableOpacity>


      <View style={s.btn}>
        <Button onPress={ () => show(name) }  title="Show" />
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  card: {
    width: 150,
    height: 100,
  },
  img: {
    width: 100,
    height: 100,
  },
  btn: {
    marginTop: 10,
    width: 100,
  },
});
export default Photo;
