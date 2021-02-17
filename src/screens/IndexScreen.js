import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext'

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item})=> <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                                        <View style={styles.row}>
                                            <Text style={styles.title}>{item.title}-{item.id}</Text>
                                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather style={styles.icon} name="trash"/></TouchableOpacity>
                                        </View>
                                       </TouchableOpacity>
                    }
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
        ),
    };
}

export default IndexScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})
