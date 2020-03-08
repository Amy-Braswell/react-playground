import React from 'react'

//This component makes our context using "language"
//This context is deliberately in its own component
// so it can be directly imported into any other file

const LanguageContext = React.createContext({
    lang: window.navigator.language,
    // Can't use this.setState here because this isn't a component!
    // We have no ability to update the language but the shape is there
    setLang:() => {

    }
})

export default LanguageContext