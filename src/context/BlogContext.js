import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
   switch(action.type) {
      case 'edit_blogpost':
         const newBlogPost = action.payload;
         return state.map((blog) => blog.id === newBlogPost.id ? newBlogPost : blog);
      case 'add_blogpost':
         const {title, content} = action.payload;
         return [...state, {id: Math.floor(Math.random()*99999), title, content}];
      case 'delete_blogpost':
         return state.filter(blog => blog.id !== action.payload);
      default:
         return state;
   }
}

const addBlogPost = dispatch => {
  return (title, content, callback) => {
     dispatch({type: 'add_blogpost', payload: {title, content}});
     callback();
   }
}

const deleteBlogPost = dispatch => {
   return (id) => {
      dispatch({type: 'delete_blogpost', payload: id})
    }
 }

const editBlogPost = dispatch => {
   return (id, title, content, callback) => {
      dispatch({type: 'edit_blogpost', payload: {id, title, content}});
      callback();
    }
 }

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, [{id: 1, title: 'Test Edit', content: 'Test Content'}])
