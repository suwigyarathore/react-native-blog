import React, { useContext } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) =>  <BlogContext.Provider value={5}>
                                                {children}
                                             </BlogContext.Provider>

export default BlogContext;
