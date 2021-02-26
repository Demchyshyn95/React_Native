import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Photos from './src/Components/Photos/Photos';
import MyDate from './src/Components/MyDate/MyDate';
import SignIn from './src/Components/SignIn/SignIn';
import List from './src/Components/List/List';
import List2 from './src/Components/List2/List2';

const App = () => {
  const {container} = styles;
  return (
    <View style={container}>
        <Photos/>
      <SignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default App;
