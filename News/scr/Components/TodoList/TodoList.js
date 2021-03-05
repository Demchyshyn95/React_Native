import React, {useEffect, useState} from 'react';
import {View,StyleSheet, FlatList} from 'react-native';

import TodoItem from "../TodoItem/TodoItem";
import Loading from "../Loading/Loading";


const useFetch = (page = 1, pageSize = 20) => {
    const [response, setResponse] = useState([]);
    const [newPage, setNewPage] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const url = `http://api.blog.testing.singree.com/?page=${page}&limit=${pageSize}`;

                const res = await fetch(url);
                const {articles, page} = await res.json();
                setResponse(prevState => [...prevState, ...articles]);
                setNewPage(page);
                setIsLoading(false)
            } catch (e) {
                setError(e);
            }
        };
        fetchData();
    }, []);
    return {response, error, isLoading,newPage};
};


const TodoList = () => {
    const [refreshing, setRefreshing] = useState(false);
    const {main} = styles;

    const {response , isLoading ,newPage, error,} = useFetch();
    console.log(response);

    const renderItem = (data) => {
        return (
            <View>
                <TodoItem data={data}/>
            </View>
        );
    };

    const LoadMore = () => {
        const newPage = newPage + 1;
        useFetch();
    }

    const Refresh =  () => {
        setRefreshing(true);
        useFetch();
        setRefreshing(false);
    }

    return (
        <View>
            {
                isLoading
                    ? <Loading/>
                    : <FlatList
                        contentContainerStyle={main}
                        data={response}
                        renderItem={renderItem}
                        keyExtractor={(el) => el._id + Math.random().toFixed(2)}
                        onEndReached={LoadMore}
                        onEndReachedThreshold={0.5}
                        onRefresh={Refresh}
                        refreshing={refreshing}
                    />
            }
        </View>
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
