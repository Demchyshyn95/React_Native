import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
  const [name, setName] = useState('');
  const [photos] = useState([
    {
      name: 'Jerry',
      url:
        'https://i.pinimg.com/originals/5b/94/46/5b944664a9953b11692d19372a1b74df.jpg',
    },
    {
      name: 'Kevin',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuN9H-Yn4E5PvxvzDIoGW7ffU1xGBjCmfsyg&usqp=CAU',
    },
    {
      name: 'Phil',
      url:
        'https://pbs.twimg.com/profile_images/440026745212006400/4x5ziUoC.jpeg',
    },
  ]);

  const show = (name) => {
    setName(name);
  }



  return (
    <View style={s.main}>
      <TextInput
        style={s.input}
        value={name}
        editable={false}
      />
      <View style={s.listPhotos}>
        {photos.map((el) => (
          <Photo photo={el} key={el.name} show={show} />
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  main: {
    backgroundColor: 'silver',
    width: '100%',
    height: '34%',
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    width: '100%',
    marginTop: 15,
    textAlign: 'center',
    height: 40,
    backgroundColor: 'white',
    color: 'red',
  },
  listPhotos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 6,
  },
});
export default Photos;
