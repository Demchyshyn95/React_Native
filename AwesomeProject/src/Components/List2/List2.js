import React, {useState} from 'react';
import {View, Text, TextInput,FlatList, StyleSheet} from 'react-native';
import Item from '../Item/Item';

const List2 = () => {
    const array = ['Apple','Lemond', 'OOOrange','Juice','Applse' ,'Lemdon', 'Juivce'];
    const {container} = style;

    const renderItem = ({item}) => {
        return (
            <View>
                <Item item={item}/>
            </View>
        );
    };

    return (
            <FlatList
                contentContainerStyle={style.main}
                data={array}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                numColumns={2}
            />
    );
};

const style = StyleSheet.create({
    container: {

    },
    main: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'red',
    },
});

export default List2;
