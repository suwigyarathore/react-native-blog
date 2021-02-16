import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext'

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item})=> <View style={styles.row}>
                                         <Text style={styles.title}>{item.title}-{item.id}</Text>
                                         <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather style={styles.icon} name="trash"/></TouchableOpacity>
                                       </View>
                    }
            />
        </View>
    )
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
