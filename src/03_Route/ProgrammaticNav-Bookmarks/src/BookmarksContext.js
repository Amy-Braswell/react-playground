import React from 'react'


// make a context instance to store the bookmarks
// create the shape for all the methods we will implement
// create an empty array of bookmarks
const BookmarksContext = React.createContext({
    bookmarks:[],
    // these are empty updater functions so the nested components can call them to update state
    addBookmark: () => {},
    deleteBookmark: () => {}
})

export default BookmarksContext