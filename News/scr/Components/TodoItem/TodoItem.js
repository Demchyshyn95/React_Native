import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';


export const w = Math.round(Dimensions.get('window').width);


const TodoItem = ({data: {item: {title, created, author, body}}}) => {
    const newBody = body.replace(/<[^>]+>/g, '');
    const newTitle = title.replace('<p>', '').replace('</p>', '');
    const newAuthor = author.replace(/<[^>]+>/g, '');
    const {signEl,text,h2,line,data, tinyLogo} = styles;

    return (
        <View style={signEl}>
                <Image
                    style={tinyLogo}
                    source={{
                        uri: 'https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-23.1580943870.fit_lim.size_1200x630.jpg',
                    }}
                />
            <View style={text}>
                <Text style={h2}>{newTitle}</Text>
                <Text>{newBody}</Text>
                <Text>{newAuthor}</Text>
            </View>
            <View style={data}>
                <Text>{created}</Text>
            </View>
            <Text style={line}>───────────────────────────────────────</Text>

        </View>
    )
};


const styles = StyleSheet.create({
    signEl: {
        flexDirection:'row',
     justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        height: 100,
        marginTop:10,
    },
    tinyLogo: {
        width: 100,
        height: 75,
    },
    line:{
        width:w,
    },
    data:{
    width:82,
    },

    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
        height:100,
        width: 170,
    }

});
export default TodoItem;
