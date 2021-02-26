import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Dimensions} from "react-native";
import TodoList from "./scr/Components/TodoList/TodoList";


const App = () => {

    return (
            <View>
                <TodoList/>
            </View>
    )
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    }
})

export default App;
