import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data: blogPosts, addBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Text>IndexScreen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item})=> <Text>{item.title}</Text>}
            />
            <Button title="Add Post" onPress={addBlogPost}/>
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
