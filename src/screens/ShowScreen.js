import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    const id = navigation.getParam('id');
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

export default ShowScreen

const styles = StyleSheet.create({})
