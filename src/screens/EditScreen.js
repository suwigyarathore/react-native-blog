import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext';
import  BlogPostForm  from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context); 
    const blogPost = state.find(blog => blog.id === id)

    return <BlogPostForm initialValues={{title: blogPost.title, content: blogPost.content}} onSubmit={(title, content) => {
       editBlogPost(id, title, content, () => navigation.navigate('Index'))
    }}/>
}

export default EditScreen

const styles = StyleSheet.create({})
