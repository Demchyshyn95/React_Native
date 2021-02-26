import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';

import {newsService} from "../../Service";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = () => {

    const [news, setNews] = useState([]);
    const [newPage, setNewPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const [newPageCount, setNewPageCount] = useState(20);

    const { main } = styles;


    const getNews = async () => {
        const { articles, pagesCount, page } = await new newsService().getNews(newPage, newPageCount);

        setNews(prevState => [ ...prevState, ...articles]);
        setNewPage(page+1);
        setRefreshing(false);
    }

    useEffect(() => {
        getNews();
    }, []);


    const renderItem = (data) => {
        return (
            <View>
                <TodoItem data={ data }/>
            </View>
        );
    };

    const LoadMore = () => {
      getNews();
    }
    const Refresh = async () => {
        const { articles } = await new newsService().getNews();
        setNews(articles);
    }

    return (
        <FlatList
            contentContainerStyle={ main }
            data={ news }
            renderItem={ renderItem }
            keyExtractor={(el) => el._id + Math.random().toFixed(2)}
            onEndReached={ LoadMore }
            onEndReachedThreshold={ 0.5 }
            onRefresh={ Refresh }
            refreshing={ refreshing }
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
