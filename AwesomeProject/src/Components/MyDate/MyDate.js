import React, {useState} from 'react';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';

const MyDate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState('');

  const hidePicker = () => {
    setIsVisible(false);
  };

  const showPicker = () => {
    setIsVisible(true);
  };

  const handleConfirm = (datetime) => {
    hidePicker();
    setDate(moment(datetime).format('MMMM Do YYYY, h:mm a'));
  };

  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Select your date"
        editable={false}
        value={date}
      />

      <TouchableOpacity style={s.btn} onPress={showPicker}>
        <Text style={s.text}>Show DatePicker</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isVisible}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        mode="datetime"
        is24Hour={true}
        minimumDate={new Date()}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 45,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 40,
  },
});

export default MyDate;
