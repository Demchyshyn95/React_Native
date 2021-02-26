import React, {useEffect, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {newsService} from "../../Service";
import TodoItem from "../TodoItem/TodoItem";



const TodoList = () => {

    const [news, setNews] = useState(null);
    const [page, setPage] = useState(null);
    const [pageCount, setPageCount] = useState(null);

    const getNews = async () => {
        const {articles, pagesCount, page} = await new newsService().getNews(1, 21);
        setNews(articles);
        setPage(page);
        setPageCount(pagesCount);
    }

    useEffect(() => {
        getNews();
    }, []);

    const renderItem = (data) => {
        return (
            <View>
                <TodoItem data={data}/>
            </View>
        );
    };
   const {main,btn,text} = styles;
    return (
            <FlatList
                contentContainerStyle={main}
                data={news}
                renderItem={renderItem}
                keyExtractor={(news)=> news._id}
            />
    )
};

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'column',
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
});
export default TodoList;
